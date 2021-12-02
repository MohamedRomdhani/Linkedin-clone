import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Header() {
    return (
        <div className='header'>
            
            <div className='header__left'>
                <img src="https://cdn.worldvectorlogo.com/logos/linkedin-icon.svg" alt=""/>
                <div className="header__search">
                    <SearchIcon/>

                    <input type="text"/>
                </div>
            </div>
            <div className='header__right'>
                <HeaderOption Icon={HomeIcon} title="home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption avatar="https://scontent.ftxl3-1.fna.fbcdn.net/v/t39.30808-6/222723736_4351769321510835_6714422934411262835_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeH3kGcJvxA_BV7WVGiBZHOgd5FgKOuasVx3kWAo65qxXHyLQn1iryoItIc8TtMWCAm2dhP9iggRp3XaC4tiffBV&_nc_ohc=cVO2MjR8XXQAX9qvGiT&_nc_ht=scontent.ftxl3-1.fna&oh=f5232c82e6c3231d46b5952f67d3ce5d&oe=61AEA699" title="me"/>
            </div>
        </div>
    )
}

export default Header
