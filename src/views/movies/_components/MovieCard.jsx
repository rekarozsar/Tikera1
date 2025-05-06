import React, { useState, useEffect } from 'react'
import {useReservations} from './useReserv.jsx'
import MovieDetails from './MovieDetails.jsx'
import Seating from './Seating.jsx';
import TicketTypes from './TicketTypes.jsx';
import Order from './Order.jsx';
import Modal from './Modal.jsx';


const MovieCard = ( {movie, day} ) => {

    useEffect(() => {
        setSelectedScreening(null);
    }, [movie]);

    const [showModal, setShowModal] = useState(false);

    const [selectedScreening, setSelectedScreening] = useState(null);
    const [localReservations, addLocalReservations] = useReservations(
        movie?.id,
        selectedScreening?.start_time
    );
    


    const onTimeClick = (screening) => {
        setSelectedScreening(screening);
        setSelectedSeats([]);
        setTicketCounts({   
            Student: 0,
            Adult: 0,
            Pensioner: 0,
        });
    };

    const isBooked = (row, seat) => {
        const combined = [
            ...(selectedScreening?.bookings || []),
            ...localReservations
        ];
        return combined.some((b) => b.row === row && b.seat === seat);
    };

    const [ticketCounts, setTicketCounts] = useState({
        Student: 0,
        Adult: 0,
        Pensioner: 0,
    });

    const ticketOptions = [
        { category: 'Student', price: 7.5 },
        { category: 'Adult', price: 8.5 },
        { category: 'Pensioner', price: 6.5 }
    ];

    const [selectedSeats, setSelectedSeats] = useState([]);

    const totalTickets = Object.values(ticketCounts).reduce((sum, count) => sum + count, 0);

    const selectedTicketsCount = Object.values(ticketCounts).reduce((sum, count) => sum + count, 0);

    const canStillSelect = selectedTicketsCount > selectedSeats.length;

    useEffect(() => {
        if (selectedSeats.length > totalTickets) {
            setSelectedSeats(selectedSeats.slice(0, totalTickets));
        }
    }, [ticketCounts, totalTickets, selectedSeats]);


    const handleReserve = () => {
        if (!selectedScreening) return;
        setShowModal(true); 
    };
    
    const confirmReservation = () => {
    addLocalReservations(selectedSeats);
    setSelectedSeats([]);
    setTicketCounts({
        Student: 0,
        Adult: 0,
        Pensioner: 0,
    });
    setShowModal(false);
    };
    

    if (!movie) {
        return (
            <div className='bg-gradient-to-t from-neutral  via-base via-base to-base rounded-field  m-10 ml-0 w-11/20  shadow-lg' >

            </div>
        )
    }


  return (
    <div className='bg-gradient-to-t from-neutral  via-base via-base to-base rounded-field  m-10 ml-0 w-11/20  shadow-lg' >
        <MovieDetails movie={movie} day={day} onTimeClick={onTimeClick}></MovieDetails>
        <div className='flex'>
            <TicketTypes counts={ticketCounts} setCounts={setTicketCounts} selectedSeats={selectedSeats} selectedTicketsCount={selectedTicketsCount} ticketOptions={ticketOptions} screening={selectedScreening}></TicketTypes>
            <Seating screening={selectedScreening} isBooked={isBooked}  selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} canStillSelect={canStillSelect} />
        </div>

        <div className='flex  gap-1 mt-5'>
            <div className='w-1/2' >
            <Order movie={movie} day={day} ticketOptions={ticketOptions} ticketCounts={ticketCounts} selectedSeats={selectedSeats} screening={selectedScreening}></Order>
            </div>
            
            
            <div className='w-1/2  justify-center ' >
                {selectedScreening && (
                    <button className='btn mt-26 mr-5 ml-5 w-1/2' onClick={handleReserve}> Reserve </button>
                )}
            </div>
        </div>
        

        
    
    {showModal && (
    <Modal
        onClose={() => setShowModal(false)}
        onConfirm={confirmReservation}
    />
    )}

    </div>
  )
}

export default MovieCard