import { Button } from './components/ui/button/button'

export function App() {
  return (
    <div>
      <Button as={'a'} href={'https://google.com'} rel={'noopener noreferrer'} target={'_blank'}>
        Hello
      </Button>
    </div>
  )
}
