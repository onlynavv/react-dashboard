import React from 'react'
import RevenueLineChart from './RevenueLineChart'
import './Chart.css'
import RevenuePieChart from './RevenuePieChart'


const Charts = () => {


    return (
        <div className="chart-container">
            <div className="width-60">
                <RevenueLineChart title="Earnings Overview" grid />
            </div>
            <div className="width-40">
                <RevenuePieChart />
            </div>
        </div>
    )
}

export default Charts
