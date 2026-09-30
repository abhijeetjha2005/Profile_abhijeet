import React from 'react'
import profile from '../assets/profile.jpeg'
import { FiDownload } from 'react-icons/fi'
// by using array
const links = ['Home', 'About', 'Skills', 'Projects', 'DSA', 'Contact']

const Navbar = () => {
  return (
<header className='sticky top-0 z-50 px-4 pt-4'>
  <nav className='mx-auto mt-4 max-w-6xl flex items-center justify-between rounded-full border border-white/10 bg-black/30 backdrop-blur-md px-5 py-3'>
    <a href="home" className='flex items-center gap-3 '>
      <img src={profile} alt="akj"  className='w-10 h-10 rounded-full object-cover border-2 border-black/30'/>
      <span>Abhijeet Kumar Jha</span>
    </a>
    {/* links */}
    <ul className='hidden md:flex items-center gap-8 text-sm font-medium'>
      {links.map((link,i)=>(
        <li key={link}>
      <a
      href={`#${link.toLowerCase()}`}
         className={`pb-1 border-b-2 transition-colors ${
                  i === 0
                    ? 'text-[#ff3b47] border-[#ff3b47]'
                    : 'border-transparent hover:text-[#ff3b47]'
                }`}
                >
                  {link}
                </a>
        </li>
      ))}
      
    </ul>
    {/* resume */}
    <a href='/resume.pdf'
    download
     className='flex items-center gap-2 rounded-full border border-[#e63946] px-5 py-2 text-sm font-medium hover:bg-[#e63946] transition-colors'
    >
        <FiDownload /> Resume
    </a>
  </nav>
</header>
  )
}

export default Navbar