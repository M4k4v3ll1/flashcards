import { ComponentPropsWithoutRef, ElementType, useState } from 'react'

import s from './input.module.css'

type Props<T extends ElementType> = {
  disabled?: boolean
  error?: null | string
  placeholder?: string
  type?: T
} & ComponentPropsWithoutRef<T>
export const Input = <T extends ElementType>(props: Props<T>) => {
  const { disabled, error, placeholder, type = 'text', ...rest } = props
  const [value, setValue] = useState('')

  const errorClassName = error ? s.errorLabel : ''
  const finalClassName = type === 'search' ? s.search : s.default

  return (
    <div>
      <label className={s.label}>Label!~</label>
      <div>
        <input
          className={disabled ? s.disabled : `${finalClassName} ${errorClassName}`}
          disabled={disabled}
          onChange={e => setValue(e.currentTarget.value)}
          placeholder={placeholder}
          type={`${type}`}
          value={value}
        ></input>
        {type === 'password' && <button>1</button>}
      </div>
      <div>{error && <label className={s.errorLabel}>{error}</label>}</div>
    </div>
  )
}
