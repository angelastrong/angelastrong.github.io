function Projects() {
  const projects = [
    {
      title: 'The Write Time App',
      description: 'A Discord bot integrated with a web app for running sprints and tracking writing.',
      tech: ['NestJS', 'NextJS', 'MongoDB', 'Railway'],
      github: null,
      live: 'https://thewritetime.app/',
      liveText: 'Site'
    },
    {
      title: 'Ambrosius',
      description: 'A custom Discord scheduling bot built for a writing-specific server for posting daily questions to encourage server engagement.',
      tech: ['Node.js', 'Discordjs', 'MongoDB', 'Docker'],
      github: 'https://github.com/angelastrong/asdb-ambrosius',
      live: null,
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-slate-50 mb-8">Projects</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="glass-card rounded-lg p-6 hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-semibold text-slate-100 mb-2">
              {project.title}
            </h3>
            <p className="text-slate-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 bg-violet-500/10 text-violet-300 text-sm rounded border border-violet-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-400 hover:text-violet-300 hover:underline text-sm transition-colors"
                >
                  GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-400 hover:text-violet-300 hover:underline text-sm transition-colors"
                >
                  {project.liveText || 'Live Demo'}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
