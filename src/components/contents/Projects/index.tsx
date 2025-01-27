import { ProjectCardList } from './parts/ProjectCardList'

export const Projects = () => {
  return (
    <section id="projects" className="mt-24 space-y-14">
      <h3 className="text-3xl md:text-4xl text-center font-extrabold text-blue-400">
        Proyectos
      </h3>
      <ProjectCardList />
    </section>
  )
}
