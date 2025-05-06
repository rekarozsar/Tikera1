import React from 'react'
import days from '../../assets/days.json';


const Menu = ({setSelectedDay}) => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
          <p className=" font-bold text-4xl text-primary  pr-40 pl-5">Tikera</p>
          <ul className="menu menu-horizontal bg-base-200 rounded-box navbar-center justify-center">
            
            {days.map((day, index) => (
              <li onClick={() => setSelectedDay(index)} key={index} className="btn btn-ghost rounded-selector text-secondary hover:bg-base-200 hover:text-primary">
                <a href="#" className="text-info  p-2 m-0 pl-2 pr-2">{day.name}</a>
              </li>
            ))}
          </ul>
          
        </div>
  )
}

export default Menu