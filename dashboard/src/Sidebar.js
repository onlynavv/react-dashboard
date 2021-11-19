import React from 'react'
import './Sidebar.css'
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';

const Sidebar = () => {
    return (
        <>
            <aside className="sidebar">
                <div className='sidebar-header'>
                    <h4>SB ADMIN <sup>2</sup></h4>
                </div>
                <div className="sidebar-content">
                    <SpeedOutlinedIcon />
                    <h5>Dashboard</h5>
                </div>
            </aside>
        </>
    )
}

export default Sidebar
