import React from 'react'
import { useTodo } from '../contexts'

const Form = () => {

  const [input, setInput] = ('')
  const {addTodo} = useTodo()

  const submitHandler = (e) => {
    e.preventDefault()
    if(!input) return 
    addTodo({input, completed: false})
    setInput("")
  }

  return (
    <div className= 'h-auto w-[600px] text-center m-5'>
      <h1 className='text-3xl mb-8 font-black'>TODO</h1>
      <form onSubmit={submitHandler}>
        <div className=' h-[40px] rounded  flex justify-between bg-gray-500'>
          <input 
          type="text"
          placeholder='write task'
          className='pl-5'
          onChange={(e) => setInput(e.target.value)}
          value={input}
          />
          <button
          className='bg-green-600 rounded px-5'>
            Add</button>
        </div>
        
      </form>
      
    </div>
  )
}

export default Form
