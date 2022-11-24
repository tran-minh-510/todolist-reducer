import React, { useState } from "react";
import { addTodo } from '../../Reducer/action'

export default function AddTodo(props) {
    const { dispatch } = props.data
    const [valueInput, setInput] = useState("");
    const handleAddTodo = (e) => {
        e.preventDefault()
        dispatch(addTodo(valueInput))
        setInput('')
    }
    return (
        <div className="w-25">
            <h2>TodoList</h2>
            <form>
                <div className="d-flex">
                    <input
                        type="text"
                        className="form-control mx-3"
                        value={valueInput}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary" onClick={(e) => { handleAddTodo(e) }}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
