import Image from 'next/image'

import { CustomButton } from '@/components/blocks/CustomButton'

export const MyProfile = () => {
  return (
    <section
      id="profile"
      className="max-w-[42.5rem] mx-auto flex flex-col items-center gap-y-5 md:gap-y-10"
    >
      <picture className="rounded-full bg-pastel-sky overflow-hidden">
        <Image
          src="/images/avatar.webp"
          alt="avatar"
          width={213}
          height={213}
        />
      </picture>
      <h1 className="text-3xl md:text-5xl text-zinc-950 dark:text-white text-center font-bold text-balance">
        Hey, Soy{' '}
        <span className="bg-clip-text text-transparent bg-pastel-sky">
          Joseph De La Cruz
        </span>
      </h1>
      <p className="text-xs md:text-lg text-zinc-950 dark:text-white font-light text-center text-pretty">
        Ingeniero de Sistemas especializado en el desarrollo de software web y
        mobile, con experiencia en la creación de soluciones innovadoras y
        escalables.
      </p>
      <div className="flex flex-col sm:flex-row gap-5 items-center min-w-60 sm:min-w-96">
        <CustomButton
          variant="solid"
          size="lg"
          radius="full"
          className="w-full"
        >
          Contactar
        </CustomButton>
        <CustomButton
          variant="bordered"
          size="lg"
          radius="full"
          className="w-full"
        >
          Descargar CV
        </CustomButton>
      </div>
    </section>
  )
}
