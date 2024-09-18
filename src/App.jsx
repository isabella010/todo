import { useEffect, useState } from "react"
import "./styles.css"
import { TodoForm } from "./TodoForm"
import { TodoList } from "./TodoList"

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue === null) return []
    return JSON.parse(localValue)
  }) //passing the function is so we can get the value from local storage

  useEffect(() => { //run this effect every time the properties in array change
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title){
    setTodos((currentTodos) => {
      return[
        ...currentTodos,
        {id: crypto.randomUUID(), title, completed: false}
      ]
    })
  }

  function toggleTodo (id, completed){
    setTodos(currentTodos =>{
      return currentTodos.map(todo => {
        if(todo.id === id){
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo (id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !==id)
    })
  }

  return(
    <>
    <h1>Tick It Off</h1>
      <TodoForm addTodo={addTodo}/>
      <h1 className="header">To Do List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}