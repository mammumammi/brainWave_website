import { companyLogos } from '../constants'
import React from 'react'

const CompanyLogos = ({className}) => {
  return (
    <div className={className}>
    <h5 className='tagline mb-6 text-cente text-n-1/50'>Helping people create beautiful content at</h5>
    <ul className='flex'>
        {companyLogos.map((logo,index)=> (
            <li className='flex items-center justify-center flex-1 h-[8.5rem' key={index}>
                <img src={logo} alt={logo} width={134} height={28} />
            </li>
        ))}
    </ul>
    </div>
  )
}

export default CompanyLogos