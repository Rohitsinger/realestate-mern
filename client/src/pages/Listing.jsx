import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../reuse/Loader';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import { FaLocationDot } from "react-icons/fa6";
import { MdBed } from "react-icons/md";
import { FaBath,FaParking,FaChair } from "react-icons/fa";


const Listing = () => {

    const [singleUser,setSingleUser] = useState([])
      const [currentIndex,setCurrentIndex] = useState()
    const [err,setErr] = useState(false)
    const [loading,setLoading] = useState(false)
    const {listingId} = useParams()
    useEffect(() => {
     try {
      setLoading(true)
      const fetchisting = async() =>{
        const getUser = await axios.get(`/api/listing/getSingleList/${listingId}`)
        setSingleUser(getUser.data);
       }
       fetchisting()
       setLoading(false)
     } catch (error) {
      setErr(true)
     }
       }, [listingId,loading])
       console.log(singleUser);

     
       const prevSlide = () =>{
        //  let isFirstImage = currentIndex === 0;
        //  let newIndex = isFirstImage ? slides.length-1 : currentIndex-1
        //   setCurrentIndex(newIndex)
       }
       const nextSlide = () =>{
        //  let isLastImage = currentIndex === slides.length-1;
        //  let newIndex = isLastImage ? 0:  currentIndex+1
        //   setCurrentIndex(newIndex)
       }

    

  return (

     <div className="flex max-w-2xl h-[100dvh]  flex-col items-center rounded-md border md:mx-auto mt-8 ">
      <div className="h-full w-full md:h-[400px] md:w-[670px] group:">
      {loading?<p className='text-center my-7'>Loading...</p>:""}
   
       
        <img src={singleUser.imageUrls} alt="Laptop" className="h-full w-full rounded-md object-cover"/>
   
        <div className='absolute  hidden group-hover:block top-[50%] translate-x-0 translate-y-[50%] left-5  text-white text-2xl rounded-full p-2 bg-black/20  cursor-pointer '>
      <AiOutlineDoubleLeft onClick={()=>prevSlide()}/>
</div>
  <div className='absolute  hidden  group-hover:block  top-[50%] translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20  cursor-pointer text-white '>
     <AiOutlineDoubleRight onClick={()=>nextSlide()}/>
  </div>
      </div>
      <div>
      <div className='flex mt-2 p-2 gap-1' >
         <FaLocationDot className='mt-[5px]'/> 
         <h1 className="inline-flex items-center text-lg font-semibold ">
            {singleUser.address}
          </h1>
       </div>
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            {singleUser.name}
          </h1>
          {singleUser.type==="rent" ? <span className="ml-8 text-lg font-bold text-red-800">Rent</span>: <span className="font-medium text-green-500">Sale</span>} 
          <p className="mt-3 text-sm text-gray-600">
          {singleUser.description}
          </p>
          <div className="mt-4 flex ">
            <span className="mb-2  mr-2 flex gap-1 rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
         
           <FaBath className='mt-[2px] '/>
            {singleUser.bathrooms} Bathrooms
            </span>
            <span className="mb-2 mr-4 flex rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            <MdBed className='mt-[2px] mr-1'/>
            {singleUser.bedrooms} Bedrooms
            </span>
            <span className="mb-2 mr-2 flex rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            ${singleUser.regularPrice} Price
            </span>
            <span className="mb-2 mr-2 flex rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            <FaParking className='mt-[2px] mr-1'/>
            {singleUser.parking===true? "Parking":"No Parking"} 
            </span>
            <span className="mb-2 mr-2 flex rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            <FaChair className='mt-[2px] mr-1'/>
            {singleUser.furnished===true?`Furnished`:"Not Furnished"}
            </span>
          </div>
          <div className="mt-3 flex items-center space-x-2">
           <span className="flex flex-col">
            </span>
          </div>
        </div>
      </div>
    </div>
 
 
  )
}

export default Listing
