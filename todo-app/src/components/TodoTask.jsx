import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import CurrentDateTime from '../utils/CurrentDateTime';
import AddItemBtn from './AddItem';
import AddItemInput from './AddItemInput';

const TodoTask = () => {
    const [addNewItem, setNewItem] = useState(false);

    let updateTodo = (e) => {
        console.log("!!", e.target.value);
    }

    return (
        <div>
            <b>todo</b>
            <br/>
            <CurrentDateTime/>
            <br/>
            {
            addNewItem ?
            <AddItemInput addItem={(e) => updateTodo(e)} clickToAdd={() => {alert("hi")} }/> : 
            <AddItemBtn addItem={() => setNewItem(true)}/> 
            }
        </div>
    )
}

TodoTask.propTypes = {

}

export default TodoTask
