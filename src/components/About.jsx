import React from 'react'
import { FaGraduationCap, FaCode } from 'react-icons/fa'

const About = () => {
  return (
    <section
      id='about'
      className='mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 items-center gap-14'
    >
      {/* left */}
      <div>
        <p className='flex items-center gap-2 text-[#ff3b47] font-semibold text-sm'>
          <span className='w-6 h-[2px] bg-[#ff3b47]' />
          About me
        </p>

        <h2 className='mt-3 text-4xl font-extrabold'>
          Who I{' '}
          <span className='bg-gradient-to-r from-[#4ade80] to-[#2fbf71] bg-clip-text text-transparent'>
            Am
          </span>
        </h2>

        <p className='mt-5 max-w-lg text-white/70 leading-relaxed'>
          I'm Abhijeet Kumar Jha, I'm passionate about web development, DSA
          and building real-world projects that solve actual problems. I enjoy
          learning new technologies and improving my skills every day.
        </p>

        {/* info */}
        <div className='mt-8 grid sm:grid-cols-2 gap-5'>
          <div className='flex items-start gap-3'>
            <span className='w-11 h-11 flex-shrink-0 grid place-items-center rounded-full bg-[#e63946]/20 text-[#ff3b47] text-lg'>
              <FaGraduationCap />
            </span>

            <div>
              <p className='font-semibold'>Education</p>
              <p className='text-sm text-white/60'>B.Tech (CSE) - AKTU</p>
              <p className='text-sm text-white/60'>Class 12th - CBSE</p>
              <p className='text-sm text-white/60'>Class 10th - CBSE</p>
            </div>
          </div>

          {/* code */}
          <div className='flex items-start gap-3'>
            <span className='w-11 h-11 flex-shrink-0 grid place-items-center rounded-full bg-[#2fbf71]/20 text-[#2fbf71] text-lg'>
              <FaCode />
            </span>

            <div>
              <p className='font-semibold'>Currently Learning</p>
              <p className='text-sm text-white/60'>
                DSA, System Design, Web Development
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* right: photo */}
      <div className='relative flex justify-center'>
        <img
          src='https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=60'
          alt='Workspace'
          className='rounded-2xl w-full max-w-md object-cover shadow-[0_0_50px_rgba(0,0,0,0.4)]'
        />

      </div>
    </section>
  )
}

export default About