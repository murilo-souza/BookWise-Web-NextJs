import React, { InputHTMLAttributes, ReactNode } from 'react'
import { InputContainer } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode
  Vsize?: 'md' | 'lg'
}

export function Input({ icon, Vsize = 'md', ...rest }: InputProps) {
  return (
    <InputContainer Vsize={Vsize}>
      <input {...rest} />
      {icon}
    </InputContainer>
  )
}
