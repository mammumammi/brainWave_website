import React from 'react'
import Section from './Section'
import { smallSphere, stars } from '../assets'
import Heading from './design/Heading'
import PricingList from './design/PricingList'
import {LeftLine,RightLine} from './design/Pricing'
const Pricing = () => {
  return (
    <Section className='overflow-hidden' id="pricing">
        <div className='container relative z-2'>
            <div className='hidden relative justify-center mb-[6.5rem] lg:flex'>

                <img src={smallSphere}
                className='relative z-1' alt="sphere"
                width={255}
                height={255} />
                <div className='absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
                    <img src={stars} alt="stars"
                    width={950}
                    height={400}
                    className='w-full' />
                </div>
            </div>
            <Heading tag="Get started with brainwave" title="Pay once, use forever" />

            <div className='relative'>
                <PricingList />
                <LeftLine/>
                <RightLine/>
            </div>

            <div className='flex justify-center'>
                <a href="/pricing" className='text-xs font-code font-bold tracking-wider uppercase border-b'>See the Full Details</a>
            </div>
        </div>
    </Section>
  )
}

export default Pricing