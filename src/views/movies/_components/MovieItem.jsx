import React from 'react'

const MovieItem = ({movie, onClick}) => {
  return (
    <div data-property-1="Default" className=' bg-base-300 inline-flex flex-col items-start justify-center gap-2 p-2 m-2 rounded-field w-1/4 cursor-pointer'  onClick={onClick}>
        <div className=' bg-neutral flex flex-col items-start self-stretch justify-center flex-1 gap-2 rounded-xl'>
            <img className='relative self-stretch flex-1 rounded-field  ' src={"./" + movie.image} alt={movie.title} />  {/*  */}
        </div>
        <div className='flex flex-col items-start justify-center p-1 '>
            <div className=" justify-center text-white text-xs font-bold font-mono" > {movie.title} </div>
            <div className='inline-flex items-center justify-start gap-2' >
                <div className="justify-center text-zinc-400 text-[9.52px] font-normal font-mono" > {movie.genre} </div>
                <div className="justify-center text-zinc-400 text-[9.52px] font-normal font-mono" > {movie.duration} min</div>
            </div>
            
        </div>
        
    </div>
  )
}

export default MovieItem