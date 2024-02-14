import React from 'react'
import { Link } from 'react-router-dom'

const PlaceforRentCard = ({rentListings}) => {
  return (
    <>
    <h1 className="text-2xl ml-24 font-semibold text-gray-500 hover:text-gray-600 hover:scale-150 duration-300" ><Link to={`/search?type=rent`}>Recent place for Rent</Link></h1>
    <div className=' bg-slate-100  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  m-2 p-2'>
    
      {rentListings.map((rent,id)=>(
        <div key={rent._id}>
          <div className="w-full " >
           <div className=" border-spacing-2 p-4 shadow-2xl">
           <img src={rent.imageUrls[0]} alt="rent" />
           <h1 className="font-bold text-2xl">{rent.name}</h1>
           <h4 className="mt-2">{rent.address} </h4>
           <p className="text-sm">{rent.description}</p>
              <div className="mt-2 ">
                 <span className="text-slate-500">$ {rent.regularPrice}/month</span>
                <div className="flex justify-between mt-2">
                <span className="text-slate-600">{rent.bedrooms} beds</span>
                <span className="text-slate-600">{rent.bathrooms} Bathrooms</span>
                </div>
              </div>
           </div>
           
          </div>
        
   
        </div>

      ))}
    </div>
</>
  )
}

export default PlaceforRentCard
