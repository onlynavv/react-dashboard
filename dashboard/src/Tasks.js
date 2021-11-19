import React from 'react'
import { useGlobalContext } from './context';
import './Tasks.css'


const Tasks = () => {

    const { projectsData } = useGlobalContext()

    return (
        <>
        <h4 className="task-heading">Projects</h4>
        <div className="task-container">
            <>
                {projectsData.map((item,index)=>{
                    const {name, completed, color} = item
                    return(
                        <div className="projects-wrapper" key={index}>
                            <div className="projects-info">
                                <h5>{name}</h5>
                                <h5>{completed} %</h5>
                            </div>

                            <div class="progress">
                                <div role="progressbar" class={`progress-bar ${color}`} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width:`${completed}%`}}>
                                </div>
                            </div>
                        </div>   
                    )
                })}
            </>
        </div>
        </>
    )
}

export default Tasks
