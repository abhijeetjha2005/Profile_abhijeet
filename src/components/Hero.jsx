import React from 'react'
import { FaGithub ,FaLinkedinIn} from 'react-icons/fa'
import { FiArrowRight,FiMail,} from 'react-icons/fi'
import profile from '../assets/profile.jpeg'

const Hero = () => {
  return (
    <section
     id='home'
      className='mx-auto max-w-6xl px-6 pt-16 pb-24 grid md:grid-cols-2 items-center gap-10'>
        {/* left */}
        <div>
          <p className='flex items-center gap-2 text-xl'>
          <span>👋</span> Hello, I'm
          </p>
          <h1 className='mt-2 text-5xl lg:text-6xl font-extrabold leading-tight'>
            Abhijeet 
            <br />
            <span className='bg-gradient-to-r from-[#ff6a5c] to-[#e63946] bg-clip-text text-transparent'>
              Kumar Jha
            </span>
          </h1>
          <h2 className='mt-4 max-w-md text-white/70  leading-relaxed'>
             Software Developer | Full-Stack Developer & DSA Enthusiast
            </h2>
         <p>
          I love building web applications and solving problems through code.
          I'm passionate about learning, creating and growing in the tech world.
         </p>
         <div className='mt-8 flex flex-wrap gap-4'>
          <a href="#projects"
          className='flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e63946] to-[#ff3b47] px-7 py-3 font-semibold shadow-lg shadow-red-900/40 hover:scale-105 transition-transform'>
            View Projects<FiArrowRight/>
          </a>
            <a
            href='#contact'
            className='flex items-center gap-2 rounded-full border border-[#2fbf71] px-7 py-3 font-semibold hover:bg-[#2fbf71]/20 transition-colors'
          >
            <FiMail /> Contact Me
          </a>
         </div>
         {/* social media links */}
         <div className='mt-8  flex gap-4 text-xl'>
          <a href="https://github.com/abhijeetjha2005"
          target='_blank'
          rel='noreferrer' 
          className='w-11 h-11 grid place-items-center rounded-full bg-white/5 hover:bg-[#e63946] transition-colors ' 
          >
            <FaGithub/>
          </a>
            <a
            href='https://www.linkedin.com/in/abhijeet-kumar-jha-39759132b/'
            target='_blank'
            rel='noreferrer'
            className='w-11 h-11 grid place-items-center rounded-full bg-white/5 hover:bg-[#e63946] transition-colors'
          >
            <FaLinkedinIn />
          </a>
               <a
            href='abhijeethoshiyar100@gmail.com'
            className='w-11 h-11 grid place-items-center rounded-full bg-white/5 hover:bg-[#e63946] transition-colors'
          >
            <FiMail />
          </a>
         </div>
        
        </div>
        {/* right side  */}
        <div className='relative flex justify-center'>
          <div className='blob p-[5px] bg-gradient-to-br from-[#e63946] via-[#f4a259] to-[#2fbf71] w-[320px] h-[360px] md:w-[400px] md:h-[430px] shadow-[0_0_60px_rgba(47,191,113,0.25)] '>
          <img src={profile} alt='Abhijeet' className='blob w-full h-full object-cover' />

          </div>
               <p className='font-hand hidden lg:block absolute -right-4 top-1/3 text-4xl text-[#ff3b47] -rotate-12 leading-none'>
          Keep
          <br />
          Building
        </p>
        </div>

    </section>
  )
}

export default Hero