import React, { useState } from 'react'
import Heading from './components/Heading'
import CreateText from './components/CreateText'
import TaskList from './components/TaskList'
import Counter from './components/Counter'

const App = () => {
  const [tasks, setTask ] = useState([
    { id: 3, task: 'a Lorem ipsum dolor sit amet.', isDone: true },
    { id: 4, task: 'b Lorem ipsum dolor sit amet.', isDone: false },
    { id: 5, task: 'c Lorem ipsum dolor sit amet.', isDone: true },
    { id: 6, task: 'd Lorem ipsum dolor sit amet.', isDone: false },
]);

const addTask = (newTask)=>{
    setTask([...tasks, newTask]);
}

const removeTask = (id)=>{
  setTask(tasks.filter(task => task.id !== id));
}

const doneTask = (id)=>{
  setTask(tasks.map(el => el.id === id ? { ...el, isDone: !el.isDone }: el));
}

  return (
    <div className='p-10'>
      {/* <Counter /> */}
      <Heading />
      <CreateText addTask={addTask} />
      <TaskList doneTask={doneTask} removeTask={removeTask} tasks={tasks}  />
    </div>
  )
}

export default App