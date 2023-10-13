import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import {ImSpinner3} from 'react-icons/im'
export const Signin = () => {
  const [usersignup,setUserSignUp] = useState({})
 
  const [loading,setLoading] = useState(null)
    const navigate = useNavigate();

    const handleChange = (e) => {
       setUserSignUp({
      ...usersignup,
      [e.target.name] : e.target.value
     })
    }
    
  
    //submit form
    const handleSubmit = async(e)=>{
   e.preventDefault();
   try {
    setLoading(true)

    const response = await axios.post('/api/auth/signin',usersignup);
    setLoading(false)
    toast('😍 User Signedin Successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  navigate('/')

   } catch (error) {
    console.log(error);
   }

    }
  return (
    <div>
                <div className='w-[600px] shadow-2xl m-auto mt-12 '>
       <form className='flex flex-col justify-center items-center m-4 p-4' onSubmit={handleSubmit}>
       <h2 className='mb-4 text-2xl font-bold'>Signin</h2>
        <input className='m-2 p-2 w-full rounded-md outline-slate-200'name='email' required onChange={handleChange} type="text" id='email' placeholder='enter email'/>
        <input className='m-2 p-2 w-full rounded-md outline-slate-200' name='password' required type='password' onChange={handleChange} id='password' placeholder='enter password'/>
        <button className='p-2 m-2 w-full rounded-md bg-slate-800 mt-4 text-white' >{loading? <ImSpinner3 className='mx-auto'/>:"Signin"}</button>
        <button className='p-2 m-2 w-full rounded-md bg-green-600 mt-4 text-white'>Create Listing</button>
        <div className=' font-semibold text-sm flex mr-auto gap-2 items-center  m-2 p-2 '>
          <span>Have an account :</span>
          <span className='text-red-700 cursor-pointer' onClick={()=>navigate('/signin')}>Sign In</span>
        </div>
       
       </form>
    </div>
    </div>
  )
}

       
       
