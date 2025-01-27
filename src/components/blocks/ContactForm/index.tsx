import { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { CustomInput } from '../CustomInput'
import { CustomButton } from '../CustomButton'
import { CustomTextArea } from '../CustomTextArea'
import { IContact } from '@integration/data/types/Contact'
import { CONTACT_FIELD_STATE } from '@integration/data/constants/contact'

interface IContactForm {
  completed?: boolean
  submiting?: boolean
  sendEmail: (data: IContact) => void
}

export const ContactForm: FC<IContactForm> = ({
  sendEmail,
  submiting,
  completed
}) => {
  const { register, handleSubmit, reset } = useForm<IContact>({
    defaultValues: CONTACT_FIELD_STATE
  })

  const onSubmit = (data: IContact) => {
    sendEmail(data)
  }

  useEffect(() => {
    if (completed) {
      reset()
    }
  }, [completed, reset])

  return (
    <form
      className="flex flex-col gap-4 bg-white dark:bg-zinc-900 p-7 rounded-lg shadow-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      <CustomInput
        id="name"
        required
        type="text"
        label="Nombre"
        labelPlacement="outside"
        placeholder="Escribe tu nombre"
        {...register('name')}
      />
      <CustomInput
        required
        id="email"
        type="email"
        label="Correo"
        labelPlacement="outside"
        placeholder="Escribe tu correo"
        {...register('email')}
      />
      <CustomTextArea
        required
        id="message"
        label="Mensaje"
        labelPlacement="outside"
        placeholder="Escribe tu mensaje"
        {...register('message')}
      />
      <CustomButton
        type="submit"
        variant="solid"
        radius="full"
        fullWidth
        className="mt-2"
        disabled={submiting}
      >
        Enviar
      </CustomButton>
    </form>
  )
}
