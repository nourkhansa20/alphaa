import React from 'react'
import HandIcon from '../../assets/HandIcon'
import Card from '../Card/Card'
import FounderImage from '../../assets/founder.jpg'
const Founder = () => {
    return (
        <div className='flex flex-col w-full justify-center items-center gap-10'>
            <HandIcon className='fill-secondary w-[8ex]' />
            <h1 className='text-primary text-4xl font-semibold'>Meet Our Founder</h1>
            <Card className={'flex flex-col justify-center items-center gap-5 py-5'}>
                <img src={FounderImage} alt="founder-image " className='w-[30ex] object-cover' />
                <div className='text-center'>
                    <h3 className='font-semibold '>Mr. Pawan Punjabi</h3>
                    <p>Founder</p>
                </div>
            </Card>
        </div>
    )
}

export default Founder