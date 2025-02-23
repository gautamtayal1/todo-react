import React from 'react'

const TodoItem = () => {
  return (
    <div className='flex flex-col flex-wrap gap-5'>
      <div className='h-[60px] rounded  flex justify-between bg-orange-400 w-[600px] p-3'>
        <div className="left flex justify-between gap-3 items-center">
          <input type="checkbox" />
          <span className='text-[18px]'>Learn DSA</span>
        </div>
        <div className="right flex justify-center items-center gap-3">
          <button className='bg-white p-1 px-2 rounded-[10px] text-[22px]'>✍️</button>
          <button className='bg-white p-1 px-2 rounded-[10px] text-[22px]'>❌</button>
        </div>
      </div>
    </div>
    
  )
}

export default TodoItem
