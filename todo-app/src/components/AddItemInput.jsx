import React from 'react';

const AddItemInput = ({addItem, clickToAdd}) => {
    return (
        <div>
            <input type="text" onChange={addItem}/>
            <span onClick={clickToAdd}>&#10010;</span>
        </div>
    )
}

export default AddItemInput
