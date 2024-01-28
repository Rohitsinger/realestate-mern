import {IoLocationSharp} from 'react-icons/io5'
import {BiSolidBed} from 'react-icons/bi'
import {MdOutlineDepartureBoard} from 'react-icons/md'
import {FaChair} from 'react-icons/fa'
import {GiBathtub} from 'react-icons/gi'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
const SearchId = () => {
  const [listings,setListings] = useState({})
  const [loading,setLoading] = useState(false)
  const {id} = useParams()
  console.log(id);
  useEffect(() => {
  const fetchListing = async() => {
    setLoading(true);
  
    const result = await axios.get(`/api/listing/getSingleList/${id}`)
    setListings(result.data);
    setLoading(false)
   console.log(listings);
  }
  fetchListing()
  }, [location.search])
  return (
    <div className='overflow-hidden'>
       <div className='w-full '>
       <img className='w-full h-96' src={listings.imageUrls} alt="" />
       <div className='p-4 m-2 mx-auto flex justify-center '>
       <h1 className="font-bold text-xl mr-4">{listings.name} </h1>
       <span className="text-slate-500 mt-1">{listings.type==='offer'?<span>${listings.discountPrice}</span>:<span> 
       ${listings.regularPrice}</span>}
       
      </span>
       </div>
       </div>
    
  <div className=" flex justify-center items-center text-slate-600 mr-20">
       <IoLocationSharp />
       <h4 className="font-semibold ">{listings.address} </h4>
       </div>
       <div className='flex justify-center mt-2 gap-2 mr-20'>
       {
        listings.type==='rent'? <button className='w-36 bg-red-400 hover:bg-red-500  m-1 p-1 rounded-md font-bold text-slate-700'>for Rent</button>:
       <button className='w-36 bg-green-400  hover:bg-green-500  m-1 p-1 rounded-md font-bold text-slate-700'>Buy in Discount</button>
       }
      </div>
       <p className='text-sm   table mt-4 ml-auto mr-16  font-semibold'>Description: {listings.description}</p>
       <div className='flex items-center font-medium gap-4 justify-center m-2 p-2 ml-10'>
       <span>{listings.bedrooms} Beds</span>
        <BiSolidBed/>
        <span>{listings.parking? <MdOutlineDepartureBoard/>:""}</span>
       
        <span>{listings.furnished?<FaChair/>:""}</span>
        
        <span>{listings.bathrooms} Bathrooms </span>
        <GiBathtub/>
       </div>
    
  </div>

 
  )
}

export default SearchId;
