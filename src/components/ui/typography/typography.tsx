import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from '@/components/ui/typography/typography.module.scss'

type Props<T extends ElementType> = {
  as?: T
  children: string
  color?: string
  variant?:
    | 'body1'
    | 'body2'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'link1'
    | 'link2'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType>(props: Props<T>) => {
  const { as: Component = 'span', children, className, color, variant = 'body1', ...rest } = props

  return (
    <div>
      <Component className={`${s[variant]} ${className}`} style={{ color }} {...rest}>
        {children}
      </Component>
    </div>
  )
}
