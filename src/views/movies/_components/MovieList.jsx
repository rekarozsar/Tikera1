import React from 'react'
import MovieItem from './MovieItem.jsx'



const MovieList = ({day, movies, onMovieClick}) => {

    const filteredMovies = movies.filter(movie =>
        movie.screenings.some(screening => screening.weekday === day.name)
    );
    

  return (
    <div className="bg-gradient-to-t from-neutral  via-base via-base to-base rounded-field  m-10 w-2/5 shadow-lg ">
        <div className='btn  m-2 rounded-selector p-5 font-bold text-lg'> {day.name} </div>
        <div>
            <div className='flex flex-wrap items-start justify-start gap-2 p-2 m-2'>
                {filteredMovies.map((movie, index) => (
                    <MovieItem key={index} movie={movie} onClick={() => onMovieClick(movie)} ></MovieItem>
                ))}
            </div>
            
        
        </div>
        
    </div>
  )
}

export default MovieList