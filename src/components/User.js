import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './User.css'

const User = () => {
    return (
        <div className='user'>
            <h1 className="user__name">Yoam Belhassen</h1>
            <p className='user__profession'>Software Engineer</p>
            <div className="user__infos">
                <p className='user__info'>
                    <LocalPhoneIcon/> 
                    <a href='tel:+972528257163'>052.825.7163</a>
                </p>
                <p className='user__info'>
                    <MailIcon/> 
                    <a href='mailto:yoamb97@gmail.com'>YoamBW@gmail.com</a>
                </p>
               {/* <p className='user__info'>
                    <EventIcon/> 07/11/1997 
                </p>*/}
                <p className='user__info'>
                    <LocationOnIcon/> Netanya
                </p>
               
            </div>
        </div>
    )
}

export default User
