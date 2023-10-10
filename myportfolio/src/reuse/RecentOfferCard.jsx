import React from 'react'

const RecentOfferCard = () => {
  return (
   <div className=''>
     <div className=' bg-slate-100 '>
        <h1 className="text-2xl ml-24">Recent place for Offer</h1>
          <div className="w-full  grid grid-cols-4  m-2 p-2" >
           <div className=" border-spacing-2 p-4 shadow-2xl">
           <img src="https://images.pexels.com/photos/7512041/pexels-photo-7512041.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
           <h1 className="font-bold text-2xl">Modern penthouse class..</h1>
           <h4 className="mt-2">36/2/1 r.n.r.c ghat road shibpur Howrah </h4>
           <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, praesentium consectetur incidunt culpa omnis illum, neque error, sapiente saepe porro at quae nam ducimus architecto deleniti fugiat quia! Consequatur, deleniti.</p>
              <div className="mt-2 ">
                 <span className="text-slate-500">$ 3,400/month</span>
                <div className="flex justify-between mt-2">
                <span className="text-slate-600">4 beds</span>
                <span className="text-slate-600">5 Bathrooms</span>
                </div>
              </div>
           </div>
           
          </div>
        
        </div>
   </div>
  )
}

export default RecentOfferCard
