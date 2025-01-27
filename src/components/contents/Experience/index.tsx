import { EXPERIENCIES } from '@integration/data/constants/experiencies'
import { ExperienceItem } from './parts/ExperienceItem'

export const Experience = () => {
  return (
    <section id="experience" className="mt-24 space-y-14">
      <h2 className="text-3xl md:text-4xl text-center font-extrabold text-green-400">
        Experiencia
      </h2>
      <div className="space-y-12 w-full">
        {EXPERIENCIES.map(experience => (
          <ExperienceItem key={experience.company} {...experience} />
        ))}
      </div>
    </section>
  )
}
