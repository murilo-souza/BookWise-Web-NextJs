import React, { TextareaHTMLAttributes } from 'react'
import { Container } from './styles'

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  maxLength?: number
}

export function TextArea({ maxLength, ...rest }: TextAreaProps) {
  const valueLength = String(rest.value)?.length ?? 0

  return (
    <Container>
      <textarea {...rest} maxLength={maxLength} />
      {maxLength && (
        <span>
          {valueLength}/{maxLength}
        </span>
      )}
    </Container>
  )
}
