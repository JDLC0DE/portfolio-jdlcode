import { FC } from 'react'
import { Textarea, TextAreaProps } from '@nextui-org/input'

export const CustomTextArea: FC<TextAreaProps> = props => {
  return (
    <Textarea
      {...props}
      classNames={{
        inputWrapper: 'bg-zinc-100 dark:bg-zinc-950',
        innerWrapper: 'inherit'
      }}
    />
  )
}
