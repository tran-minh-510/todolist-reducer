import React, { useState } from 'react'
import { handleChecked } from '../../Reducer/action';
import { editTodo, deleteTodo } from '../../Reducer/action'
import "./ShowTodo.scss";

export default function ShowTodo(props) {
    const { store: listJobs, dispatch } = props.data
    const [IDJobEdit, setIDJobEdit] = useState(-1)
    const [valueInputEdit, setValueInputEdit] = useState('')
    const handleJobEdit = (e, id, content) => {
        if (e.target.closest(".edit")) {
            if (IDJobEdit !== id) {
                // dispatch(editTodo({
                //     id, valueInputEdit
                // }))
                setIDJobEdit(prev => {
                    if (prev !== id) return id;
                    return -1;
                });
                setValueInputEdit(content)
            } else {
                dispatch(editTodo({
                    id, valueInputEdit
                }))
                setIDJobEdit(prev => {
                    if (prev === id) return -1;
                    return id;
                });
            }
        }
    }
    const handleEditChecked = (e, id, isChecked) => {
        if (e.target.closest(".li-edit")) {
            if (!e.target.closest(".edit") && !e.target.closest(".input-edit")) {
                dispatch(handleChecked({ id, isChecked }))
                if (IDJobEdit === id) {
                    setIDJobEdit(-1);
                }
            }
        }
    }
    const deleteJobs = (e, id) => {
        if (e.target.closest(".delete")) {
            dispatch(deleteTodo(id))
        }
    }
    return (
        <>
            <div className="my-3 border-bottom w-25">
                <h3 className="float-start">Jobs list :</h3>
            </div>
            <div className="my-3">
                <ul className="list-group">
                    {listJobs.length > 0 ? listJobs.map(({ id, content, isChecked }) => {
                        return (
                            <li className={`list-group-item ${isChecked ? "checked" : ""} li-edit`} key={id} onClick={(e) => handleEditChecked(e, id, isChecked)}>
                                {IDJobEdit === id ? (
                                    <input
                                        type="text"
                                        class="form-control w-50 input-edit"
                                        placeholder="Job..."
                                        value={valueInputEdit}
                                        onChange={(e) => setValueInputEdit(e.target.value)}
                                    />
                                ) : (
                                    content
                                )}
                                <div className="float-end cusor-poiter ms-2">
                                    <button
                                        type="button"
                                        className="btn btn-primary mx-2 edit"
                                        disabled={isChecked}
                                        onClick={(e) => handleJobEdit(e, id, content)}
                                    >
                                        {IDJobEdit === id ? 'Save' : 'Edit'}
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger delete"
                                        onClick={(e) => deleteJobs(e, id)}
                                    >
                                        Delete
                                    </button>
                                </div></li>
                        )
                    }) : <h3>Không có công việc nào</h3>}
                </ul>
            </div>
        </>
    )
}
