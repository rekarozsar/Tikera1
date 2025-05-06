import  { useState, useEffect } from 'react';
import React from 'react'
import ScreeningTime from './ScreeningTime.jsx'


const MovieDetails = ( {movie, day, onTimeClick} ) => {
    if (!movie) {
        return <div className="p-5"></div>;
    }

    const isFull = (screening) => {
        const key = `${movie.id}-${screening.start_time}`;
        const stored = JSON.parse(localStorage.getItem("reservations") || "{}");
        const local = stored[key] || [];
    
        const combined = [
            ...(screening?.bookings || []),
            ...local
        ];
    
        return combined.length >= screening.room.rows * screening.room.seatsPerRow;
    };
    
    

    const filteredScreenings = movie.screenings.filter(
        (screening) => screening.weekday === day.name)
        .sort((a, b) => {
            const [aHours, aMinutes] = a.start_time.split(":").map(Number);
            const [bHours, bMinutes] = b.start_time.split(":").map(Number);
            return aHours !== bHours ? aHours - bHours : aMinutes - bMinutes;
    });
        
    
    
    

  return (
    <div className='flex' >
        <img className='w-1/4 h-1/3 rounded-box transform -rotate-5 m-10  mt-[-1rem]' src={"./" + movie.image} alt="" />
        <div className='mt-17 ml-2 w-full mr-4' >
            <div className='text-3xl  font-bold ' > {movie.title} </div>
            <div className='font-mono text-base-content/50' > {movie.release_year} </div>
            <div className='flex gap-2' >
                <div className='font-mono text-base-content/50 text-sm '> {movie.genre} </div>
                <div className='font-mono text-base-content/50 text-sm'> {movie.duration} minutes </div>
            </div>
            <div className='font-mono text-base-content/50 mt-5 text-sm break-words whitespace-pre-wrap' > {movie.description} </div>
            <div className='flex flex-wrap gap-2 mt-2'>
                {filteredScreenings.map((s, idx) => (
                    <ScreeningTime key={idx} time={s.start_time} full={isFull(s)} onClick={() => { isFull(s) ? '' : onTimeClick(s)  } } />
                ))}
            </div>

            


            
        </div>
    </div>


    
  );
};

export default MovieDetails