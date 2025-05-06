import React, {useState} from 'react'
import Type from './Type.jsx'

const TicketTypes = ({counts, setCounts, selectedSeats, selectedTicketsCount, ticketOptions, screening}) => {

  if (!screening) return null;
  


  const increment = (category) => {
    setCounts((prev) => ({ ...prev, [category]: prev[category] + 1 }));
  };

  const decrement = (category) => {
    setCounts((prev) => ({...prev, [category]: prev[category] > 0 ? prev[category] - 1 : 0 }));
  };
  
  const total = ticketOptions.reduce((sum, ticket) => sum + counts[ticket.category] * ticket.price, 0);



  return (
    <div>
        <div className='flex flex-col gap-1 mt-10'>
        {ticketOptions.map((ticket) => (
          <Type
            key={ticket.category}
            category={ticket.category}
            price={ticket.price}
            count={counts[ticket.category]}
            increment={() => increment(ticket.category)}
            decrement={() => decrement(ticket.category)}
          />
        ))}

        <div className='mt-4 ml-3 font-mono'>
          Total: {total.toFixed(2)} €
        </div>

        <div className='mt-2 ml-3 font-mono' >Selected seats:  {selectedSeats.length} / {selectedTicketsCount}  </div>
            
            
        </div>
    </div>
  )
}

export default TicketTypes