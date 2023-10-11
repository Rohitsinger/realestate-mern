import React from 'react'

export const CreateListing = () => {
  return (
<div>        
       <h1 className=' flex justify-center items-center text-2xl font-bold '>Create a listing</h1>
      <div className=' flex mt-8 ml-32 '>
        <div className='w-1/4 ml-auto '>

           <div className='flex flex-col gap-4'>
          <input className='m-2 p-2 w-64 rounded-md outline outline-offset-2 outline-slate-300' name='username' type="text" placeholder='enter name'/>
        <input className='m-2 p-2 w-64 rounded-md outline outline-offset-2 outline-slate-300' name='description' type="text" placeholder='enter description'/>
        <input className='m-2 p-2 w-64 rounded-md outline outline-offset-2 outline-slate-300' name='address' type="text" placeholder='enter address'/>
          </div>
        <div className="flex gap-4 flex-wrap p-2 " >
           <input type="checkbox" id="rent" name="" value="rent"/>
            <h2> sale</h2>
            <input type="checkbox" id="rent" name="" value="rent"/>
            <h2>Rent</h2>
            <input type="checkbox" id="rent" name="" value="rent"/>
            <h2>Parking</h2>
            <input type="checkbox" id="rent" name="" value="rent"/>
            <h2>Furnished</h2>
            <input type="checkbox" id="rent" name="" value="rent"/>
            <h2>offer</h2>
            
          </div>
     
          <div className="flex  gap-2 p-2   rounded-md ">
          <h3 className="mt-4 ">Beds</h3>
          <input type='number' defaultValue="1" className="outline outline-offset-2 outline-slate-300 rounded-md ml-2  py-2 w-12 m-2"/>
           <h3 className="mt-4">Baths</h3>
         <input type='number' defaultValue="1" className="outline outline-offset-2 outline-slate-300 rounded-md  py-2 w-12 m-2"/>
          </div>
       <div className='flex flex-wrap gap-4'>
       <input type='number' defaultValue="100" className="outline outline-offset-2 outline-slate-300 rounded-md ml-2  py-2 w-12 m-2"/>
        <h3 className="mt-4 ">Regular price ($/Month)</h3>
       <input type='number' defaultValue="100" className="outline outline-offset-2 outline-slate-300 rounded-md ml-2  py-2 w-12 m-2"/>
        <h3 className="mt-4 ">Discounted price ($/Month)</h3>
       </div>
        </div>
       

      <div className='w-1/3 mr-auto'>
      <h2>First image should be cover image (max-6)</h2>
<div className='flex items-center  '>
<input aria-describedby="user_avatar_help" id="user_avatar" type="file" className=' bg-slate-600 h-[30px] rounded-md '/>
<button className='m-2 px-3 py-1 rounded-sm text-green-500 outline outline-offset-1 outline-green-600'>Upload</button>
</div>
      <button className="m-2 p-2 rounded-md  text-white w-64  bg-slate-600"> Create Listing</button>
      </div>
     </div>
     </div>
  )
}
