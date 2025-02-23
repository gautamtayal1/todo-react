import { useEffect, useState } from "react"
import Form from "./components/form"
import TodoItem from "./components/todoItem"
import { TodoProvider } from "./contexts"

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [
      ...prev, {id: Date.now(), ...todo}
    ])
  }

  const updateTodo = (id, updatedTodo) => {
    setTodos((prev) => 
      prev.map((todo) => 
        todo.id === id ? updatedTodo : todo
      )
    )
  }

  const deleteTodo = (id) => {
    setTodos((prev) => 
      prev.filter((todo) => todo.id !== id)
    )
  }

  const toogleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => 
      prevTodo.id === id 
    ? {...prevTodo, completed: !prevTodo.completed}
    : prevTodo))
    }

    useEffect(() => {
      const todos = JSON.parse(localStorage.getItem("todos"))

      if (todos && todos.length > 0) {
        setTodos(todos)
      }
    }, [])

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    return(
      <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toogleComplete}}>
          <div className=" text-white flex flex-col items-center h-[100vh] mt-20">
            <Form />
            <TodoItem />
          </div>
      </TodoProvider>
      
    )
  }

export default App
