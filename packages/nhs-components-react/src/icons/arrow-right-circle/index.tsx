import { Icon } from '@/types/icon'
import clsx from 'clsx'

export const ArrowRightCircleIcon: React.FC<Icon> = ({
  width = 36,
  height = 36,
  className,
  ...rest
}): JSX.Element => {
  return (
    <svg
      className={clsx('nhsuk-icon nhsuk-icon__arrow-right-circle', className)}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      width={width}
      height={height}
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z"></path>
    </svg>
  )
}

ArrowRightCircleIcon.displayName = 'ArrowRightCircleIcon'
