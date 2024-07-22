import { ButtonProps } from './props'
import { CustomButtom } from './styles'

export function Button({ children, variant, size }: ButtonProps) {
  return (
    <CustomButtom size={size} variant={variant}>
      {children}
    </CustomButtom>
  )
}
