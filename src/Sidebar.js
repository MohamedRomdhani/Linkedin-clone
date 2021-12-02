import { Avatar } from '@mui/material';
import React from 'react'
import "./Sidebar.css"
function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );


    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1638201970932-b7e7b05c6c9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>
                <Avatar className="sidebar__avatar" />
                <h2>Mohamed Romdhani</h2>
                <h4>romdhanimoahmed@gmail.com</h4>
                </div>
                <div className="sidebar__stats">
                    <div className="sidebar__stat">
                        <p>Who viewed you</p>
                        <p className="sidebar_statNumber">2,543</p>
                    </div>
                    <div className="sidebar__stat">
                        <p>Views on Post</p>
                        <p className="sidebar_statNumber">2,448</p>
                    </div>
                </div>
                
            
            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
    )
}

export default Sidebar;
