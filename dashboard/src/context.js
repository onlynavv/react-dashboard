import React, {useContext} from 'react'
import { expenses } from './data';
import {projectsData} from './data'

const AppContext = React.createContext()

const AppProvider = ({children}) => {

    let total = expenses.map((item)=>{
    return {...item, expenses:item['expenses']['direct'] + item['expenses']['social'] + item['expenses']['referal']}
    })

    const monthlyEarnings = (total[total.length - 1]).expenses

    let expensesTotal = total.reduce((acc, curr)=>{
        const {expenses} = curr
        return acc+=expenses
    },0)

    const dataInfo = expenses[expenses.length - 1].expenses

    const objArr = []

    Object.keys(dataInfo).forEach(key => objArr.push({
        name:key,
        value: dataInfo[key]
    }))

    const completedTasks = projectsData.reduce((acc,curr)=>{
    const {completed} = curr
    return acc+=completed
},0)

    const completedTasksPercentage = (completedTasks / 500) * 100

    return(
        <AppContext.Provider value={{expenses,monthlyEarnings,expensesTotal,objArr,projectsData,completedTasksPercentage}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, AppContext}