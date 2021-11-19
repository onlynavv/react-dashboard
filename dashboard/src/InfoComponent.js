import React from 'react'
import { useGlobalContext } from './context'
import './InfoComponent.css'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';

const InfoComponent = () => {

    const {monthlyEarnings,expensesTotal,completedTasksPercentage} = useGlobalContext()

    const pendingTasksPercentage = 100 - completedTasksPercentage

    return (
        <div className="info-container">
            <div className="info-wrapper card1">
                <div className="info-title">
                    <h6>EARNINGS (MONTHLY)</h6>
                    <h3>${monthlyEarnings}</h3>
                </div>
                <div className="info-icon">
                    <CalendarTodayIcon />
                </div>
            </div>
            <div className="info-wrapper card2">
                <div className="info-title">
                    <h6>EARNINGS (ANNUAL)</h6>
                    <h3>${expensesTotal}</h3>
                </div>
                <div className="info-icon">
                    <AttachMoneyIcon />
                </div>
            </div>
            <div className="info-wrapper card3">
                <div className="info-title">
                    <h6>Tasks</h6>
                    <h3>{completedTasksPercentage}%</h3>
                </div>
                <div className="info-icon">
                    <AssignmentIcon />
                </div>
            </div>
            <div className="info-wrapper card4">
                <div className="info-title">
                    <h6>Pending Tasks</h6>
                    <h3>{pendingTasksPercentage}%</h3>
                </div>
                <div className="info-icon">
                    <ModeCommentOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export default InfoComponent
