import React, { useEffect, useState } from "react";
import axios from 'axios';

const TodoForm = ({ onAdd }) => {
    const [ task, setTask ] = useState('');

    const addTodo = async() => {
        try {
            const response = await axios.get('http://localhost:5000/todos', { task });
            onAdd(response.data);
            
            setTask(''); 
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <input type="text" value={task} onChange={(e) => 
                setTask(e.target.value)} />
            <button onClick={addTodo}> + task </button>
        </div>
    );
};
export default TodoForm;