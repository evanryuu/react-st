export type ButtonType = 'default' | 'link'

interface IBaseButtonProps {
  className?: string
  disabled?: boolean
  /** Button color type */
  btnType?: ButtonType
  children: React.ReactNode
  href?: string
}

type NativeButtonProps = IBaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = IBaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    btnType,
    disabled,
    href,
    children,
    ...restProps
  } = props

  if (btnType === 'link' && props.href) {
    return (
      <a
        className="btn btn-link"
        href={href}
        {...restProps}
      >
        { children }
      </a>
    )
  }
  return (
    <button
      className="btn btn-default"
      type="button"
      disabled={disabled}
      {...restProps}
    >
      { children }
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
  btnType: 'default',
}

export default Button
