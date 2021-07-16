


import React from 'react'

const Todo=({text,  todo, todos, setTodos})=> {
    
    const deleteHandler=()=>{
        
        
        setTodos(todos.filter((el) => (el.id !== todo.id)));
        
    };

    const compleateHandler=()=>{
        setTodos(todos.map((item)=>{
            if(item.id === todo.id){
                return{
                    ...item, compleated: !item.compleated
                }
            }
            return item;
        }))
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.compleated ? 'compleated' : ''}`}>{text}</li>
            <button className="compleate-button" onClick={compleateHandler}>Compleate</button>
            <button className="trash-button" onClick={deleteHandler}>Trash</button>
        </div>
    )
}



export default Todo
