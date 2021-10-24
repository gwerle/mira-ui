import { useState, InputHTMLAttributes, HTMLInputTypeAttribute } from 'react'

import * as S from './styles'

export type TextFieldProps = {
  onInput?: (value: string) => void
  label?: string
  labelFor?: string
  initialValue?: string
  disabled?: boolean
  error?: string
  fieldType?: HTMLInputTypeAttribute
} & InputHTMLAttributes<HTMLInputElement>

const TextInput = ({
  onInput,
  label,
  labelFor,
  initialValue = '',
  disabled = false,
  error,
  fieldType = 'text',
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setValue(value)

    !!onInput && onInput(value)
  }

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        <S.Input
          onChange={handleChange}
          value={value}
          type={fieldType}
          disabled={disabled}
          {...props}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextInput
