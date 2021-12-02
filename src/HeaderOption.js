import { PinDropSharp } from '@material-ui/icons';
import { Avatar } from '@mui/material';
import React from 'react'
import "./HeaderOption.css";

function HeaderOption(props) {
    return (
        <div className='headerOption'>
            {props.Icon && <props.Icon className='headerOption__icon'/>}
            {props.avatar && <Avatar className='headerOption_icon' src={props.avatar}/>}
            <h3 className="headerOption_title">{props.title}</h3>
        </div>
    )
}

export default HeaderOption;
