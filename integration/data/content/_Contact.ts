import { useMutation } from '@tanstack/react-query'

import { fetcher } from './Contact'
import { IContact } from '../types/Contact'

export const useContact = () => {
  const addEmailMutation = useMutation({
    mutationFn: fetcher
  })
  const sendEmail = (data: IContact) => {
    addEmailMutation.mutate(data)
  }

  const fetchingMsgAndStatus = () => {
    if (addEmailMutation.isError) {
      return {
        message: 'Error al enviar el correo',
        status: 'error'
      }
    }
    if (addEmailMutation.isSuccess) {
      return {
        message: 'Correo enviado con éxito',
        status: 'success'
      }
    }
    return null
  }

  return {
    sendEmail,
    fetchingMsgAndStatus,
    submiting: addEmailMutation.isPending,
    isSuccess: addEmailMutation.isSuccess
  }
}
