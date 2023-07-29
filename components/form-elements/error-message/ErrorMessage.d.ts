import { HTMLProps } from 'react';
export type ErrorMessageProps = {
    visuallyHiddenText?: string;
} & HTMLProps<HTMLSpanElement>;
/**
 * Use an error message when there is a validation error. Explain what went wrong and how to fix it.
 *
 * For more information on when to use this component, go the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/error-message).
 *
 *
 * @param {string} [props.className] - Optional additional className to add to the component.
 * @param {string} [props.visuallyHiddenText] - Visually hidden text for screen readers. Defaults to 'Error'.
 *
 * @example
 * ```tsx
 * <ErrorMessage>Example error message</ErrorMessage>
 * ```
 */
declare const ErrorMessage: React.FC<ErrorMessageProps>;
export default ErrorMessage;
