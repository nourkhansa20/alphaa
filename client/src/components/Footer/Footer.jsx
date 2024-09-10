import React from 'react'
import MapMarker from '../../assets/MapMarker'
import PhoneIcon from '../../assets/Phone'
import SocialMedia from '../widgets/SocialMedia'

const Footer = () => {
    return (
        <div className='bg-[#22232d]'>
            <div className='bg-primary flex justify-around px-9 py-[10ex]'>
                <div className='flex flex-col gap-5 w-[80ex]'>
                    <h3 className='text-secondary font-bold text-xl'>Quick Contact</h3>
                    <p className='text-white text-lg'>At Alphaa Financial Solutions, we believe in empowering your property dreams with our premium financial services. </p>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-3'>
                            <MapMarker className={`w-5 fill-secondary`} />
                            <span className='text-white font-semibold'>Sydney, Austrailia</span>
                        </div>
                        <div className='flex gap-3'>
                            <PhoneIcon className={`w-5 fill-secondary`} />
                            <span className='text-white font-semibold'>0468328227</span>
                        </div>
                    </div>
                </div>
                <div className='bg-[#22232d] px-5 py-10 rounded-xl flex flex-col gap-5'>
                    <h3 className='font-bold text-white text-xl'>Opening Hours</h3>
                    <div className='flex justify-center items-center gap-3'>
                        <span className='text-secondary font-semibold'>MON TO FRI</span>
                        <div className='border-dotted h-1 border-b-2 w-[30ex] border-gray-500' />
                        <span className='text-white'>
                            9:00am | 5:00pm
                        </span>
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                        <span className='text-secondary font-semibold'>Sat to Sun</span>
                        <div className='border-dotted h-1 border-b-2 w-[30ex] border-gray-500' />
                        <span className='text-white'>
                            Appointments Only
                        </span>
                    </div>
                    <button className='bg-secondary hover:bg-white transition-all duration-300 font-semibold py-3 rounded-lg text-primary'> SCHEDULE A VISIT</button>
                </div>
            </div>
            <div className='bg-primary mt-3 py-14 flex justify-around'>
                <SocialMedia />
                <p className='text-white'>2024 © All Rights Reserved | Developed with ❤️ by Nour Al Khansa</p>
            </div>
        </div>
    )
}

export default Footer