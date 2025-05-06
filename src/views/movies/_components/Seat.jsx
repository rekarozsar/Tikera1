import React from 'react'

const Seat = ({row, seat, booked, onClick,  selected, canStillSelect}) => {
  return (
    <div onClick={booked  ? null : onClick} className={'relative w-7 h-6 m-1 rounded-md ' +  (booked ? 'bg-base-100' : 'bg-primary') + (selected ? ' bg-secondary' : '') + ' flex items-start justify-center shadow-md ' + (booked ? '' : 'hover:scale-115 transition-transform cursor-pointer')} >
        <div className={'absolute top-[-6px] w-3/5 h-7/8 rounded-sm ' + (booked ? 'bg-base-100' : 'bg-primary') + (selected ? ' bg-secondary' : '') + ' border border-solid border-2 border-' + (booked ? 'base-300' : 'primary-content') + (selected ? ' border-secondary-content' : '')}></div>    
    </div>
  )
}

export default Seat