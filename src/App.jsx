import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './views/layout/Menu.jsx'
import MovieList from './views/movies/_components/MovieList.jsx'
import MovieCard from './views/movies/_components/MovieCard.jsx'
import  days from './assets/days.json'
import movies from './assets/movies.json'

function App() {
  const d = new Date();
  let defaultDay = d.getDay();
  if (defaultDay === 0) {
    defaultDay = 6;
  } else {
    defaultDay -= 1;
  }
  const [selectedDay, setSelectedDay] = useState(defaultDay);
  const [selectedMovie, setSelectedMovie] = useState(null);
  //bg-gradient-to-r from-gray-800 via-blue-700 to-gray-900 - metal blue
  //bg-gradient-to-tr from-gray-600 via-blue-500 to-cyan-400 - ocean blue
  

  return (
    <>
    <div className="" >
      <div>
      
        <Menu setSelectedDay={(dayIndex) => { 
          setSelectedDay(dayIndex);
          setSelectedMovie(null); 
        }} ></Menu>
        <div className=" min-h-screen flex justify-center">
          <MovieList day={days[selectedDay]} movies={movies} onMovieClick={setSelectedMovie}></MovieList>
          <MovieCard movie={selectedMovie} day={days[selectedDay]}/>
        </div>
        
        

      </div>
    </div>
    </>
  )
}

export default App
