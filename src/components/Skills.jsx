import React from 'react'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaServer,
  FaKey
} from 'react-icons/fa'

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiCplusplus,
  SiAxios,
  SiVite,
  SiSocketdotio,
  SiPostman
} from 'react-icons/si'
// array for skills with image
const skills=[
    { name: 'HTML5', icon: <FaHtml5 />, color: '#e34c26' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: '#2965f1' },
  { name: 'JavaScript', icon: <FaJs />, color: '#f0db4f' },
  { name: 'React', icon: <FaReact />, color: '#61dafb' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38bdf8' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#3c873a' },
  { name: 'Express', icon: <SiExpress />, color: '#ffffff' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#4db33d' },
  { name: 'MySQL', icon: <SiMysql />, color: '#4479a1' },
  { name: 'Java', icon: <FaJava />, color: '#e76f00' },
  { name: 'C++', icon: <SiCplusplus />, color: '#00599c' },
  { name: 'Git', icon: <FaGitAlt />, color: '#f1502f' },
  { name: 'GitHub', icon: <FaGithub />, color: '#ffffff' },
  { name: 'REST API', icon: <FaServer />, color: '#6c63ff' },
{ name: 'Axios', icon: <SiAxios />, color: '#5a29e4' },
{ name: 'Vite', icon: <SiVite />, color: '#646cff' },
{ name: 'WebSocket', icon: <SiSocketdotio />, color: '#ffffff' },
{ name: 'JWT', icon: <FaKey />, color: '#d63aff' },
{ name: 'Postman', icon: <SiPostman />, color: '#ff6c37' },

]
const Skills = () => {
  return (
  <section id='skills' className='mx-auto max-w-6xl px-6 py-24'>
<p className='flex items-center gap-2 text-[#ff3b47] font-semibold text-sm'>
  <span className='w-6 h-[2px] bg-[#ff3b47]'/>What I Know
</p>
      <h2 className='mt-3 text-4xl font-extrabold'>
        My{' '}
        <span className='bg-gradient-to-r from-[#4ade80] to-[#2fbf71] bg-clip-text text-transparent'>
          Skills
        </span>
      </h2>
      <p className='mt-4 max-w-xl text-white/70 leading-relaxed'>
       Technologies and tools I use to build full-stack web applications and solve problems using data structures and algorithms.
      </p>
<div className='mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
{
  skills.map((skill)=>(
 <div 
 key={skill.name}
  className='flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 py-8 px-4 hover:-translate-y-1 hover:border-[#e63946]/50 transition-all'
 >
 <span className='text-4xl' style={{ color: skill.color }}>
  {skill.icon}
</span>
 <p className='text-sm font-medium text-white/80'>{skill.name}</p>
 </div>

  ))}
</div>
  </section>
  )
}

export default Skills