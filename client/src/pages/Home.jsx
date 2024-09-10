import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Carousel from '../components/Carousel/Carousel';
import Card from '../components/Card/Card';
import Services from '../components/Sections/Services';
import HomeIcon from '../assets/HomeIcon';
import Quote from '../components/Sections/Quote';
import Founder from '../components/Sections/Founder';
import ContactUs from '../components/Sections/ContactUs';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    gsap.fromTo(
      '#cards',
      {
        y: '100ex', // Starting position
        opacity: 0
      },
      {
        y: 0, // End position
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#cards_container',
          start: 'top 80%', // Animation starts when the top of #cards reaches 80% of the viewport height
        },
      }
    );
  }, []);

  return (
    <div>
      <Carousel />
      <section id='cards_container' className="bg-primary border-secondary border-t-[1ex] mt-3 p-4 pb-[6ex] overflow-hidden ">
        <div id="cards" className="flex gap-7 justify-center items-center ">
          <Card className="w-[91ex] py-[7ex] h-[35ex] px-[5ex] flex flex-col gap-5">
            <h2 className="font-bold text-3xl"> Our Story</h2>
            <p className="text-xl">
              Alpha Financial Solutions provides bespoke mortgage and finance services. We believe that financial freedom is not just a goal but a journey, and we are here to guide you every step of the way.
            </p>
          </Card>

          <Card className="w-[91ex] py-[7ex] h-[35ex] px-[5ex] flex flex-col gap-5">
            <h2 className="font-bold text-3xl"> Our Mission </h2>
            <p className="text-xl">
              At Alpha Financial Solutions, our mission is to empower individuals and businesses to achieve their financial aspirations through tailored solutions, expert advice, and exceptional service. We strive to build lasting relationships based on trust, integrity, and mutual success.
            </p>
          </Card>
        </div>
      </section>

      <section className="mt-[12ex]">
        <div className="w-full flex justify-center items-center mb-[12ex]">
          <div className="flex flex-col gap-14 justify-center items-center">
            <HomeIcon className="fill-secondary w-[10ex]" />
            <h1 className="text-5xl font-bold">Our services</h1>
          </div>
        </div>
        <Services />
      </section>

      <section className="mt-[12ex]">
        <Quote />
      </section>

      <section className="mt-[10ex]">
        <Founder />
      </section>

      <section className="mt-[10ex]">
        <ContactUs />
      </section>
    </div>
  );
};

export default Home;
