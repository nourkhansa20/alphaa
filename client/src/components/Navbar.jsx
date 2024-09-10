import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import { PrimaryButton } from '../moon-ui/Buttons'
import MapMarker from '../assets/MapMarker'
import TimeIcon from '../assets/TimeIcon'

const Navbar = () => {

    const navbarItems = [
        {
            text: 'HOME',
            to: 'home'
        }, {
            text: 'ABOUT US',
            to: 'about-us'
        }, {
            text: 'SERVICES',
            to: 'services'
        }
    ]

    const topbarItems = [
        {
            text: 'Syndey,Austrailia',
            icon: <MapMarker className={`w-3 fill-secondary`} />
        },
        {
            text: '0468238227',
            icon: <MapMarker className={`w-3 fill-secondary`} />
        },
        {
            text: 'Mon - Fri:9:00 - 5:00pm',
            icon: <TimeIcon className={`w-3 fill-secondary`} />
        },
        {
            text: 'Weelends Appointments Only',
            icon: <TimeIcon className={`w-3 fill-secondary`} />
        },
    ]
    return (
        <nav className='flex flex-col justify-center items-center'>
            <div className='bg-primary h-[8ex] w-full flex items-center justify-center'>
                <div className='flex justify-end gap-3 w-[60%]'>
                    {
                        topbarItems.map((item, index) => (
                            <div key={index} className='text-white items-center flex gap-2 ' >
                                {item.icon}
                                <span className='text-lg font-semibold'>{item.text}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='flex justify-center items-center w-full p-1 bg-white'>
                <div className='flex justify-between items-center   w-[60%]'>

                    <div>
                        <img src={Logo} alt="alphaa-logo" className='w-[35ex]' />
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='flex gap-4 h-full'>
                            {navbarItems.map((item, index) => (
                                <NavbarItem item={item} key={index} />
                            ))}
                        </div>
                        <PrimaryButton className={'font-bold p-4 ml-6 hover:scale-110 transition-all duration-300 '} width='w-fit'> CALL US ANYTIME</PrimaryButton>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

const NavbarItem = ({ item }) => {
    return (
        <Link className='flex gap-2 hover:bg-primary hover:text-white transition-all duration-300  h-[15ex] justify-center items-center p-5 font-bold' to={item.to}>
            <span>{item.text}</span>
        </Link>
    )
}