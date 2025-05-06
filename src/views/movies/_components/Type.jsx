import React, {useState} from 'react'

const Type = ({category, price, count, increment, decrement}) => {

  return (
    <div className='flex mr-6 ml-3 ' >
        <div className='mr-7'>
            <div className=' p-2 pb-0 text-sm font-mono'> {category} </div>
            <div className='font-mono text-xs p-2 pt-0' > {price.toFixed(2)} €</div>
        </div>
        <div className='ml-auto mt-2 '>
            <button className="btn btn-sm btn-outline" onClick={decrement}> − </button>
            <span className=" ml-1 mr-1 text-lg font-mono w-6 text-center btn btn-sm btn-outline hover:bg-transparent hover:border-base-content pointer-events-none cursor-default select-none ">{count}</span>
            <button className="btn btn-sm btn-outline" onClick={increment}> + </button>
        </div>
        
        

    </div>
  )
}

export default Type