import React, { useState } from 'react'
import { useEffect } from 'react'
import './TodoList.css'

//
const  Task = ({task, index, onDelete, onComplete}) => {
    return(
        <div className='task' style={{textDecoration: task.completed ? 'line-through' : ''}}>
            {task.title} 
            <button style={{background: 'red'}} onClick={()=>{onDelete(index)}}>X</button>
            <button style={{background: 'yellow'}} onClick={()=>{onComplete(index)}}>Complete</button>
        </div>
    )    
}

const CreateTask = ({addTask}) => {
    const [inputValue, setInputValue] = useState('');
    
    const handleSubmit = (input) => {
        input.preventDefault();
        addTask(inputValue);
        setInputValue('');        
    };
    
    return(
        <form onSubmit={handleSubmit}>
             <input 
             type="text"
             placeholder='ADD new task'
             value={inputValue}
             onChange={(i)=> {setInputValue(i.target.value)}}
             />           
        </form>
    )    
}

const TodoList = () => {
    const [task, setTask] = useState([
        { id:1, title: 'Task 1', completed: false},
        { id:2, title: 'Task 2', completed: false},
        { id:3, title: 'Task 3', completed: true}
    ]);

    const [taskCount, setTaskCount] = useState(0);
    
    useEffect(()=>{
        setTaskCount(task.filter(task=> !task.completed).length)
    },[task]);

    const onDelete = (index) =>{
        const newTask = [...task];
        newTask.splice(index, 1);
        setTask(newTask);
    }
    
    const onComplete = (index) => {
        const newTask = [...task];
        newTask[index].completed = true 
        setTask(newTask);        
    }

    const addTask = (title)=>{
        const newTask = [...task, {title,completed: false}];
        setTask(newTask)    
    }
  return (
    <div className='todo-container'>
        <h1 className='title'>TODO LIST</h1>
        <div className='header'>Tareas Pendientes {taskCount}</div>
        <div className='task'>
            {task.map((task, index ) => (
                    <Task
                    key={task.id}
                    index={index}
                    task = {task}                    
                    onDelete = {onDelete}
                    onComplete = {onComplete}                    
                    />
                )
            )}            
        </div>
        <div className='create-task'>
            <CreateTask addTask={addTask}/>      
        </div>
    </div>
    
  )
}

export default TodoList