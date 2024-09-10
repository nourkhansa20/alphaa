import React from 'react'
import HandIcon from '../../assets/HandIcon'

const TalkWithUs = () => {
    return (
        <div className='h-[50ex]  bg-cover mt-[5ex] text-center lg:text-start' style={{ backgroundImage: `url(/alphaa/10.jpg)`, backgroundRepeat: 'no-repeat' }}>
            <div className='size-full flex flex-col gap-4 justify-center items-center bg-white bg-opacity-20'>
                <HandIcon className='w-[8ex] fill-primary' />
                <h2 className='text-5xl font-bold text-primary'>Talk to PAWAN now!</h2>
                <button className='bg-white py-5 px-9 rounded-lg font-semibold hover:scale-105 transition-all duration-300'>Contact Us</button>
                <p className='text-xl '>Feel Free to Get in Touch for a No Obligations
                    <a className='ml-2 underline cursor-pointer'>Call <span className='font-semibold'> PAWAN!! </span></a>
                </p>
            </div>
        </div>
    )
}

export default TalkWithUs