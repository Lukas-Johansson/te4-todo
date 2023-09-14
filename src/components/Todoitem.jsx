import './Todoitem.css'
import { BsTrashFill } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';

function Todoitem (props) {
    let { id, completed, label } = props
    return (
        <li className='todo-item'>
            <div>
            <input className='checkbox'
                    checked={ completed }
                    onChange={ () => { 
                        props.toggleTaskCompleted(id)
                    }}
                    type="checkbox"
                />
                <label className='text'>{ label }</label>
            </div>
            <div>
                <button className='edit' onClick={() => {props.editTodo(id)}}><AiFillEdit/></button> 
                <button onClick={() => {props.deleteTodo(id)}}><BsTrashFill/></button>                 
            </div>
        </li>
    )
}

export default Todoitem