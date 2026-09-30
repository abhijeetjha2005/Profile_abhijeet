import React from 'react'
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'
import { FaFire, FaCheckCircle, FaLayerGroup } from 'react-icons/fa'

const stats=[
    { label: 'Problems Solved', value: '350+', icon: <FaCheckCircle />, color: '#2fbf71' },
  { label: 'Day Streak', value: '45', icon: <FaFire />, color: '#ff3b47' },
  { label: 'Topics Covered', value: '20+', icon: <FaLayerGroup />, color: '#f4a259' },
]

const platforms = [
  {
    name: 'LeetCode',
    handle: 'abhijeetjha2212',
    icon: <SiLeetcode />,
    color: '#ffa116',
    link: 'https://leetcode.com/u/abhijeetjha2212/',
  },
  {
    name: 'GeeksforGeeks',
    handle: 'Abhijeet Kumar jha',
    icon: <SiGeeksforgeeks />,
    color: '#2f8d46',
    link: 'https://www.geeksforgeeks.org/profile/abhijeetho103x',
  },

]

const DSA = () => {
  return (
<section id ='dsa' className='mx-auto max-w-6xl px-6 py-24'>
     <p className='flex items-center gap-2 text-[#ff3b47] font-semibold text-sm'>
        <span className='w-6 h-[2px] bg-[#ff3b47]' /> Problem Solving
      </p>
        <h2 className='mt-3 text-4xl font-extrabold'>
        DSA{' '}
        <span className='bg-gradient-to-r from-[#4ade80] to-[#2fbf71] bg-clip-text text-transparent'>
          Journey
        </span>
      </h2>
          <p className='mt-4 max-w-xl text-white/70 leading-relaxed'>
        Sharpening my problem-solving skills through consistent practice
        across competitive programming platforms.
      </p>
      {/* stats */}
      <div className='mt-10 grid sm:grid-cols-3 gap-6'>
        {
          stats.map((stat)=>{
            <div
            key={stat.label}
            className='rounded-2xl border border-white/10 bg-white/5 p-6 flex items-center gap-4'>
             <span
              className='w-12 h-12 flex-shrink-0 grid place-items-center rounded-full text-xl'
              style={{ backgroundColor: `${stat.color}22`, color: stat.color }}
            >
              {stat.icon}
            </span>
            <div>
              <p className='text-2xl font-extrabold'>{stat.value}</p>
              <p className='text-sm text-white/60'>{stat.label}</p>
            </div>
            </div>
          })
        }

      </div>
       {/* platforms */}
      <div className='mt-8 grid sm:grid-cols-3 gap-6'>
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.link}
            target='_blank'
            rel='noreferrer'
            className='rounded-2xl border border-white/10 bg-white/5 p-6 flex items-center gap-4 hover:-translate-y-1 hover:border-[#e63946]/50 transition-all'
          >
            <span className='text-3xl' style={{ color: platform.color }}>
              {platform.icon}
            </span>
            <div>
              <p className='font-semibold'>{platform.name}</p>
              <p className='text-sm text-white/60'>{platform.handle}</p>
            </div>
          </a>
        ))}
      </div>
</section>
  )
}

export default DSA