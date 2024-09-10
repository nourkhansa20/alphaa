import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

const Carousel = () => {
    const images = [
        {
            src: '/1.jpg',
            title: 'Empowering Financial Security for Everyone',
            desc: "We are committed to providing accessible and reliable financial services to help individuals and families."
        },
        {
            src: '/2.jpg',
            title: ' Financial Security for Everyone',
            desc: "We are committed to providing accessible and reliable financial services to help individuals and families."
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative">
            <div className="absolute left-0 top-1/2 cursor-pointer text-white z-10 rounded-full size-10 flex items-center justify-center  bg-opacity-30 bg-black hover:bg-opacity-100 transition-all duration-300 " onClick={handlePrev}>
                {`<`}
            </div>
            <div className="absolute right-0 top-1/2  cursor-pointer text-white z-10 rounded-full size-10 flex items-center justify-center  bg-opacity-30 bg-black hover:bg-opacity-100 transition-all duration-300" onClick={handleNext}>
                {`>`}
            </div>

            <div>
                <CarouselItem key={currentIndex} item={images[currentIndex]} />
            </div>
        </div>
    );
};

const CarouselItem = ({ item }) => {
    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo('#image', { opacity: 1, scale: 1.1 }, {
            scale: '1',
            opacity: 1,
            duration: 10
        }, 0)

        tl.fromTo('#text-container', { opacity: 0, y: 50 }, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: 'power3.out'
        }, 1);

        return () => {
            tl.kill();
        };
    }, [item]);

    return (
        <div className={`text-center relative h-[95vh] overflow-hidden`} >
            <div id='image' className=' bg-cover bg-center flex justify-center items-center h-full' style={{ backgroundImage: `url(${item.src})` }}>

                <div id='text-container' className='opacity-0'>
                    <h1 className='text-[10ex] text-white w-[30ex] font-bold'>{item.title}</h1>
                    <p className='text-2xl text-white font-semibold '>{item.desc}</p>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
