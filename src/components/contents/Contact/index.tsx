'use client'
import Image from 'next/image'

import { ContactForm } from '@/components/blocks/ContactForm'
import { useContact } from '@integration/data/content/_Contact'
import { ConfirmationMessage } from './parts/ConfirmationMessage'
import { useMemo } from 'react'

export const Contact = () => {
  const { sendEmail, submiting, fetchingMsgAndStatus, isSuccess } = useContact()
  const msgAndStatus = useMemo(
    () => fetchingMsgAndStatus(),
    [fetchingMsgAndStatus]
  )

  return (
    <section className="mt-24 space-y-14" id="contact">
      <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-pastel-sky inline-block text-center w-full">
        Contactar
      </h2>
      <div className="flex max-md:flex-col gap-4 items-center">
        <div className="w-1/2 max-md:hidden relative h-72">
          <Image
            src="/images/contact/contact-logo-01.svg"
            alt="contact-logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="w-1/2 max-md:w-full">
          {msgAndStatus && <ConfirmationMessage {...msgAndStatus} />}
          <ContactForm
            sendEmail={sendEmail}
            submiting={submiting}
            completed={isSuccess}
          />
        </div>
      </div>
    </section>
  )
}
