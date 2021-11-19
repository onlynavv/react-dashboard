import React from 'react'
import Navbar from "./Navbar";
import './DashboardContent.css'
import InfoComponent from './InfoComponent';
import Charts from './Charts';
import Projects from './Projects';

const DashboardContent = () => {
    return (
        <div className="dashboard-content">
            <div className="content">
                <Navbar />
                <InfoComponent />
                <Charts />
                <Projects />
            </div>
        </div>
    )
}

export default DashboardContent
