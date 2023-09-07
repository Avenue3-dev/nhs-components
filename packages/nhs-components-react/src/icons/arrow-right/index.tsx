import { Icon } from '@/types/icon'
import clsx from 'clsx'

export const ArrowRightIcon: React.FC<Icon> = ({
  width = 34,
  height = 34,
  className,
  ...rest
}): JSX.Element => {
  return (
    <svg
      className={clsx('nhsuk-icon nhsuk-icon__arrow-right', className)}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      width={width}
      height={height}
    >
      <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"></path>
    </svg>
  )
}
