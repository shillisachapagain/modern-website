import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About', href: '#' },
      { name: 'Terms of Use', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'How it Works', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    getHelp: [
      { name: 'Support Carrer', href: '#' },
      { name: '24h Service', href: '#' },
      { name: 'Quick Chat', href: '#' },
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Policy', href: '#' },
      { name: 'Business', href: '#' },
    ],
    contact: [
      { name: 'WhatsApp', href: '#' },
      { name: 'Support 24', href: '#' },
    ],
  }

  return (
    <footer className="bg-neutral-950 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
        {/* brand column */}
        <div className="lg:col-span-4">
            <div className="flex items-center gap-1 mb-4">
            <div className="w-4 h-4 bg-green-600 rounded-full opacity-75"></div>
            <div className="w-4 h-4 bg-green-300 rounded-full -ml-2"></div>
            <span className="text-xl font-semibold ml-2">The Next Design</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
            The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.
            </p>
            <div className="flex space-x-4">
            <a href="#" className="bg-gray-200 hover:bg-blue-600 hover:text-white p-2 rounded-full transition">
                <FaFacebookF />
            </a>
            <a href="#" className="bg-gray-200 hover:bg-blue-400 hover:text-white p-2 rounded-full transition">
                <FaTwitter />
            </a>
            <a href="#" className="bg-gray-200 hover:bg-blue-700 hover:text-white p-2 rounded-full transition">
                <FaLinkedinIn />
            </a>
            </div>
        </div>

        {/* links columns */}
        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
                <h4 className="font-semibold text-neutral-500 mb-3 capitalize">{title}</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                {links.map((link, idx) => (
                    <li key={idx}>
                    <a href={link.href} className="hover:text-gray-900 transition">
                        {link.name}
                    </a>
                    </li>
                ))}
                </ul>
            </div>
            ))}
        </div>
        </div>

        {/* copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              Copyright © {new Date().getFullYear()} codetutorbd.com
            </p>
            <p className="text-gray-600 text-sm">
              Created by Shillisa Chapagain & Md Al Mamun
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
