import { ReactNode } from 'react'

export const COLOR = {
  yellow: 'yellow',
  gray: 'gray-card',
  red: 'red-danger',
  blue: 'blue',
}

export const Size = {
  small: '9px',
  medium: '20px',
  large: '36px',
}

export interface ButtonProps {
  children: ReactNode
  variant?: keyof typeof COLOR
  size?: keyof typeof Size
}

export interface CustomButtonProps {
  variant?: keyof typeof COLOR
  size?: keyof typeof Size
}
