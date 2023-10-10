import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Signup = () => {
    const navigate = useNavigate()
  return (
    <div>
                <div className='w-[600px] shadow-2xl m-auto mt-12 '>
       <form action="" method="post" className='flex flex-col justify-center items-center m-4 p-4'>
       <h2 className='mb-4 text-2xl font-bold'>Signup</h2>
      
        <input className='m-2 p-2 w-64 rounded-md outline-slate-200' name='username' type="text" placeholder='enter name'/>
        <input className='m-2 p-2 w-64 rounded-md outline-slate-200' name='email' type="text" placeholder='enter email'/>
        <input className='m-2 p-2 w-64 rounded-md outline-slate-200' name='password' type="text" placeholder='enter password'/>
        <button className='p-2 m-2 w-64 rounded-md bg-blue-800 mt-4 text-white'>Sign up</button>
        <button className='p-2 m-2 w-64 rounded-md bg-red-800 mt-4 text-white'>Continue with google</button>
        <div className=' font-semibold text-sm flex mr-auto gap-2 items-center  m-2 p-2 '>
          <span>Have an account :</span>
          <span className='text-red-700 cursor-pointer' onClick={()=>navigate('/signin')}>Sign In</span>
        </div>
       
       </form>
    </div>
    </div>
  )
}
