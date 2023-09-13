import './Todoitem.css'
import { FaRegTrashCan } from 'react-icons/fa6';

function Todoitem (props) {
    let { id, completed, label } = props
    return (
        <li className='todo-item'>
            <label>{ label }</label>
            <input 
                checked={ completed }
                onChange={ () => { 
                    props.toggleTaskCompleted(id)
                }}
                type="checkbox"
            />
            <button onClick={() => {props.deleteTodo(id)}}><FaRegTrashCan/></button>
        </li>
    )
}
export default Todoitem