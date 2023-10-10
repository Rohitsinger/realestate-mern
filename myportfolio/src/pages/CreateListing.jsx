import React from 'react'

export const CreateListing = () => {
  return (
<div>        
       <h1 className=' flex justify-center items-center text-2xl font-bold '>Create a listing</h1>
      <div className=' flex mt-8 ml-32'>
        <div className='w-1/4 ml-auto '>

           <div className='flex flex-col'>
          <input className='m-2 p-2 w-64 rounded-md outline-slate-200' name='username' type="text" placeholder='enter name'/>
        <input className='m-2 p-2 w-64 rounded-md outline-slate-200' name='email' type="text" placeholder='enter email'/>
        <input className='m-2 p-2 w-64 rounded-md outline-slate-200' name='password' type="text" placeholder='enter password'/>
          </div>
        <div className="flex gap-4 flex-wrap p-2">
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
     
          <div className="flex gap-4  flex-wrap p-2   rounded-md ">
          <h3 className="mt-4">Sort:</h3>
           <select name="" id="" className="outline-none py-2 w-36 m-2">
            <option value="" >rent</option>
           </select>
          </div>
   
        </div>
      <div className='w-1/3  mr-auto'>
      <h2>First image should be cover image (max-6)</h2>
<div className='flex items-center'>
<input aria-describedby="user_avatar_help" id="user_avatar" type="file" className=' bg-slate-600 h-[30px] rounded-md '/>
<button className='m-2 p-2 border-gray-700 rounded-md'>Upload</button>
</div>
      <button className="m-2 p-2 rounded-md  text-white w-64  bg-slate-600"> Search</button>
      </div>
     </div>
     </div>
  )
}
