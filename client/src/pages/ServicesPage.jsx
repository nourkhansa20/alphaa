import React from 'react'
import Services from '../components/Sections/Services'
import AnimatedArrows from '../assets/AnimatedArrows'
import HomeIcon from '../assets/HomeIcon'

const ServicesPage = () => {
  return (
    <div className='mb-10'>
      <h1 className='text-primary font-bold text-5xl w-[68%] m-auto mt-5'>Services</h1>
      <div
        className='h-[45ex] bg-cover my-[10ex]'
        style={{ backgroundImage: `url('/15.jpg')`, backgroundPosition: 'center' }}
      >
        <div className='bg-black bg-opacity-60 size-full flex flex-col gap-5 items-center justify-center'>
          <h3 className='text-white text-5xl font-bold'>Services</h3>
          <AnimatedArrows />
        </div>
      </div>
      <div className='flex flex-col gap-5 justify-center items-center mb-[10ex] '>
        <HomeIcon className="fill-secondary w-[10ex]" />
        <h4 className='font-semibold'>Our services</h4>
        <h3 className='text-4xl font-bold'>Find the right home for your budget</h3>
      </div>
      <Services />
    </div>
  )
}

export default ServicesPage