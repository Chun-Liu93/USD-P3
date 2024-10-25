import React, { useState } from 'react';

const Todolist = () => {
    const [suggestions, setsuggestions] = useState('');
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    //! Filter tasks based on the suggestions
    //! filter() creates a new array with only the elements that meet the condition, 
    //! which is useful for deleting, updating, or filtering tasks for a search bar.
    const filteredTasks = tasks.filter(currentTask =>
        currentTask.toLowerCase().includes(suggestions.toLowerCase())
    );

    const addTask = () => {
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask(''); // Clear the input after adding
            setsuggestions(''); // Clear search input after adding a task
        }
    };

    const deleteTask = (indexToRemove) => {
        const updatedTasks = tasks.filter((_, index) => index !== indexToRemove);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h1>To Do List</h1>
            <input
                type='text'
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder='Add a new task'
            />
            <button onClick={addTask}>Add Task</button>
            <input
                type='text'
                value={suggestions}
                onChange={(e) => setsuggestions(e.target.value)}
                placeholder='Search Tasks'
                style={{ marginTop: '20px', marginBottom: '20px' }}
            />
            <ul>
                {/* Render filtered tasks based on search suggestions */}
                {(suggestions ? filteredTasks : tasks).map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todolist;
