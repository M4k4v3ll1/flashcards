import { useState } from 'react'

import { Button } from '@/components/ui/button/button'
import { Card } from '@/components/ui/card/card'
import { Input } from '@/components/ui/input/input'
import { Typography } from '@/components/ui/typography/typography'

export function App() {
  const [error, setError] = useState<null | string>('Error!')

  return (
    <div>
      <div>
        <Input placeholder={'Input'} />
        <Input placeholder={'password'} type={'password'} />
        <Input placeholder={'search'} type={'search'} />
      </div>
      <div>
        <Input error={error} placeholder={'Input'} />
      </div>
      <div>
        <Input disabled placeholder={'Input'} />
      </div>
      <Button as={'a'} href={'https://google.com'} rel={'noopener noreferrer'} target={'_blank'}>
        Hello
      </Button>
      <Card />
      <Typography as={'h1'} variant={'h1'}>
        Header H1
      </Typography>
      <Typography as={'h2'} variant={'h2'}>
        Header H2
      </Typography>
      <Typography as={'h3'} variant={'h3'}>
        Header H3
      </Typography>
      <Typography as={'h4'} variant={'h4'}>
        Header H4
      </Typography>
      <Typography as={'p'} variant={'body1'}>
        Body 1
      </Typography>
      <Typography variant={'subtitle1'}>Subtitle 1</Typography>
      <Typography as={'p'} variant={'body2'}>
        Body 2
      </Typography>
      <Typography variant={'subtitle2'}>Subtitle 2</Typography>
      <Typography variant={'caption'}>Caption</Typography>
      <Typography variant={'overline'}>Overline</Typography>
      <Typography
        as={'a'}
        href={'https://google.com'}
        rel={'noopener noreferrer'}
        target={'_blank'}
        variant={'link1'}
      >
        Link 1
      </Typography>
      <Typography
        as={'a'}
        href={'https://mail.ru'}
        rel={'noopener noreferrer'}
        target={'_blank'}
        variant={'link2'}
      >
        Link 2
      </Typography>
    </div>
  )
}
