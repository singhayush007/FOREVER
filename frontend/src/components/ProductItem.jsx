import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'

const ProductItem = ({id, image, name, price}) => {

    const {currency} = useContext(ShopContext);

  return (
    <Link onClick={() => scrollTo(0,0)} className='text-gray-700 cursor-pointer group' to={`/product/${id}`}>
      <div className='overflow-hidden bg-gray-50'>
        <img
          className='w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out'
          src={image[0]}
          alt={name}
        />
      </div>
      <div className='pt-3 pb-1'>
        <p className='text-sm truncate'>{name}</p>
        <p className='text-sm font-semibold mt-1'>{currency}{price}</p>
      </div>
    </Link>
  )
}

export default ProductItem
