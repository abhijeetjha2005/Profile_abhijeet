import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FiMail, FiArrowUp } from 'react-icons/fi'

const links = ['Home', 'About', 'Skills', 'Projects', 'DSA', 'Contact']

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className='border-t border-white/10 mt-10'>
      <div className='mx-auto max-w-6xl px-6 py-12 grid md:grid-cols-3 gap-10'>
        {/* brand */}
        <div>
          <h3 className='text-lg font-bold'>Abhijeet Kumar Jha</h3>
          <p className='mt-2 text-sm text-white/60 leading-relaxed max-w-xs'>
            Software Developer building full-stack web applications and
            solving problems through code, one project at a time.
          </p>
        </div>

        {/* quick links */}
        <div>
          <p className='font-semibold mb-4'>Quick Links</p>
          <ul className='space-y-2 text-sm text-white/60'>
            {links.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className='hover:text-[#ff3b47] transition-colors'>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* socials */}
        <div>
          <p className='font-semibold mb-4'>Let's Connect</p>
          <div className='flex gap-4'>
            <a
              href='https://github.com/abhijeetjha2005'
              target='_blank'
              rel='noreferrer'
              className='w-11 h-11 grid place-items-center rounded-full bg-white/5 hover:bg-[#e63946] transition-colors'
            >
              <FaGithub />
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
              href='mailto:abhijeethoshiyar100@gmail.com'
              className='w-11 h-11 grid place-items-center rounded-full bg-white/5 hover:bg-[#e63946] transition-colors'
            >
              <FiMail />
            </a>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className='border-t border-white/10 px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50'>
        <p>© {year} Abhijeet Kumar Jha. All rights reserved.</p>

        <a
          href='#home'
          className='flex items-center gap-1 hover:text-[#ff3b47] transition-colors'
        >
          Back to top <FiArrowUp />
        </a>
      </div>
    </footer>
  )
}

export default Footer