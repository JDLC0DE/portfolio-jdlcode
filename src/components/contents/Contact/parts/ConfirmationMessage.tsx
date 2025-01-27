import clsx from 'clsx'
import { FC } from 'react'

interface ConfirmationMessageProps {
  message: string
  status: string
}

export const ConfirmationMessage: FC<ConfirmationMessageProps> = ({
  status,
  message
}) => {
  return (
    <p
      className={clsx('text-lg text-center mb-4 font-bold', {
        'text-red-400': status === 'error',
        'text-green-400': status === 'success'
      })}
    >
      {message}
    </p>
  )
}
