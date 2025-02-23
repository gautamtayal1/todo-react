import React from 'react'

const Form = () => {

  return (
    <div className= 'h-[50vh] w-[60vw] text-center p-3'>
      <h1 className='text-3xl mb-8'>TODO</h1>
      <form>
        <div className=' h-[40px] w-[100%] rounded  flex justify-between bg-gray-500'>
          <input 
          type="text"
          placeholder='write task'
          className='pl-5'
          />
          <button
          className='bg-green-500 rounded px-5'>
            Add</button>
        </div>
        
      </form>
      
    </div>
  )
}

export default Form
