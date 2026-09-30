import React, { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = encodeURIComponent(
      `Portfolio message from ${form.name}`
    )

    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    )

    window.location.href =
      `mailto:abhijeethoshiyar100@gmail.com?subject=${subject}&body=${body}`

    setSent(true)
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      {/* Section heading */}
      <p className="flex items-center gap-2 text-[#ff3b47] font-semibold text-sm">
        <span className="w-6 h-[2px] bg-[#ff3b47]" />
        Get In Touch
      </p>

      <h2 className="mt-3 text-4xl font-extrabold">
        Let's{' '}
        <span className="bg-gradient-to-r from-[#4ade80] to-[#2fbf71] bg-clip-text text-transparent">
          Connect
        </span>
      </h2>

      <p className="mt-4 max-w-xl text-white/70 leading-relaxed">
        Have a project in mind, a question, or just want to say hi?
        My inbox is always open.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-12">

        {/* Left: Contact Information */}
        <div className="space-y-6">

          {/* Email */}
          <div className="flex items-center gap-4">
            <span className="w-12 h-12 grid place-items-center rounded-full bg-[#e63946]/20 text-[#ff3b47] text-lg">
              <FiMail />
            </span>

            <div>
              <p className="font-semibold">Email</p>
              <p className="text-sm text-white/60">
                abhijeethoshiyar100@gmail.com
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <span className="w-12 h-12 grid place-items-center rounded-full bg-[#2fbf71]/20 text-[#2fbf71] text-lg">
              <FiPhone />
            </span>

            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-sm text-white/60">
                +91 99539 61167
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4">
            <span className="w-12 h-12 grid place-items-center rounded-full bg-[#f4a259]/20 text-[#f4a259] text-lg">
              <FiMapPin />
            </span>

            <div>
              <p className="font-semibold">Location</p>
              <p className="text-sm text-white/60">
                Delhi, India
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-2">

            <a
              href="https://github.com/abhijeetjha2005"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 grid place-items-center rounded-full bg-white/5 hover:bg-[#e63946] transition-colors"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/abhijeet-kumar-jha-39759132b/"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 grid place-items-center rounded-full bg-white/5 hover:bg-[#e63946] transition-colors"
            >
              <FaLinkedinIn />
            </a>

          </div>
        </div>

        {/* Right: Contact Form */}
       {/* Right: Image */}
<div className="hidden lg:flex  items-center justify-center">
  <img
    src='https://plus.unsplash.com/premium_photo-1714618897426-b0578c60affe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbnRhY3QlMjBwcm9mZmVzaW9uYWx8ZW58MHx8MHx8fDA%3D'
    alt="contact"
    className="w-full max-w-md h-[400px] object-cover rounded-3xl border border-white/10 shadow-xl"
  />
</div>
      </div>
    </section>
  )
}

export default Contact