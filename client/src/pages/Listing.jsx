import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Listing = () => {
    const [singleUser,setSingleUser] = useState({})
    const [err,setErr] = useState(false)
    const [loading,setLoading] = useState(false)
    const {listingId} = useParams()
    useEffect(() => {
     try {
      const fetchisting = async() =>{
        const getUser = await axios.get(`/api/listing/getSingleList/${listingId}`)
        setSingleUser(getUser.data);
       }
       fetchisting()
     } catch (error) {
      setErr(true)
     }
       }, [])
       console.log(singleUser);
  return (
   
    <div className="flex max-w-2xl flex-col items-center rounded-md border md:mx-auto mt-8 ">
      <div className="h-full w-full md:h-[400px] md:w-[670px]">
        <img
          src={singleUser.imageUrls}
          alt="Laptop"
          className="h-full w-full rounded-md object-cover"
        />
      </div>
      <div>
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            {singleUser.name}
          </h1>
          {singleUser.type==="rent" ? <span className="ml-8 text-lg font-bold text-red-800">Rent</span>: <span className="font-medium text-green-500">Sale</span>} 
          <p className="mt-3 text-sm text-gray-600">
          {singleUser.description}
          </p>
          <div className="mt-4">
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            {singleUser.bathrooms} Bathrooms
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            {singleUser.bedrooms} Bedrooms
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            ${singleUser.regularPrice} Price
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
