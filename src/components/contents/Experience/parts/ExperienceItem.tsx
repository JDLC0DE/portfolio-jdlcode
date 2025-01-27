import Image from 'next/image'
import { FC } from 'react'

interface ExperienceItemProps {
  image: string
  company: string
  period: string
  description: string
  title: string
}

export const ExperienceItem: FC<ExperienceItemProps> = ({
  image,
  company,
  period,
  description,
  title
}) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center gap-x-2">
        <div className="flex gap-x-3 items-center">
          <Image width={35} height={35} alt={company} src={image} />
          <h3 className="text-base md:text-xl font-bold text-zinc-950 dark:text-white">
            {title}
          </h3>
        </div>
        <span className="text-xs md:text-sm font-normal text-zinc-950 dark:text-white">
          {period}
        </span>
      </div>
      <p className="text-xs md:text-sm text-zinc-950 dark:text-white">
        {description}
      </p>
    </div>
  )
}
