import React from 'react'
import { Link } from 'react-router-dom'

const RecentOfferCard = ({offerListings}) => {
  return (
    <>
    <h1 className="text-2xl ml-24 font-semibold text-gray-500 hover:text-gray-600 hover:scale-150 duration-300"><Link to={`/search?offer=true`}>Recent place for Offer</Link></h1>
    <div className=' bg-slate-100  grid grid-cols-1 md:grid-cols-3  m-2 p-2'>
    
      {offerListings.map((offer,id)=>(
        <div key={offer._id}>
          <div className="w-full " >
           <div className=" border-spacing-2 p-4 shadow-2xl">
           <img src={offer.imageUrls[0]} alt="" />
           <h1 className="font-bold text-2xl">{offer.name}</h1>
           <h4 className="mt-2">{offer.address} </h4>
           <p className="text-sm">{offer.description}</p>
              <div className="mt-2 ">
                 <span className="text-slate-500">$ {offer.regularPrice}/month</span>
                <div className="flex justify-between mt-2">
                <span className="text-slate-600">{offer.bedrooms} beds</span>
                <span className="text-slate-600">{offer.bathrooms} Bathrooms</span>
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

export default RecentOfferCard
