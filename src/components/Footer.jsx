import React from 'react'
import Section from './Section'
import { socials } from '../constants'
import { a } from 'framer-motion/client'

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
        <div className='container flex sm:justify-between
        justify-center items-center gap-10 max-sm:flex-col'>
            <p className='caption text-n-4 lg:block'>©{new Date().getFullYear()}. All rights reserved.</p>
            <ul className='flex gap-5 flex-wrap'>
                {socials.map((item)=>(
                    <a key={item.id}
                    href={item.url}
                    target='_blank'
                    className='flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:ng-n-6'>

                    <img 
                    src={item.iconUrl}
                    height={16}
                    width={16}
                    />
                    </a>
                ))}
            </ul>
        </div>
    </Section>
  )
}

export default Footer