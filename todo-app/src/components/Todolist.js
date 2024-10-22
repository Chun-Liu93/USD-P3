import React, {useState} from 'react';

const Todolist = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    const addTask = () => {
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask('')
        }
    };

    const deleteTask = () => {
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    // const editTask = () => {
    //     if (task.)
    // }

    return (
        <div>
            <h1> To Do List </h1>
            <input
                type = 'text'
                value = {task}
                onChange = {(e) => setTask(e.target.value)}
                placeholder = 'Add a new task'
            />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )

};

export default Todolist;
