import React, { useEffect, useRef, useState } from 'react'
import TalkWithUs from '../components/Sections/TalkWithUs'
import HomeIcon from '../assets/HomeIcon'
import gsap from 'gsap'
import Slider from 'react-slick';

const AboutUs = () => {

  const items = [
    {
      title: 'Welcome to Alphaa Financial Solutions',
      desc: `At Alphaa Financial Solutions, we believe in empowering your property dreams with our premium financial services. Established with a vision to provide seamless loan processing and financial advisory, we have grown to become a trusted name in the Australian mortgage industry.`
    },
    {
      title: 'Our Story ',
      desc: ` Alphaa Financial Solutions was born out of a desire to simplify the complexities of property financing. Our founder,
Mr. Pawan Punjabi, envisioned a company where customer-centricity and financial expertise go hand in hand. Over the years, we have helped thousands of Australians achieve their dream of owning a home, thanks to our unwavering commitment to excellence and innovation.`    },
    {
      title: 'Our Mission',
      desc: `Our mission is to provide our clients with tailored financial solutions that cater to their unique needs. We strive to make the process of securing a mortgage as straightforward and stress-free as possible, guiding you through every step with transparency and integrity.`
    },
  ]
  return (
    <div>
      <div >
        <div className='w-[60%] m-auto'>
          <h1 className='text-primary font-bold text-5xl mt-4'>About Us</h1>
          <div className='mt-[20ex] flex flex-col justify-center items-center'>
            <HomeIcon className="fill-secondary w-[10ex]" />
            <h2 className='text-4xl text-primary font-bold my-9'>We believe you’re bright</h2>
            <div className='grid grid-cols-2 gap-14 mt-[10ex]'>
              <img src="/11.jpg" alt="family-image" className='w-[80ex] border-r-[9px] border-b-[9px] rounded-xl border-secondary' />
              {
                items.map((item, index) => (
                  <div className='flex flex-col gap-7 '>
                    <h4 className='text-lg font-bold'>{item.title}</h4>
                    <p className='text-lg text-gray-500'>{item.desc}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>


        <div className='flex justify-center  items-center gap-16 bg-primary w-screen my-[10ex] p-14'>
          <Banner />
          <div className='flex flex-col gap-7 w-[70ex]'>
            <h3 className='text-secondary font-semibold'>Why Choose Us</h3>
            <h1 className='font-bold text-white text-4xl'>Our Expertise</h1>
            <p className='text-white'>Expertise and Experience: With over 20 Years of experience in the industry, our team of financial experts brings a wealth of knowledge and expertise to the table.</p>
            <p className='text-white'>Customer-Centric Approach: We put our clients at the heart of everything we do, offering personalized advice and support to help you make informed financial decisions.</p>
            <p className='text-white'>Customer-Centric Approach: We put our clients at the heart of everything we do, offering personalized advice and support to help you make informed financial decisions.</p>
            <p className='text-white'>Transparency and Integrity: We pride ourselves on our ethical approach, ensuring transparency and integrity in all our dealings.</p>
          </div>
        </div>
      </div>
      <CustomCarousel />

      <TalkWithUs />
    </div>
  )
}

export default AboutUs

const Banner = () => {
  const images = ['/12.jpg', '/13.jpg', '/14.jpg'];
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
    <div className='rounded-3xl border size-[80ex] relative overflow-hidden bg-white border-l-[9px] border-b-[9px] border-t-0 border-r-0 border-secondary'>
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <img
            key={index}
            ref={(el) => (imageRefs.current[index] = el)} // Store the refs for each image
            src={src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-0"
          />
        ))}
      </div>
    </div>
  );
};


const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    name: "John Doe",
    position: "CEO"
  },
  {
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    name: "Jane Smith",
    position: "CTO"
  },
  {
    text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
    name: "Mike Johnson",
    position: "CFO"
  }
];

const CustomCarousel = () => {

  const [index, setIndex] = useState(0)

  const images = ['/p1.jpg', '/p2.jpg', '/p3.jpg']

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide navigation arrows
    autoplay: true, // Optional: Enable auto slide
    autoplaySpeed: 3000, // Time interval for each slide
    customPaging: (i) => (
      <div className=""></div>
    ),
    appendDots: (dots) => (
      <div className="flex justify-center items-center mt-4 space-x-2">{dots}</div>
    ),
  };

  return (
    <div className="w-[50%] m-auto">
      <div className='flex gap-3 items-center justify-center'>
        {
          images.map((img, index) => (
            <img src={img} alt="persom-image" className='w-[13ex] rounded-xl border-b-[5px] border-r-[5px] border-t-0 border-l-0 border-secondary' />
          ))
        }
      </div>
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="text-center p-8 ">
            <p className="text-lg text-gray-700 bg-white py-8 px-6 rounded-lg">{item.text}</p>
            <div className="mt-6">
              <h3 className="font-semibold text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-500 font-semibold">{item.position}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
