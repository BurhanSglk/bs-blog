import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Portföy Web Sitesi',
    description: 'Kendi portföy sitemi React, TypeScript ve Tailwind CSS ile sıfırdan tasarladım.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/BurhanSglk/burhan-portfolio',
    demo: 'https://burhansaglik.site/',
  },
  {
    title: 'Not App',
    description: 'Not alıp işlerinizi takip edebileceğiniz bir uygulama.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/BurhanSglk/NoteApp',
    demo: 'https://note.burhansaglik.site/',
  },
  {
    title: 'Blog Uygulaması',
    description: 'Markdown destekli, SEO uyumlu modern blog uygulaması.',
    tech: ['React', 'Vite', 'Markdown'],
    github: 'https://github.com/BurhanSglk/bs-blog',
    demo: '',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-neutral-900">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">🛠️ Projelerim</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-neutral-800 shadow-sm border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 space-y-3"
            >
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-snug">{project.description}</p>
              <ul className="flex flex-wrap gap-1 text-xs text-blue-600 dark:text-blue-400">
                {project.tech.map((tech, i) => (
                  <li key={i} className="bg-blue-100 dark:bg-blue-900 px-2 py-[2px] rounded-md">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 pt-1 text-sm">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="hover:text-blue-600 flex items-center gap-1 transition-colors"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    className="hover:text-green-600 flex items-center gap-1 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
