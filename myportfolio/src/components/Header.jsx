
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import {FaBars} from 'react-icons/fa'
// import {FaTimes} from 'react-icons/fa'
import {AiOutlineSearch} from 'react-icons/ai'
const Header = () => {
  const [ismobile,setIsMobile] = useState(true)
  const navigate = useNavigate()
  return (
    <header className='bg-slate-200 shadow-md '>
      <div className='flex  justify-between items-center mx-auto max-w-6xl p-3  inset-x-0' >

     <label className='font-bold text-xl text-slate-500 ml-4'>BuyHomes</label>

        <form action="" className='flex items-center  bg-slate-50 rounded-lg '>
          <input type="text" placeholder='search...' className='bg-slate-50 p-3 rounded-lg w-24 md:w-64 outline-none' />
          <AiOutlineSearch className='text-slate-600'/>
        </form>
       
        <ul className='flex gap-4 font-semibold' onClick={()=>setIsMobile(false)}>
         <Link to='/' className='hover:text-slate-500 '><li >Home</li></Link>
   
         <Link to='/about' className='hover:text-slate-500' ><li>About</li></Link>
        <div className='w-6 flex items-center justify-center'>
          <img  className="w-full h-full rounded-full " onClick={()=>navigate('/profile')} src="https://images.pexels.com/photos/5774802/pexels-photo-5774802.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        </ul>
        {/* <button className='mobile_menu_icon' onClick={()=>setIsMobile(!ismobile)}>{ismobile?<FaTimes/>:<FaBars/>} </button> */}
        </div>
    
    </header>
  )
}

export default Header
