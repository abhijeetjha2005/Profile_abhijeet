import React from 'react'
import { FiExternalLink,FiGithub } from 'react-icons/fi'

const projects =[
    {
    title: 'Baat-chit',
    description:
      'A real-time MERN chat application with secure authentication, one-to-one messaging, online status, typing indicators, file sharing, voice calls, and an AI assistant.',
    tech: ['React','Node.js', 'Express', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    live: 'https://baat-chit-bcd1-abhijeetjha2005s-projects.vercel.app/',
    github: 'https://github.com/abhijeetjha2005/Baat-chit',
  },
]

const Projects = () => {
  return (
<section id='projects' className='mx-auto max-w-6xl px-6 py-24'>
  <p className='flex items-center gap-2 text-[#ff3b47] font-semibold text-sm'>
    <span className="w-6 h-[2px] bg-[#ff3b47]"/> My Work
  </p>
      <h2 className='mt-3 text-4xl font-extrabold'>
        Featured{' '}
        <span className='bg-gradient-to-r from-[#4ade80] to-[#2fbf71] bg-clip-text text-transparent'>
          Projects
        </span>
      </h2>
            <p className='mt-4 max-w-xl text-white/70 leading-relaxed'>
        A few projects I've built while learning and exploring full-stack
        development.
      </p>
      <div className='mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {
          projects.map((project)=>(
            <div
              key={project.title}
            className='rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:-translate-y-1 hover:border-[#e63946]/50 transition-all'
            >
                <img
              src={project.image}
              alt={project.title}
              className='w-full h-44 object-cover'
            />
            <div className='p-6 '>
              <h3  className='text-lg font-bold'>{project.title}</h3>
              <p className='mt-2 text-sm text-white/60 leading-relaxed'>
                {project.description}
              </p>
                    <div className='mt-4 flex flex-wrap gap-2'>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className='text-xs font-medium px-3 py-1 rounded-full bg-[#2fbf71]/15 text-[#2fbf71]'
                  >
                    {t}
                  </span>
                ))}
              </div>
            <div className='mt-5 flex gap-4'>
                  <a
                  href={project.live}
                  target='_blank'
                  rel='noreferrer'
                  className='flex items-center gap-1 text-sm font-medium text-[#ff3b47] hover:underline'
                >
                  Live Demo <FiExternalLink/>
                </a>
                                <a
                  href={project.github}
                  target='_blank'
                  rel='noreferrer'
                  className='flex items-center gap-1 text-sm font-medium text-white/70 hover:text-white'
                >
                  <FiGithub /> Code
                </a>
             </div>
            </div>
            </div>
          )
        )
        }
      </div>
</section>
  )
}

export default Projects