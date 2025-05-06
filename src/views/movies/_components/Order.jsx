import { div } from 'framer-motion/client'
import React, {useState} from 'react'

const Order = ({movie, day, ticketOptions, ticketCounts, selectedSeats, screening}) => {
    
    if (!screening) return null;

    const selectedTickets = ticketOptions
    .map((ticket, index) => {
        const count = ticketCounts[ticket.category] || 0;
        if (count === 0) return null;
        return {
            category: ticket.category,
            count,
            price: ticket.price * count,
        };
    })
    .filter(Boolean);

  return (
    <div className=' mt-6 ml-5'>
        <div className='text-2xl font-bold'> {movie.title} </div>
        <div className='text-lg font-mono text-base-content/70' > {day.name} </div>
        <div className='font-mono text-base-content/70' >
            {selectedTickets.map((ticket) => (
                <div key={ticket.category} className='flex' > 
                    <div className='ml-2 mr-2'> {ticket.count} x {ticket.category} </div>
                    <div className='ml-auto'>  {ticket.price} € </div>
                    
                </div>
            ))}
        </div>
        <hr className='border border-base-content/20 w-full my-2' />
        <div> Seats </div>
        <div className='flex flex-wrap gap-1 mt-2 mb-5'>
            {selectedSeats.map((seat, index) => (
                <div key={index} className='bg-base-content/20 rounded-field p-1 text-sm font-mono' > {seat.row} - {seat.seat} </div>
            ))}
        </div>
    </div>
  )
}

export default Order