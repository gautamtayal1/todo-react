import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "complete odin project",
      completed: false
    }
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toogleComplete: (id) => {},
})

export const useTodo =  () => {
  return useContext(TodoContext)
}

export const todoProvider = TodoContext.Provider