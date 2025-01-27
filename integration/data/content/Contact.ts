import { IContact } from '../types/Contact'

export const fetcher = async (data: IContact) => {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/emails`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}
