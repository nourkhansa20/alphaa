import React from 'react'

const Card = ({ className, children }) => {
    return (
        <div className={`bg-white w-fit border-b-secondary border-b-[6px] rounded-xl ${className} `}>
            {children}
        </div>
    )
}

export default Card