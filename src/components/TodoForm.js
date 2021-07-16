


import React from 'react'

function TodoForm({inputText, setInputText, todos, setTodos, setStatus}) {

    const inputTextHandlers=e=>{
        setInputText(e.target.value)
    }
    const submitTodoHandler=(e)=>{
        e.preventDefault();
        setTodos([
            ...todos, {text:inputText, compleated:false, id: Math.floor(Math.random()*10000)}
        ])
        setInputText("")

    }

    const statusHandler=(e)=>{
        setStatus(e.target.value)
    }
    return (
        <div id="container">
            
            <form onSubmit={submitTodoHandler}>
                <input type="text" className="todo-input" onChange={inputTextHandlers} value={inputText}/>
                <button className="todo-button" type="submit" >task</button>
            </form>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="All">All</option>
                    <option value="Compleated">Compleated</option>
                    <option value="Uncompleated">Uncompleated</option>
                </select>
            </div>
        </div>
    )
}

export default TodoForm
