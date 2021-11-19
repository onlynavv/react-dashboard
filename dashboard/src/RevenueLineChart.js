import React from 'react'
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import './Chart.css'
import { useGlobalContext } from './context';

const RevenueLineChart = ({title,grid}) => {

  const {expenses} = useGlobalContext()
  console.log(expenses)

  let expenseData = expenses.map((item)=>{
    return {...item, expenses:item['expenses']['direct'] + item['expenses']['social'] + item['expenses']['referal']}
})

    return (
        <>
        <h4 className="chart-heading">{title}</h4>
        <div className="chart">
                <AreaChart width={600} height={300} data={expenseData}>
                    <XAxis dataKey="name" stroke="#5550bd"></XAxis>
                    <YAxis />
                    <Area type="monotone" dataKey='expenses' stroke="#5550bd"></Area>
                    <Tooltip></Tooltip>
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"></CartesianGrid>}
                </AreaChart>
        </div>
        </>
    )
}

export default RevenueLineChart
