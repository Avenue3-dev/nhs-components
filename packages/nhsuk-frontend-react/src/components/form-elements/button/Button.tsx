'use client';

import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { Base, BaseProps } from '@/components/core/base/Base';
import {
  polymorphicFactory,
  PolymorphicFactory,
} from '@/internal/factory/polymorphic-factory';
import clsx from 'clsx';
import initButton from 'nhsuk-frontend/packages/components/button/button';
import { AsElementProps } from '@/types/shared';

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'reverse';
  disabled?: boolean;
  preventDoubleClick?: boolean;
  type?: 'button' | 'submit' | 'reset';
} & BaseProps;

type ButtonFactory = PolymorphicFactory<{
  props: ButtonProps;
  defaultComponent: 'button';
  defaultRef: HTMLButtonElement;
}>;

const Button = polymorphicFactory<ButtonFactory>(
  (
    {
      className,
      children,
      variant = 'primary',
      disabled,
      preventDoubleClick,
      type = 'button',
      as: component = 'button',
      ...props
    }: ButtonProps & AsElementProps,
    ref,
  ) => {
    const internalRef = useRef<HTMLElement>(null);

    useImperativeHandle(ref, () => internalRef.current as HTMLButtonElement);

    useEffect(() => {
      if (!internalRef.current) {
        return;
      }

      const parentNode = (internalRef.current as unknown as HTMLElement)
        .parentNode;

      if (!parentNode) {
        return;
      }

      setTimeout(() => {
        initButton({
          scope: parentNode,
        });
      }, 0);
    }, [internalRef]);

    const notButton = component !== 'button';

    return (
      <Base<any>
        as={component}
        className={clsx(
          'nhsuk-button',
          {
            'nhsuk-button--secondary': variant === 'secondary',
            'nhsuk-button--reverse': variant === 'reverse',
            'nhsuk-button--disabled': disabled,
          },
          className,
        )}
        data-module="nhsuk-button"
        data-prevent-double-click={preventDoubleClick ? 'true' : undefined}
        role={notButton ? 'button' : undefined}
        draggable={notButton ? 'false' : undefined}
        type={notButton ? undefined : type}
        disabled={notButton || !disabled ? undefined : true}
        aria-disabled={disabled ? 'true' : undefined}
        {...props}
        ref={internalRef}
      >
        {children}
      </Base>
    );
  },
);

Button.displayName = 'Button';

export { Button };
