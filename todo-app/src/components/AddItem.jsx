import React from 'react'

export default function AddItemBtn({addItem}) {
    return (
        <button onClick={addItem}>
            <span>&#10010;</span> Add item 
        </button>
    )
}
