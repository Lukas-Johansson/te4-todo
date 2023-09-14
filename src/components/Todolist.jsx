import { useEffect, useState } from 'react'
import './Todoitem.css'
import Todoitem from './Todoitem'

function Todolist() {

    const [todos, setTodos] = useState(() => {
        return JSON.parse(localStorage.getItem('todos')) || []
    });

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
        [todos]
    }, [todos]);

    const addTodo = () => {
        const newTodo = document.getElementById('newTodo').value;
        if (newTodo === '') return
        const newTodos = [...todos, { id: localStorage.getItem('index'), label: newTodo, completed: false }]    //uses locally stored number to get index
        setTodos(newTodos)
        localStorage.setItem('index', parseInt(localStorage.getItem('index'))+1 || parseInt(todos.length)+1)    // adds number +1 for ever post created
    }

    const toggleTaskCompleted = (id) => {
        console.log(id)
        const newTodos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
        setTodos(newTodos)
    };
    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

    const deleteAll = () => {
        setTodos([]); 
        localStorage.setItem('index', 0) // create number that rises every added item to use for items id / resets it to zero 
    }

    const checkall = () => {
        const newTodos = todos.map(todo => todo.completed === false ? { ...todo, completed: !todo.completed } : todo)
        setTodos(newTodos)
    }

    const uncheckall = () => {
        const newTodos = todos.map(todo => todo.completed === true ? { ...todo, completed: !todo.completed } : todo)
        setTodos(newTodos)
    }

    const deleteSelected = () => {
        const newTodos = todos.filter (todo => todo.completed === true ? null : todo)
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
        <div className='buttons'>
        <input id="newTodo" type="text" placeholder='skriv in en sak här'/>
        <button className='todobutton' onClick={() => {addTodo() }}>lägg till</button>

        <button className='todobutton' onClick={() => {deleteAll() }}>Ta bort allt</button>

        <button className='todobutton' onClick={() => {checkall() }}>Checka alla</button>

        <button className='todobutton' onClick={() => {uncheckall() }}>Unchecka alla</button>

        <button className='todobutton' onClick={() => {deleteSelected () }}>Deleta checkade</button>
        </div>

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