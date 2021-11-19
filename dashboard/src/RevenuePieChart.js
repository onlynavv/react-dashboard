import React from 'react'
import { PieChart, Pie, Cell } from 'recharts';
import './Chart.css'
import { useGlobalContext } from './context';
import CircleIcon from '@mui/icons-material/Circle';

const RevenuePieChart = () => {

    const {objArr} = useGlobalContext()
    const colors = ['#0088FE', '#00C49F','#FFBB28'];

    const newData = objArr.map((item,index)=>{
        return {...item, color:colors[index]}
    })

    return (
        <>
        <h4 className="chart-heading">Earnings Sources</h4>
        <div className="chart">
            <PieChart width={350} height={280}>
                <Pie
                    data={newData}
                    cx={175}
                    cy={140}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    >
                    {newData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
            </PieChart>
            <div className="revenue-source">
                {newData.map((item,index)=>{
                    return(
                        <p key={index} className="revenue-source-item"><CircleIcon style={{color:item.color}} /><span>{item.name}</span><span>{item.value}</span></p>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default RevenuePieChart
