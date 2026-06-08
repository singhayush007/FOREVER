import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>

      <div className='group cursor-default'>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5 group-hover:scale-110 transition-transform duration-200' alt="Easy exchange" />
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400 mt-1'>Hassle-free exchange on all orders</p>
      </div>

      <div className='group cursor-default'>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5 group-hover:scale-110 transition-transform duration-200' alt="7 day return" />
        <p className='font-semibold'>7-Day Return Policy</p>
        <p className='text-gray-400 mt-1'>Free returns within 7 days of delivery</p>
      </div>

      <div className='group cursor-default'>
        <img src={assets.support_img} className='w-12 m-auto mb-5 group-hover:scale-110 transition-transform duration-200' alt="Customer support" />
        <p className='font-semibold'>24/7 Customer Support</p>
        <p className='text-gray-400 mt-1'>We're here whenever you need us</p>
      </div>

    </div>
  )
}

export default OurPolicy
