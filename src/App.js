
import { useState , useEffect } from 'react';
import './App.css';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App() {

  const [inputText , setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(()=>{
    filterHandler()
  },[todos, status])

  const filterHandler=()=>{
    switch(status){
      case 'Compleated':
        setFilteredTodos(todos.filter((item)=>(item.compleated == true)));
        break;
      case 'Uncompleated':
        setFilteredTodos(todos.filter((item)=>(item.compleated == false)));
        break;
      default:
        setFilteredTodos(todos)  
        break;
    }
  }

  return (
    <div className="App">
      <header>
      <h1 id="todo-heading">Shubham's Todos</h1>
      </header>
      
      <TodoForm 
      todos={todos}
      setTodos={setTodos}
      inputText={inputText}
      setStatus={setStatus}
      setInputText={setInputText}/>


      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
