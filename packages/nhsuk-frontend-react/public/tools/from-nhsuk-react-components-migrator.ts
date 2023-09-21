import type { Transform } from 'jscodeshift'

const formAttributesToRemove = ['disabled', 'disableErrorFromComponents']

const transform: Transform = (file, api, options) => {
  const j = api.jscodeshift
  const printOptions = options.printOptions || {}

  const root = j(file.source)

  const oldImports = root
    .find(j.ImportDeclaration, { type: 'ImportDeclaration' })
    .filter(({ value }) => {
      return (
        (value.source.type === 'Literal' ||
          value.source.type === 'StringLiteral') &&
        value.source.value === 'nhsuk-react-components'
      )
    })

  if (oldImports.length === 0) {
    return file.source
  }

  const formSpecifiers: string[] = []
  const inputSpecifiers: string[] = []
  const colSpecifiers: string[] = []

  // update old imports
  oldImports.forEach((path) => {
    path.node.specifiers = path.node.specifiers?.filter((specifier) => {
      if (specifier.type !== 'ImportSpecifier') {
        return true
      }

      let shouldKeep = false

      switch (specifier.imported.name) {
        case 'Form':
          formSpecifiers.push(specifier.local?.name ?? specifier.imported.name)
          shouldKeep = false
          break
        case 'Input':
          inputSpecifiers.push(specifier.local?.name ?? specifier.imported.name)
          shouldKeep = true
          break
        case 'Col':
          specifier.imported.name = 'Column'
          !specifier.local && colSpecifiers.push(specifier.imported.name)
          shouldKeep = true
          break
        default:
          shouldKeep = true
          break
      }

      return shouldKeep
    })

    path.node.source.value = 'nhsuk-frontend-react'
  })

  formSpecifiers
    .map((name) => root.findJSXElements(name))
    .forEach((formUsage) => {
      formUsage.forEach((form) => {
        const attributes = form.node.openingElement.attributes?.filter(
          (attribute) => {
            if (attribute.type !== 'JSXAttribute') {
              return true
            }

            return !formAttributesToRemove.includes(
              attribute.name.name as string,
            )
          },
        )

        form.node.openingElement = j.jsxOpeningElement(
          j.jsxIdentifier('form'),
          attributes,
        )
        form.node.closingElement = j.jsxClosingElement(j.jsxIdentifier('form'))
      })
    })

  inputSpecifiers
    .map((name) => root.findJSXElements(name))
    .forEach((inputUsage) => {
      inputUsage.forEach((input) => {
        input.node.openingElement.attributes?.forEach((attribute) => {
          if (
            attribute.type === 'JSXAttribute' &&
            attribute.name.name === 'width' &&
            attribute.value?.type === 'JSXExpressionContainer' &&
            attribute.value?.expression.type === 'NumericLiteral'
          ) {
            attribute.value = j.stringLiteral(
              `${attribute.value.expression.value}`,
            )
          }
        })
      })
    })

  colSpecifiers
    .map((name) => root.findJSXElements(name))
    .forEach((colUsage) => {
      colUsage.forEach((col) => {
        const attributes = col.node.openingElement.attributes

        col.node.openingElement = j.jsxOpeningElement(
          j.jsxIdentifier('Column'),
          attributes,
        )
        col.node.closingElement = j.jsxClosingElement(j.jsxIdentifier('Column'))
      })
    })

  return root.toSource(printOptions)
}

export default transform
