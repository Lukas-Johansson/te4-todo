import { useEffect, useState } from 'react'
import './Todoitem.css'
import Todoitem from './Todoitem'
import TodoButtons from './TodoButtons'


function Todolist() {

    const [todos, setTodos] = useState(() => {
        return JSON.parse(localStorage.getItem('todos')) || []
    });

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
        [todos]
    }, [todos]);

    const toggleTaskCompleted = (id) => {
        console.log(id)
        const newTodos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
        setTodos(newTodos)
    };
    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

    const editTodo = (id) =>{
        const newTodos = todos.map(todo => {
            console.log("Edit")
            let editText
            if(todo.id === id){
                editText = prompt("New text", "Default")
            }
            return todo.id === id ? { ...todo, label: editText} : todo
        })
        setTodos(newTodos)
    }

    return (
        <>
         <TodoButtons
                todos = {todos}
                setTodos = {setTodos} 
            />
        <ul className='todo-list'>
            {todos.map((todo, index) =>
                <Todoitem
                    key={index}
                    id={todo.id}
                    label={todo.label}
                    completed={todo.completed}
                    toggleTaskCompleted={toggleTaskCompleted}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                />
            )}
        </ul>
        </>
    )
}

export default Todolist