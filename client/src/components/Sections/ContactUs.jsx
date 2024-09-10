import React from 'react'
import MapMarker from '../../assets/MapMarker'
import PhoneIcon from '../../assets/Phone'
import TimeIcon from '../../assets/TimeIcon'
import PhoneImage from '../../assets/9.jpg'
import SocialMedia from '../widgets/SocialMedia'
import HandIcon from '../../assets/HandIcon'
import TalkWithUs from './TalkWithUs'

const ContactUs = () => {

    const contactUsItems = [
        {
            icon: <MapMarker className={`w-7 fill-secondary`} />,
            text: 'Sydney, Australia'
        },
        {
            icon: <MapMarker className={`w-7 fill-secondary`} />,
            text: '0468328227'
        },
        {
            icon: <TimeIcon className={`w-7 fill-secondary`} />,
            text: 'Mon - Fri: 9:00am - 5:00pm'
        },
        {
            icon: <TimeIcon className={`w-7 fill-secondary`} />,
            text: 'Weekend Appointments Only'
        }
    ]
    return (
        <div>
            <div className='flex justify-around'>
                <div className='flex flex-col gap-7'>
                    <h2 className='font-bold text-5xl '>Contact Us</h2>
                    <p className='text-gray-500'>Please feel free to ask if you have any further questions.</p>
                    <div className='flex flex-col gap-4'>
                        {
                            contactUsItems.map((item, index) => (
                                <ContactUsItem item={item} key={index} />
                            ))
                        }
                    </div>
                    <SocialMedia />
                </div>
                <img src={PhoneImage} alt="phone_image" className='lg:block hidden h-[40ex]' />
            </div>
            <TalkWithUs />

        </div>
    )
}

export default ContactUs

const ContactUsItem = ({ item }) => {
    return (
        <div className='flex  items-center gap-3'>
            <span>{item.icon}</span>
            <span className='font-semibold text-lg'>{item.text}</span>
        </div>
    )
}