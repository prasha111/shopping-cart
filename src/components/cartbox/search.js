import React from 'react'

function Search({value, change}) {
  return (
    <div className='border border-gray-200 rounded-md  flex flex-row justify-center items-center p-2'>
       <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>

        <input placeholder='Search product' value={value} onChange={change} className='border-0 checked:border-0 w-[100%]'/>
    </div>
  )
}

export default Search