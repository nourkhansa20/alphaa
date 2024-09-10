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
                    <img src={FamilyImage} alt="family-image" className='lg:w-[85ex] w-[50ex] h-[40ex] object-cover rounded-lg' />
                    <img id='house' src={House} alt="" className='absolute lg:w-[50ex] w-[40ex] -left-[200ex] -bottom-[8ex]' />
                </div>
            </div>
            <div className='flex justify-center lg:justify-between relative mt-[10ex]'>
                <div className='hidden lg:block w-[60ex] bg-primary h-[50ex] absolute' />
                <div />
                <div className='bg-[rgb(34,35,45)] lg:pb-[30ex] pb-[8ex] h-full w-[90%] relative right-0 rounded-2xl'>
                    <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-between h-full lg:gap-0 gap-7'>
                        <div className='min-h-full flex flex-col gap-2 justify-center items-center lg:ml-[10ex]'>
                            <HomeIcon className='fill-secondary lg:w-[30ex] w-[10ex] mt-7 lg:mt-0' />
                            <h3 className='lg:text-5xl text-2xl text-white font-bold '> We believe you're bright </h3>
                        </div>
                        <div id='image_family2' className='relative lg:left-[200ex]'>
                            <img src={FamilyImage2} alt="" className='lg:w-[130ex] w-[40ex] rounded-b-xl' />
                            <Card className={'lg:p-[9ex] p-3 flex flex-col justify-center items-center absolute lg:-bottom-[15ex] -bottom-5  lg:left-[20ex] left-9 hover:border-none hover:-translate-y-5 transition-all duration-300 '}>
                                <h4 className='lg:text-5xl text-xl font-bold'>20+</h4>
                                <p className='font-semibold lg:text-xl text-[9px]'>Years Experience</p>
                            </Card>
                            <Card className={'lg:p-[9ex] p-3  flex flex-col justify-center items-center absolute lg:-bottom-[20ex] -bottom-10 lg:right-[20ex] right-10 hover:border-none hover:-translate-y-5 transition-all duration-300 '}>
                                <h4 className='lg:text-5xl text-xl font-bold'>320+</h4>
                                <p className='font-semibold lg:text-xl text-sm'>Lenders</p>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quote;
