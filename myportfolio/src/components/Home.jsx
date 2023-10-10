import React, { useEffect, useState } from 'react'


import { Link } from 'react-router-dom'

import RecentOfferCard from '../reuse/RecentOfferCard'
import PlaceforRentCard from '../reuse/PlaceforRentCard'
import PlaceforSalecard from '../reuse/PlaceforSalecard'
const Home = () => {

  return (
    <div>
    <div className='text-5xl p-10 m-5 font-semibold text-slate-900 '>
   <h1>Find your next <strong className='text-slate-600'>perfect</strong> </h1>
   <h1>place with ease</h1>
   <div className='text-base mt-4 text-slate-500'>
    <p>Buy Homes estate will help you find you home fast,easy and comfortable</p>
   <p>Our expert support are always available</p>
  <h5 className='mt-8 text-red-800'> <Link to="/search" >Let's Start now..</Link></h5>
    </div>
   </div>
<div class="overflow-x-auto ">
  <div class="min-w-screen min-h-screen flex items-center justify-center">
    <div class="w-full p-8 rounded-lg flex object-cover">
    <img src='https://images.pexels.com/photos/2098691/pexels-photo-2098691.jpeg?auto=compress&cs=tinysrgb&w=600'/>
      <img src='https://images.pexels.com/photos/2029715/pexels-photo-2029715.jpeg?auto=compress&cs=tinysrgb&w=600'/>
      <img src='https://images.pexels.com/photos/2346091/pexels-photo-2346091.jpeg?auto=compress&cs=tinysrgb&w=600'/>
    </div>
  </div>
</div>
     <div className='overflow-x-hidden '>
     <div className='w-full '>
     
          <RecentOfferCard/>
         
     </div>
     <div>
     <h2></h2>
          <PlaceforRentCard/>
     </div>
     <div>
    
          <PlaceforSalecard/>
     </div>
     </div>
    </div>

  
  )
}

export default Home
