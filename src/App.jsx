import { useEffect, useState } from 'react'
import FilterBar from './components/FilterBar'
import myProfileImage from './Photo/My.jpg'
import ProjectCard from './components/ProjectCard'
import Reveal from './components/Reveal'
import Section from './components/Section'
import project1 from './Photo/Project-1.png'
import project2 from './Photo/Project-2.png'
import project3 from './Photo/Project-3.png'
import project4 from './Photo/Project-4.JPG'
import project5 from './Photo/Project-5.png'
import project6 from './Photo/Project-6.png'


function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldUseDark = storedTheme ? storedTheme === 'dark' : prefersDark

    setIsDark(shouldUseDark)
    document.documentElement.classList.toggle('dark', shouldUseDark)
  }, [])

  const toggleTheme = () => {
    const nextTheme = !isDark
    setIsDark(nextTheme)
    document.documentElement.classList.toggle('dark', nextTheme)
    localStorage.setItem('theme', nextTheme ? 'dark' : 'light')
  }

  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      name: 'CMU ShareCycle',
      description: 'A platform for exchanging and donating items within university.',
      category: 'production',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
      githubLink: 'https://github.com/phuriberryy/CMUShareCycle_KingNicety.git',
      image: project1,
    },
    {
      id: 2,
      name: 'Ninjalingo',
      description: 'A platform for remembering words in different languages.',
      category: 'production',
      techStack: ['React', 'CSV', 'ASTRO'],
      githubLink: 'https://github.com/xircons/ninja-lingo-fork',
      image: project2,
    },
    {
      id: 3,
      name: 'turnPro Website',
      description: 'A platform for presenting turnPro organization products, members and services.',
      category: 'production',
      techStack: ['React', 'Next.js','TypeScript', 'Database', 'API'],
      githubLink: 'https://github.com/bookbento/turnprolandingpage',
      image: project3,
    },
    {
      id: 4,
      name: 'ADH Project',
      description: 'Project for competition Buildathon 2025 it\'s about AI chat help ADHD to manage their time and tasks.',
      category: 'competition',
      techStack: ['Cluade', 'Loveable'],
      githubLink: 'https://github.com/',
      image: project4,
    },
    {
      id: 5,
      name: 'Lukchang Open map',
      description: 'Project for tell incident in Chiang mai University in crowdsourcing formation',
      category: 'academic',
      techStack: ['SvelteKit', 'Bun', 'Podman', 'Supabase'],
      githubLink: 'https://github.com/Lukchang-Open-Map/Lukchang-Open-Map.git',
      image: project5,
    },
    {
      id: 6,
      name: 'SANGSOM',
      description: 'Project for do group basic ecommerce website to sell Sneakers',
      category: 'academic',
      techStack: ['HTML', 'CSS', 'Java Script'],
      githubLink: 'https://github.com/FlukeKS/SangSom.git',
      image: project6,
    },
  ]

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Production', value: 'production' },
    { label: 'Competition', value: 'competition' },
    { label: 'Academic', value: 'academic' },
    { label: 'Personal', value: 'personal' },
  ]

  const visibleProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="bg-page min-h-screen text-primary antialiased transition-colors duration-500">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_10%,_rgba(255,255,255,0.28),_transparent_45%)] dark:bg-[radial-gradient(circle_at_18%_10%,_rgba(148,163,184,0.12),_transparent_45%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--surface-secondary)_30%,transparent),transparent)]" />
      <header className="border-soft bg-primary-soft sticky top-0 z-20 border-b backdrop-blur-xl transition-colors">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3 md:px-10">
          <span className="text-primary text-sm font-semibold tracking-tight">
            Portfolio
          </span>
          <nav className="text-secondary hidden items-center gap-6 text-sm md:flex">
            <a href="#hero" className="transition hover:brightness-110">
              Home
            </a>
            <a href="#about" className="transition hover:brightness-110">
              About
            </a>
            <a href="#projects" className="transition hover:brightness-110">
              Projects
            </a>
          </nav>
          <button
            type="button"
            onClick={toggleTheme}
            className="text-secondary border-soft bg-secondary-soft rounded-xl border px-4 py-2 text-sm font-medium transition duration-300 hover:brightness-105"
          >
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-12 md:px-10 md:pt-16">
        <Reveal>
          <Section id="hero" className="pt-20 text-center md:pt-28">
            <img
              src={myProfileImage}
              alt="Profile placeholder"
              className="border-soft mx-auto h-36 w-36 rounded-full border object-cover shadow-[0_14px_36px_rgba(17,17,17,0.08)] md:h-44 md:w-44 dark:shadow-[0_12px_30px_rgba(15,23,42,0.45)]"
            />
            <h1 className="text-primary mt-10 text-5xl font-semibold tracking-tight md:text-7xl">
              Yasatsawin Panyawai
            </h1>
            <p className="text-secondary mx-auto mt-5 max-w-3xl text-base md:text-2xl">
              CAMT DII Student | Backend Developer
            </p>
          </Section>
        </Reveal>

        <Reveal>
          <Section id="about" title="About Me">
            <div className="border-soft bg-secondary-soft shadow-card rounded-2xl border p-8 backdrop-blur-sm">
            <p className="text-secondary max-w-3xl text-base leading-8 md:text-lg">
  I am a backend developer evolving into a full-stack engineer, with experience in building web applications using modern technologies.
  <br /><br />
  My main focus is on backend development, including API design, database management, and system logic. Recently, I have been expanding my skills in frontend development to better understand and build complete end-to-end applications.
</p>
              <div className="text-secondary mt-8 grid gap-4 sm:grid-cols-2">
                <p>
                  <span className="text-primary font-medium">Phone:</span>{' '}
                  083-6199448
                </p>
                <p>
                  <span className="text-primary font-medium">Line:</span>{' '}
                  nicetywin2548
                </p>
                <p className="sm:col-span-2">
                  <span className="text-primary font-medium">GitHub:</span>{' '}
                  <a
                    href="https://github.com/YasatsawinP"
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-soft underline-offset-4 transition hover:brightness-110"
                  >
                    https://github.com/YasatsawinP
                  </a>
                </p>
              </div>
            </div>
          </Section>
        </Reveal>

        <Section id="projects" title="Projects">
          <FilterBar
            filters={filters}
            activeFilter={activeFilter}
            onChange={setActiveFilter}
          />

          {activeFilter === 'personal' ? (
            <div className="fade-in text-secondary border-soft bg-card-soft shadow-card rounded-2xl border border-dashed p-10 text-center backdrop-blur-sm">
              <p className="text-secondary text-xs uppercase tracking-[0.18em]">
                Personal
              </p>
              <p className="mt-3 text-lg">Coming soon...</p>
            </div>
          ) : (
            <div
              key={activeFilter}
              className="fade-in grid gap-6 md:grid-cols-2"
            >
              {visibleProjects.map((project) => (
                <Reveal key={project.id}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          )}
        </Section>
      </main>

      <footer className="border-soft bg-secondary-soft border-t py-10 backdrop-blur-xl transition-colors">
        <div className="text-secondary mx-auto flex w-full max-w-6xl items-center justify-between px-6 text-sm md:px-10">
          <span className="text-primary font-medium">Portfolio of Yasatsawin Panyawai</span>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  )
}

export default App
