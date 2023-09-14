
function TodoButtons(props) {
    let { todos, setTodos } = props 

    const addTodo = () => {
        const newTodo = document.getElementById('newTodo').value;
        if (newTodo === '') return
        const newTodos = [...todos, { id: localStorage.getItem('index'), label: newTodo, completed: false }]    //uses locally stored number to get index
        setTodos(newTodos)
        localStorage.setItem('index', parseInt(localStorage.getItem('index'))+1 || parseInt(todos.length)+1)    // adds number +1 for ever post created
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
        </>
    )
}

export default TodoButtons