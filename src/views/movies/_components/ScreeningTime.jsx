import React from 'react'

const ScreeningTime = ( {time, onClick, full} ) => {
return (
    <div onClick={onClick} className={' rounded border border-solid p-1 pt-0 pb-0 font-mono w-2/15  text-sm ' + (full ? 'border-neutral font-neutral' : 'cursor-pointer')}>
            {time}
    </div>
)
}

export default ScreeningTime