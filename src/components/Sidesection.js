import React, { useContext, useEffect, useState } from 'react'
import { categoryApi } from '../api/api';
import Ratings from './cartbox/ratings';
import { FilterContext } from '../App';

const priceArray =[{p:1,low:"0", high:"100"},{p:2,low:"100", high:"200"},{p:3 ,low:"200", high:"300"} , {p:4, low:"300", high:"500"} ,{p:5,low:"500", high:"1000"}    ]

function  Sidesection({filter={}, setFilter=()=>{}}) {
  const [data, setData] = useState([]);
  //const {filter={}, setFilter=()=>{}} = useContext(FilterContext)
  useEffect(()=>{
    categoryApi().then((res)=>{
      setData(res)
    }).catch((err)=>{

    })
  },[])
  const handleFilter= (type,value)=>{
    let some ={}
    if(filter?.[type]?.includes(value)){
      let i = filter?.[type].indexOf(value)
      some = {...filter, [type]:filter?.[type]?.filter((check)=> check !== value)}
    }
    else{
       some  = {
        ...filter,
          [type]:filter?.[type].concat(value)
        }
    }
    setFilter(some)
  }
  const handleClear = () =>{
    const some ={
      category:[],
      price:[],
      rating:[]
    }
    setFilter(some)
  }
  console.log()
  console.log(filter, "ff")
  return (
    <div className='w-[30%] max-w-[300px] flex items-end mr-2 flex-col'>
      <div className='flex flex-col  w-[200px] pb-2 border-b-[1px]'>
        <h1 className='flex flex-row justify-between '><span>All categories</span>
        <span>^</span>
        </h1>
        <div className='flex flex-col gap-[0px]'>
        {data?.map((categ, index)=>{
          return(
            <div className='flex mt-3 gap-4'>
          <input onClick={()=>{handleFilter("category", categ)}} checked={filter?.["category"]?.includes(categ)} type='checkbox' />
          <span className='text-[14px]'>{categ}</span>
        </div>
          )
        })}
        </div>
      </div>
      <div className='flex flex-col mt-4  w-[200px] pb-2 border-b-[1px]'>
        <h1 className='flex flex-row justify-between '><span className='font-400'>Prices</span>
        <span>^</span>
        </h1>
        <div>
        {priceArray?.map((price, index)=>{
          return(
            <div  onClick={()=>{handleFilter("price", price)}} checked={filter?.["price"]?.includes({...price})} className='flex mt-3 gap-4'>
          {/* <input  onClick={()=>{handleFilter("price", price)}} checked={filter?.["price"]?.includes({...price})} type='checkbox' /> */}
          <span className='text-[14px]'>${price?.low}- ${price?.high}</span>
        </div>
          )
        })}
        </div>
      </div>
      <div className='flex flex-col mt-4  w-[200px] pb-2 border-b-[1px]'>
        <h1 className='flex flex-row justify-between '><span className='font-400'>Ratings</span>
        <span>^</span>
        </h1>
        <div>
        {new Array(5).fill("")?.map((rate, index)=>{
          return(
            <div className='flex mt-3 gap-4'>
          <input onClick={()=>{handleFilter("rating", index+1)}} checked={filter?.["rating"]?.includes(index+1)} type='radio' />
          <span className='text-[14px]'>
            <Ratings rate={index+1}/>
          </span>
        </div>
          )
        })}
        </div>
      </div>
      <div className='flex w-[200px] mt-4 flex-row justify-start items-start'> 
        <button onClick={handleClear} className='border border-gray-200 text-black p-[10px] rounded-md'>Clean Filters</button></div>
      {filter?.category && filter?.category.map((filterr, index)=>{
        return(
          <span className='text-[10px] bg-gray-200'>{filterr}</span>
        )
      }
    )
      }
       {filter?.price && filter?.price.map((price, index)=>{
        return(
          <span className='text-[10px] bg-gray-200'>{price.low}- {price.high}</span>
        )
      }
    )
      }
       {filter?.rating && filter?.rating.map((rating, index)=>{
        return(
          <span className='text-[10px] bg-gray-200'>{rating}</span>
        )
      }
    )
      }
     
    
    </div>
  )
}


export default Sidesection;