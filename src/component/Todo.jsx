import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/ico.png'
import Todoitems from './Todoitems'
const Todo = () => {
const [todolist ,setTodoList]=useState(localStorage.getItem("todos")?
   JSON.parse(localStorage.getItem("todos")) : []
);

const inputRef = useRef();
const add = () =>{
   const inputText = inputRef.current.value.trim();
    if (inputRef === "") {
      return null;
    }

   const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
   }
   setTodoList((prev)=>[...prev , newTodo]);
   inputRef.current.value= "";
 }
const deletTodo = (id)=>{
   setTodoList((prvTodos)=>{
     return prvTodos.filter((todo) => todo.id !== id)
   })
}
const toggle = (id)=>{
   setTodoList((prevTodos)=>{
         return prevTodos.map((todo)=>{
            if(todo.id === id){
               return{...todo, isComplete: !todo.isComplete}
            }
            return todo;
         })
   })
}

useEffect(()=>{
   localStorage.setItem("todos", JSON.stringify(todolist));
},[todolist])

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
      {/* -----------------------title-------------- */}
      <div className=' flex items-center mt-7 gap-2'>
         <img className='w-10' src={todo_icon} alt="" />
          <h1 className='text-xl font-semibold'>Brainware Event Managment list</h1>
      </div>
      {/* -------------------------- */}
      <div className='flex items-center my-7 bg-slate-300 rounded-full'>
         <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-500' type="text" placeholder='Input Events & Date' />
         <button onClick={add } className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>Add+ 
           
         </button>
      </div>
      {/* ------------------------------ */}
      <div>
         {todolist.map((item, index)=>{
            return <Todoitems key={index} Text={item.text} id={item.id}
            isComplete={item.isComplete} deletTodo={deletTodo} toggle={toggle}/>
         })}
        
      </div>
      
    </div>
  )
}

export default Todo
