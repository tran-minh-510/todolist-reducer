import { ADD_JOB, FILTER_JOB, HANDLE_CHECKED, EDIT_JOB, DELETE_JOB } from "./typesAction"

const addTodo = (payload) => {
    return {
        type: ADD_JOB,
        payload
    }
}

const filterTodo = (payload) => {
    return {
        type: FILTER_JOB,
        payload
    }
}

const handleChecked = (payload) => {
    return {
        type: HANDLE_CHECKED,
        payload
    }
}

const editTodo = (payload) => {
    return {
        type: EDIT_JOB,
        payload
    }
}

const deleteTodo = (payload) => {
    return {
        type: DELETE_JOB,
        payload
    }
}
export { addTodo, filterTodo, handleChecked, editTodo, deleteTodo }