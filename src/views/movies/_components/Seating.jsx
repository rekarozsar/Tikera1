import React, {useState} from 'react';
import Seat from './Seat.jsx';

const Seating = ({ screening, isBooked, selectedSeats, setSelectedSeats, canStillSelect }) => {
  if (!screening) return null;


  const selectSeat = (row, seat) => {
    const exists = selectedSeats.some((s) => s.row === row && s.seat === seat);
    if (exists) {
        setSelectedSeats(selectedSeats.filter((s) => !(s.row === row && s.seat === seat)));
    } else if (canStillSelect){
        setSelectedSeats([...selectedSeats, { row, seat }]);
    }
  };

  const isSelected = (row, seat) => {
    return selectedSeats.some((s) => s.row === row && s.seat === seat);
  };


  return (
    <div className="mt-5">
        <div className="font-mono mb-2 text-sm">Seats for {screening.start_time}</div>
            <div className="flex flex-col gap-1">
            {Array.from({ length: screening.room.rows }, (_, rowIdx) => (
                <div key={rowIdx} className="flex gap-1">
                {rowIdx + 1}
                {Array.from({ length: screening.room.seatsPerRow }, (_, seatIdx) => (
                    <Seat
                        key={seatIdx}
                        row={rowIdx + 1}
                        seat={seatIdx + 1}
                        booked={isBooked(rowIdx + 1, seatIdx + 1)}
                        onClick={() => selectSeat(rowIdx + 1, seatIdx + 1)}
                        selected={isSelected(rowIdx + 1, seatIdx + 1)}
                        canStillSelect={canStillSelect}
                    />
                ))}
                </div>
            ))}
        </div>
        
       
        
    </div>
  );
};

export default Seating;
