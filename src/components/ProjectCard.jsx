function ProjectCard({ project }) {
  return (
    <article className="border-soft bg-card-soft shadow-card group flex h-full flex-col overflow-hidden rounded-2xl border backdrop-blur-sm transition duration-500 hover:scale-[1.015] hover:brightness-[1.015] dark:hover:brightness-110">
      <img
        src={project.image}
        alt={`${project.name} preview`}
        className="h-52 w-full object-cover opacity-95 transition duration-500 group-hover:scale-[1.02]"
      />

      <div className="flex h-full flex-col p-6">
        <p className="text-secondary mb-3 text-[11px] font-medium uppercase tracking-[0.2em]">
          {project.category}
        </p>
        <h3 className="text-primary text-2xl font-semibold tracking-tight">
          {project.name}
        </h3>
        <p className="text-secondary mt-3 text-sm leading-7 md:text-base">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="border-soft bg-primary-soft text-secondary rounded-full border px-3 py-1 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.githubLink}
          target="_blank"
          rel="noreferrer"
          className="border-soft bg-primary-soft text-secondary mt-7 inline-flex w-fit items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition duration-300 hover:brightness-105 dark:hover:brightness-110"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
            <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.72-4.04-1.61-4.04-1.61a3.18 3.18 0 0 0-1.34-1.76c-1.1-.76.08-.75.08-.75a2.53 2.53 0 0 1 1.84 1.24 2.57 2.57 0 0 0 3.5 1 2.57 2.57 0 0 1 .77-1.61c-2.67-.3-5.47-1.33-5.47-5.92a4.64 4.64 0 0 1 1.23-3.22 4.31 4.31 0 0 1 .12-3.17s1-.32 3.3 1.23a11.43 11.43 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23a4.31 4.31 0 0 1 .12 3.17 4.63 4.63 0 0 1 1.23 3.22c0 4.6-2.8 5.62-5.48 5.91a2.87 2.87 0 0 1 .82 2.23v3.31c0 .32.22.7.82.58A12 12 0 0 0 12 .5Z" />
          </svg>
          GitHub
        </a>
      </div>
    </article>
  )
}

export default ProjectCard
