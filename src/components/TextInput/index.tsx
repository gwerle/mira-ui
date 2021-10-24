import { useState, InputHTMLAttributes } from 'react'

import * as S from './styles'

export type TextFieldProps = {
  onInput?: (value: string) => void
  label?: string
  labelFor?: string
  initialValue?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextInput = ({
  onInput,
  label,
  labelFor,
  initialValue
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setValue(value)

    !!onInput && onInput(value)
  }

  return (
    <div>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        <S.Input onChange={handleChange} value={value} type={'text'} />
      </S.InputWrapper>
    </div>
  )
}

export default TextInput
