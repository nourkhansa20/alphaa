import React, { useEffect, useRef } from 'react'
import Card from '../Card/Card'
import gsap from 'gsap'
import HoldCompany from '../../assets/HoldCompany'
import EstimateKeyIcon from '../../assets/EstimateKeyIcon'
import CompanyIcon from '../../assets/CompanyIcon'
import EstimateIcon from '../../assets/EstimateIcon'
const Services = () => {
    const services = [
        {
            title: 'Home Loans',
            icon: <HoldCompany className='fill-secondary w-16'/>,
            desc: `
                    At Alphaa Financial Solutions, we specialize in guiding you through every step of your home loan journey. 

                    Whether you’re a first-time homebuyer eager to find your dream home, looking to refinance for better rates and terms, or investing in property to build your portfolio, our expert team is here to provide personalized solutions tailored to your financial goals.`
        },
        {
            title: 'First home buyer',
            icon: <HoldCompany className='fill-secondary w-16'/>,
            desc: `
                    A first-time homebuyer is an individual or household purchasing a home for the first time. 

                    First-time homebuyers may be eligible for various incentives, such as lower down payment requirements, grants, or tax credits, which aim to make homeownership more accessible.`
        },
        {
            title: 'Refinancing',
            icon: <EstimateKeyIcon className='fill-secondary w-16'/>,
            desc: `
                Refinancing is the process of replacing an existing loan with a new one, typically to take advantage of better terms, such as a lower interest rate, a different loan term, or to switch from an adjustable-rate mortgage to a fixed-rate mortgage. Homeowners often refinance to reduce their monthly mortgage payments, pay off their loan more quickly, or access equity in their home through a cash-out refinance. `
        },
        {
            title: 'Investment Property',
            icon: <CompanyIcon className='fill-secondary w-16'/>,
            desc: `
                   An investment property is a real estate asset purchased with the intention of generating income or profit, rather than being used as a primary residence. These properties can include residential homes, apartment buildings, commercial spaces, or land. Investors typically buy these properties to earn rental income, benefit from property appreciation over time, `
        },
        {
            title: 'Self Managed Super fund SMSF',
            icon: <EstimateKeyIcon className='fill-secondary w-16'/>,
            desc: `
                At Alphaa Financial Solutions, we offer expert guidance on Self-Managed Super Fund (SMSF) loans to help you maximize your investment potential. 

                Whether you’re looking to acquire residential or commercial property through your SMSF, our team provides tailored advice and innovative financing solutions to suit your needs.`
        },
        {
            title: 'Asset finance',
            icon: <CompanyIcon className='fill-secondary w-16'/>,
            desc: `
                At Alphaa Financial Solutions, we offer tailored asset and vehicle finance solutions to help you acquire the equipment or vehicle you need with ease.

                Whether you’re looking to purchase a new car, upgrade your business equipment, or finance a fleet, our team provides expert advice and customized financing options. `
        },
        {
            title: 'Personal loans',
            icon: <EstimateKeyIcon className='fill-secondary w-16'/>,
            desc: `
                At Alphaa Financial Solutions, we offer a range of personal loan options designed to meet your unique financial needs.

                Whether you’re looking to consolidate debt, fund a major purchase, or cover unexpected expenses, our team is dedicated to finding the right loan solution for you. `
        },
        {
            title: 'Expat Loans',
            icon: <CompanyIcon className='fill-secondary w-16'/>,
            desc: `
                At Alphaa Financial Solutions, we offer specialized expat loan services designed to meet the unique needs of expatriates.

                Whether you’re looking to purchase a property, invest, or manage financial obligations in a new country, our expert team provides tailored solutions and comprehensive support. `
        },
        {
            title: 'Commercial/Business Loans',
            icon: <EstimateIcon className='fill-secondary w-16'/>,
            desc: `
                At Alphaa Financial Solutions, we specialize in providing comprehensive commercial and business loan solutions tailored to your unique needs. Whether you’re seeking capital for expansion, equipment purchases, or working capital, our team is dedicated to finding the right financing option to fuel your growth. `
        },


    ]
    return (
        <div className='flex w-full justify-center gap-5 h-full'>
            <div className='grid lg:grid-cols-2 gap-x-10 gap-y-16 justify-items-center items-center'>
                {services.map((service, index) => (
                    <Card key={index} className={`p-6 max-w-[50ex] h-[60ex] flex flex-col gap-9`}>
                        <div className='flex items-center  gap-5'>
                            {service.icon}
                            <h2 className='font-semibold text-2xl'>{service.title}</h2>
                        </div>
                        <hr />
                        <p className='text-xl text-gray-500'>{service.desc}</p>
                    </Card>
                ))}
            </div>
            <Banner />
        </div>
    )
}

export default Services

const Banner = () => {
    const images = ['/4.jpg', '/5.jpg', '/6.jpg'];
    const imageRefs = useRef([]);
    const quoteRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 }); // Infinite loop

        // Loop through each image and animate them with a crossfade effect
        images.forEach((image, index) => {
            tl.to(imageRefs.current[index], {
                opacity: 1,
                duration: 2,    // Fade-in duration
                ease: 'power2.inOut'
            })
                .to(imageRefs.current[index], {
                    // opacity: 0,
                    // duration: 2,    // Fade-out duration
                    ease: 'power2.inOut'
                });  // Overlap fade-out with next fade-in (crossfade effect)
        }, '=+1');

    }, [images]);

    return (
        <div className='rounded-3xl hidden md:block border w-[55ex] relative overflow-hidden bg-white'>
            <div className="absolute inset-0 z-0">
                {images.map((src, index) => (
                    <img
                        key={index}
                        ref={(el) => (imageRefs.current[index] = el)} // Store the refs for each image
                        src={`/alphaa/${src}`}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover opacity-0"
                    />
                ))}
            </div>
            <div
                id='quote'
                ref={quoteRef}
                className="absolute inset-0 flex flex-col justify-center items-center z-10 text-center text-white "
            >
                <h3 className="text-3xl font-bold text-center">At Alphaa Financial Solutions, we offer a comprehensive range of financial services</h3>
                <p className="text-xl mt-2">We have the expertise to guide you through the process.</p>
                <p className="text-2xl font-semibold mt-2">100+ Simplify the loan</p>
            </div>
        </div>
    );
};
