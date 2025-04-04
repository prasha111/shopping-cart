import React, { useContext, useEffect, useState } from 'react'
import Ratings from './cartbox/ratings'
import Cartbox from './cartbox/cartbox'
import { productApi } from '../api/api'
import Search from './cartbox/search';
import { FilterContext } from '../App';

function MainSection({filter={}, setFilter=()=>{}}) {
    const [value, setValue] = useState()
    //const {filter={}, setFilter=()=>{}} = useContext(FilterContext)
    console.log()
    //const im = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    const [data, setData] = useState([]);
    useEffect(()=>{
         productApi().then((res)=>{
            setData(res)
            console.log(res)
        }).catch(()=>{

        })
        
        setData()
    }, [])
    const change = (value)=>{
        setValue(value.target.value)
        console.log(value.target.value)
        let data1 = data.filter((p)=>p?.title?.includes(value.target.value))
        setData(data1)
    }
    
console.log(filter.category, "f")
  return (
    <div className='width-[70%] max-w-[700px]'>
        <Search value={value} change={change}/>
        <div className=' grid grid-cols-3 gap-10 mt-4 '>
        {data?.filter((some)=>{
            console.log(filter?.price.filter((price)=>price.low<some.price && price.high>some.price).length, some.price, "price")
            if((filter?.category.length ===0 && filter?.price.length ===0 && filter?.rating.length === 0)) return true
            return filter?.category.includes(some.category) || filter?.rating.includes(Math.floor(some.rating.rate)) || filter?.price.filter((price)=>price.low<some.price && price.high>some.price)?.length
        })?.map((some,index)=>{
            return (
                <Cartbox image={some?.image} category={some?.category} title={some?.title} id={some?.id} price={some?.price} rating={some?.rating.rate} count={some?.rating.count}/>
            )
        })}
       
       </div>
    </div>
  )
}

export default MainSection