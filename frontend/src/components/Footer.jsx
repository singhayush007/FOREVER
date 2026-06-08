import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer aria-label="Site footer">
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="Forever - Online Fashion Store" />
          <p className='w-full md:w-2/3 text-gray-600'>
            Forever is your go-to destination for trendy clothing, accessories, and lifestyle products. Shop the latest collections for men, women, and kids — delivered fast to your doorstep.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li><Link to='/' className='hover:text-black transition-colors'>Home</Link></li>
            <li><Link to='/about' className='hover:text-black transition-colors'>About Us</Link></li>
            <li><Link to='/collection' className='hover:text-black transition-colors'>Delivery</Link></li>
            <li><Link to='/contact' className='hover:text-black transition-colors'>Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li><a href='tel:+12124567890' className='hover:text-black transition-colors'>+1-212-456-7890</a></li>
            <li><a href='mailto:contact@foreveryou.com' className='hover:text-black transition-colors'>contact@foreveryou.com</a></li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center text-gray-600'>
          &copy; {new Date().getFullYear()} Forever. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
