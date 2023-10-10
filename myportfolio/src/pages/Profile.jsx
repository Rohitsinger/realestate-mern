import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate()
  return (
<div>
<div className='w-[600px] shadow-2xl m-auto mt-12 '>
       <form action="" method="post" className='flex flex-col justify-center items-center m-4 p-4'>
       <h2 className='mb-4 text-2xl font-bold'>Profile</h2>
       <img className='w-16 rounded-full' src="https://images.pexels.com/photos/5774802/pexels-photo-5774802.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <input className='m-2 p-2 w-64 rounded-md outline-slate-200' type="text" placeholder='enter name'/>
        <input className='m-2 p-2 w-64 rounded-md outline-slate-200' type="text" placeholder='enter name'/>
        <input className='m-2 p-2 w-64 rounded-md outline-slate-200' type="text" placeholder='enter name'/>
        <button className='p-2 m-2 w-64 rounded-md bg-blue-800 mt-4 text-white'>Update</button>
        <button className='p-2 m-2 w-64 rounded-md bg-green-600 mt-4 text-white' onClick={() => navigate('/createlisting')}>Create Listing</button>
        <div className='text-red-700 font-semibold text-sm flex justify-between items-center gap-80 m-2 p-2 '>
          <span>Delete Account</span>
          <span onClick={()=>navigate('/signin')}>Sign In</span>
        </div>
        <span className='text-sm ml-8  mr-auto font-semibold text-red-700'>Something went wrong</span>
       </form>
    </div>
</div>
  )
}

export default Profile
