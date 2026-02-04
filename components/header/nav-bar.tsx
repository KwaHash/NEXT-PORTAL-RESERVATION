'use client'

import MobileNavLink from '@/components/header/mobile-nav-link'
import NavLink from '@/components/header/nav-link'
import { Button } from '@/components/ui/button'
import { services } from '@/utils/data'
import Link from 'next/link'
import { useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { FcHome } from 'react-icons/fc'
import { SlMenu } from 'react-icons/sl'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className='w-full fixed bg-white shadow-lg z-50'>
      <div className='mx-auto px-8'>
        <div className='flex justify-between h-20'>
          <Link href='/' className='flex items-center gap-2'>
            <FcHome className='text-3xl' />
            <span className='text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-all duration-300 ease-out'>
              リフォームAIポータル
            </span>
          </Link>

          <div className='hidden xl:flex iterms-center space-x-10'>
            {services.map((service) => {
              const Icon = service.icon
              return (
                <NavLink 
                  key={service.linkUrl}
                  icon={<Icon />}
                  text={service.text}
                  linkUrl={service.linkUrl}
                />    
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className='xl:hidden flex items-center'>
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='bg-transparent text-gray-700 hover:text-gray-900 focus:outline-none p-0'
            >
              {isMenuOpen ? (
                <CgClose className='text-3xl' />
              ) : (
                <SlMenu className='text-2xl' />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='xl:hidden bg-white border-t'>
          <div className='px-4 pt-2 pb-4 space-y-2'>
            {services.map((service) => {
              const Icon = service.icon
              return (
                <MobileNavLink key={service.linkUrl} 
                  icon={<Icon />}
                  text={service.text}
                  onClick={() => setIsMenuOpen(false)}
                  linkUrl={service.linkUrl}
                />
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar
