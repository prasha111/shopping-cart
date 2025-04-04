import React from 'react'
import Ratings from './ratings'
function Cartbox({image, price, title, description, category, rating, count}) {
     const im = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";
  return (
    <div>
        <div className='border border-[0.5px] border-[gray] h-[400px] w-[200px] flex flex-col p-[12px]'>
            <img height={100} width={100} src={image} alt="some" className='margin-[auto] m-[auto] h-[140px] w-[120px]'/>
            <div className='flex flex-col gap-2 mt-2'>
            <span className='h-[40px] text-[14px] font-[600] text-left text-ellipsis line-clamp-2 '>
                {title} 
            </span>
            <div className='flex items-center'>
            <Ratings rate={Math.floor(rating)}/>
            <sapn className="text-[12px]">({count})</sapn>
            </div>
       
        <span className='text-[10px] bg-gray-200 rounded-md pr-1 pl-2 w-fit'>
            {category}
        </span>
        <span className='text-[12px] font-[400] text-left text-ellipsis line-clamp-2'> 
            {description}
        </span>
        <span className='text-[18px] font-[600] text-left'>
            ${price}
        </span>
        <div className='flex flex-row justify-between'>
            <button className='text-[12px] bg-red-500 text-white p-2 rounded-md'>Buy Now</button>
            <button className='text-[12px] bg-white text-red-500 p-2 rounded-md'>Add to cart</button>
        </div>
            </div>
          
        </div>
    </div>
  )
}

export default Cartbox