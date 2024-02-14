import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import RecentOfferCard from '../reuse/RecentOfferCard'
import PlaceforRentCard from '../reuse/PlaceforRentCard'
import PlaceforSalecard from '../reuse/PlaceforSalecard'

import {AiOutlineDoubleLeft} from 'react-icons/ai'
import {AiOutlineDoubleRight} from 'react-icons/ai'
import axios from 'axios'
const Home = () => {
const [offerListings,setOfferListings] = useState([])
const [rentListings,setRentListings] = useState([])
const [saleListings,setSaleListings] = useState([])
useEffect(()=>{
  const fetchListings = async() => {
    try {
        const getListingsThoughOffer = await axios.get(`/api/listing/getCompleteLists?offer=true&limit=4`)
        setOfferListings(getListingsThoughOffer.data);
        fetchRentListings()
    } catch (error) {
      console.log(error);
    }
  } 
  fetchListings()
},[])

  const fetchRentListings = async() => {
    try {
        const getListingsThoughOffer = await axios.get(`/api/listing/getCompleteLists?type=rent&limit=4`)
        setRentListings(getListingsThoughOffer.data);
        fetchSaleListings()
    } catch (error) {
      console.log(error);
    }
  } 


  const fetchSaleListings = async() => {
    try {
        const getListingsThoughOffer = await axios.get(`/api/listing/getCompleteLists?type=rent&limit=4`)
        setSaleListings(getListingsThoughOffer.data);
    } catch (error) {
      console.log(error);
    }
  } 

  const slides = [
    {
    
      url:"https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
    
      url:"https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
   
      url:"https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
   
      url:"https://images.pexels.com/photos/2346091/pexels-photo-2346091.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
   
      url:"https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
  
      url:"https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      url:"https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
  ]
  const [currentIndex,setCurrentIndex] = useState(3)
  const prevSlide = () =>{
    let isFirstImage = currentIndex === 0;
    let newIndex = isFirstImage ? slides.length-1 : currentIndex-1
     setCurrentIndex(newIndex)
  }
  const nextSlide = () =>{
    let isLastImage = currentIndex === slides.length-1;
    let newIndex = isLastImage ? 0:  currentIndex+1
     setCurrentIndex(newIndex)
  }

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
<div className=' max-w-[1480px] h-[480px] m-auto py-16 px-4 w-full flex justify-between  group duration-200  relative'>
 <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className='w-full h-full flex rounded-4xl bg-center overflow-hidden bg-contain duration-500 '></div>
<div className='absolute  hidden group-hover:block top-[50%] translate-x-0 translate-y-[50%] left-5  text-white text-2xl rounded-full p-2 bg-black/20  cursor-pointer '>
      <AiOutlineDoubleLeft onClick={()=>prevSlide()}/>
</div>
  <div className='absolute  hidden  group-hover:block  top-[50%] translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20  cursor-pointer text-white '>
     <AiOutlineDoubleRight onClick={()=>nextSlide()}/>
  </div>

</div>

{/* cards display for rents sale and offers */}
     <div className='overflow-x-hidden '>
     <div className='w-full '>
     
          <RecentOfferCard offerListings={offerListings}/>
         
     </div>
     <div>
     <h2></h2>
          <PlaceforRentCard rentListings={rentListings}/>
     </div>
     <div>
    
          <PlaceforSalecard saleListings={saleListings}/>
     </div>
     </div>
    </div>

  
  )
}

export default Home
