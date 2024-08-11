import React from 'react'
import tick from'../assets/checked.png'
import not_tick from'../assets/unchecked.png'
import delet from '../assets/delet.jpg'
const Todoitems = ({Text , id ,isComplete ,deletTodo,toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>

      <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer gap-2'>
         <img className='w-7 ' src={isComplete ? tick : not_tick} alt="" />
         <p className={`text-slate-800 ml-4 text-[17px] decoration-slate-600 ${isComplete ? "line-through" : ""}`}>{Text}</p>
      </div>
       
      <img onClick={()=>{deletTodo(id)}} className='w-5 cursor-pointer' src={delet} alt="" />


    </div>
  )
}

export default Todoitems
