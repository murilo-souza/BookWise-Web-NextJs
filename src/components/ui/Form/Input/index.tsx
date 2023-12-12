import React, { InputHTMLAttributes, ReactNode } from 'react'
import { InputContainer } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode
}

export function Input({ icon, ...rest }: InputProps) {
  return (
    <InputContainer>
      <input {...rest} />
      {icon}
    </InputContainer>
  )
}
