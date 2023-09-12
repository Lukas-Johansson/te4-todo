import './Todoitem.css'

function Todoitem (props) {
    let { id, done, label } = props

    return (
        <li className='todo-item'>
            <label>{ label }</label>
            <input 
                checked={ done }
                onChange={ () => { 
                    props.handleTextBoxChange(id)
                }}
                type="checkbox"
            />
        </li>
    )
}

export default Todoitem