import React from 'react'
import { useSelector } from 'react-redux'
import {Taskitem} from './Taskitem'

const Tasklist = () => {
    const task = useSelector(state => state.task);
    console.log(task);
    
  return (
    <ul>
      {task.map(task => (
        <Taskitem key={task.id} task={task} />
      ))}
    </ul>
  )
}

export default Tasklist
