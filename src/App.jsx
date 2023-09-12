import './App.css'
import Todoitem from './components/Todoitem'

function App() {
  const todoItems = [
    { id: 0, label: 'Köp mjölk', done: true },
    { id: 1, label: 'Köp ägg', done: false },
  ]

  const toogleTaskCompleted = (index) => {
    console.log ('toogleTaskCompleted', index)
  }

  return (
    <div className="container">
      <h1>Vad du vill göra</h1>
      <ul className='todo-list'>
      { todoItems.map((todo, index) => 
       <Todoitem 
        key={index} 
        label={todo.label} 
        done={ todo.done }
        toogleTaskCompleted = { toogleTaskCompleted}
        />
      )} 
      </ul>
    </div>  
  )
}

export default App
