import type { Project } from '../data/projects'

type Props = { project: Project }

export function ProjectCard({ project }: Props) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.url && <a href={project.url}>Xem dự án <span aria-hidden="true">↗</span></a>}
    </article>
  )
}
