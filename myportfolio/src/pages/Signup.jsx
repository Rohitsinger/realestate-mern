import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify';

export const Signup = () => {
  const [usersignup,setUserSignUp] = useState({})
  const [error,setError] = useState(null)
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
    const data = await axios.post('/api/auth/signup',usersignup);

  setLoading(false)
  toast('🦄 User Created Successfully!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

  navigate('/signin')

   } catch (error) {
    console.log(error);
   }

    }
  return (
    <div>
                <div className='w-[600px] shadow-2xl m-auto mt-12 '>
       <form className='flex flex-col justify-center items-center m-4 p-4' onSubmit={handleSubmit}>
       <h2 className='mb-4 text-2xl font-bold'>Signup</h2>
      
        <input className='m-2 p-2 w-full rounded-md outline-slate-200' onChange={handleChange} name='username' id='username' type="text" placeholder='enter name'/>
        <input className='m-2 p-2 w-full rounded-md outline-slate-200'name='email'  onChange={handleChange} type="text" id='email' placeholder='enter email'/>
        <input className='m-2 p-2 w-full rounded-md outline-slate-200' name='password' type='password' onChange={handleChange} id='password' placeholder='enter password'/>
        <button style={{backgroundColor:"slategray"}} className='p-2 m-2 w-full rounded-md  bg-slate-700 mt-4 text-white' disabled={loading} >{loading? <ImSpinner3 className='mx-auto'/>:"Signup"}</button>
        <button className='p-2 m-2 w-full rounded-md bg-red-800 mt-4 text-white'>Continue with google</button>
        <div className=' font-semibold text-sm flex mr-auto gap-2 items-center  m-2 p-2 '>
          <span>Have an account :</span>
          <span className='text-red-700 cursor-pointer' onClick={()=>navigate('/signin')}>Sign In</span>
        </div>
       
       </form>
       {error && <p className='mt-5 text-red-600'>{error}</p>}
    </div>
    </div>
  )
}
