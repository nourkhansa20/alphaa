import React from 'react'
import Twiter from '../../assets/Twiter'
import Telegram from '../../assets/Telegram'
import WorldPress from '../../assets/WorldPress'
import Viber from '../../assets/Viber'

const SocialMedia = () => {

    const socialMedia = [<Twiter className=' fill-primary' />, <Telegram className=' fill-primary' />, <WorldPress className=' fill-primary' />, <Viber className=' fill-primary' />]
    return (
        <div className='flex gap-3'>
            {
                socialMedia.map((icon, index) => (
                    <div className='size-[5ex] p-2 bg-secondary cursor-pointer rounded-md'>
                        {icon}
                    </div>
                ))
            }
        </div>
    )
}

export default SocialMedia