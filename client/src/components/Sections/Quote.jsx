import React, { useEffect } from 'react';
import FamilyImage from '../../assets/7.jpg';
import FamilyImage2 from '../../assets/8.jpg';
import House from '../../assets/house.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HomeIcon from '../../assets/HomeIcon';
import Card from '../Card/Card';

gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

const Quote = () => {
    useEffect(() => {
        // Animate the house when it enters the viewport
        gsap.to('#house', {
            duration: 1,
            left: '-12ex',
            scrollTrigger: {
                trigger: '#house',
                start: 'top 80%', 
            },
        });

        // Animate image_family2 when it enters the viewport
        gsap.to('#image_family2', {
            duration: 1,

            left: '0ex',
            scrollTrigger: {
                trigger: '#image_family2',
                start: 'top 80%',
            },
        });
    }, []);

    return (
        <div className='h-full'>
            <div className='flex justify-center items-center gap-24 '>
                <div className='relative'>
                    <img src={FamilyImage} alt="family-image" className='w-[85ex] h-[40ex] object-cover rounded-lg' />
                    <img id='house' src={House} alt="" className='absolute w-[50ex] -left-[200ex] -bottom-[8ex]' />
                </div>
            </div>
            <div className='flex justify-between relative mt-[10ex]'>
                <div className='w-[60ex] bg-primary h-[50ex] absolute' />
                <div />
                <div className='bg-[#22232d] pb-[20ex] h-full w-[90%] relative right-0 rounded-2xl'>
                    <div className='flex justify-between h-full'>
                        <div className='min-h-full flex flex-col gap-2 justify-center ml-[10ex]'>
                            <HomeIcon className='fill-secondary w-[30ex]' />
                            <h3 className='text-5xl text-white font-bold '> We believe you're bright </h3>
                        </div>
                        <div id='image_family2' className='relative left-[200ex]'>
                            <img src={FamilyImage2} alt="" className='w-[130ex] rounded-b-xl' />
                            <Card className={'p-[9ex] flex flex-col justify-center items-center absolute -bottom-[15ex] left-[20ex] hover:border-none hover:-translate-y-5 transition-all duration-300 '}>
                                <h4 className='text-5xl font-bold'>20+</h4>
                                <p className='font-semibold text-xl'>Years Experience</p>
                            </Card>
                            <Card className={'p-[9ex] flex flex-col justify-center items-center absolute -bottom-[20ex] right-[20ex] hover:border-none hover:-translate-y-5 transition-all duration-300 '}>
                                <h4 className='text-5xl font-bold'>320+</h4>
                                <p className='font-semibold text-xl'>Lenders</p>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quote;
