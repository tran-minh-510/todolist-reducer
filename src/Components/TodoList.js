import React, { useContext } from 'react'
import AddTodo from './AddTodo/AddTodo'
import ShowTodo from './ShowTodo/ShowTodo'
import { ThemeContext } from '../Context/Context'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function TodoList() {
    const store = useContext(ThemeContext)
    return (
        <>
            <AddTodo data={store} />
            <ShowTodo data={store} />
        </>
    )
}
