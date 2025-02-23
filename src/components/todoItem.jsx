import React from 'react'
import { useTodo } from '../contexts'

const TodoItem = ({todo}) => {

  const { addTodo, updateTodo, deleteTodo, toogleComplete} = useTodo()

  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
 

  const editTodo = () => {
    updateTodo(todo.id, {...todo, todo: todoMsg})
    setIsTodoEditable(false)
  }
  const toogleCompleted = () => {
    toogleComplete(todo.id)
  }

  return (
    
    <div className='flex flex-col flex-wrap gap-5'>
      <div className='h-[60px] rounded  flex justify-between bg-orange-400 w-[600px] p-3'>

        <div className="left flex justify-between gap-3 items-center">
          <input type="checkbox" 
          checked={todo.completed}
          onChange={toogleCompleted}/>
          <input className='text-[18px]'
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}/>
        </div>

        <div className="right flex justify-center items-center gap-3">
          <button 
          className='bg-white p-1 px-2 rounded-[10px] text-[22px]'
          onClick={() => {
            if(todo.completed) return;

            if(isTodoEditable) {
              editTodo()
            } else setIsTodoEditable((prev) => !prev)
          }}
          disabled={todo.completed}
          >✍️</button>

          <button 
          className='bg-white p-1 px-2 rounded-[10px] text-[22px]'
          onClick={() => deleteTodo(todo.id)}
          >❌</button>
        </div>

      </div>
    </div>
    
  )
}

export default TodoItem
