import React from 'react'
import Task from './Task';

const TaskList = ({ tasks, removeTask, doneTask }) => {
    
  return (
    <div className="">
        <h3 className='font-bold font-serif text-xl mb-3'>
          Task Lists (Total : { tasks.length }, 
          Done { tasks.filter( el => el.isDone).length })
        </h3>
        { tasks.map(el => {
            return <Task doneTask={doneTask} removeTask={removeTask} key={el.id} job={el} />
        })}
    </div>
  )
}

export default TaskList
