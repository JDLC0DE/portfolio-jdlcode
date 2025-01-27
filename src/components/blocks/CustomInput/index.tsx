import { FC } from 'react'
import { Input, InputProps } from '@nextui-org/react'

export const CustomInput: FC<InputProps> = props => {
  return (
    <Input
      {...props}
      classNames={{
        inputWrapper: 'bg-zinc-100 dark:bg-zinc-950'
      }}
    />
  )
}
