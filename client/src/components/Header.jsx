
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import {FaBars} from 'react-icons/fa'
// import {FaTimes} from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { useSelector } from 'react-redux'
const Header = () => {
  const { currentUser } = useSelector(state => state.user)
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

const handleSubmit = (e) => {
  e.preventDefault();
     const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams);
    urlParams.set('searchTerm',searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`)
  
}

useEffect(() => {
  const urlParams = new URLSearchParams(location.search);
 const searchTermUrl = urlParams.get('searchTerm');
 if(searchTermUrl){
  setSearchTerm(searchTermUrl);
 }
}, [location.search])

  return (
    <header className='bg-slate-200 shadow-md '>
      <div className='flex  justify-between items-center mx-auto max-w-6xl p-3  inset-x-0'>
        <label className='font-bold text-xl text-slate-500 ml-4'>BuyHomes</label>
        <form onSubmit={handleSubmit} action="" className='flex items-center  bg-slate-50 rounded-lg '>
          <input type="text" placeholder='search...' className='bg-slate-50 p-3 rounded-lg w-24 md:w-64 outline-none' onChange={(e)=>setSearchTerm(e.target.value)} value={searchTerm}/>
          <button> <AiOutlineSearch className='text-slate-600' /></button>
         
        </form>
        <ul className='flex gap-4 font-semibold' onClick={() => setIsMobile(false)}>
          <Link to='/' className='hover:text-slate-500 '><li >Home</li></Link>
          <Link to='/about' className='hover:text-slate-500' ><li>About</li></Link>
          <div className='w-6 flex items-center justify-center'>
            {currentUser ? (
              <img className="w-full h-full rounded-full " onClick={() => navigate('/profile')} src={currentUser.data.avatar} alt="" />
            ) : (<Link to='/signin' className='hover:text-slate-500' ><li>Signin</li></Link>)}
          </div>

        </ul>

      </div>

    </header>
  )
}

export default Header
