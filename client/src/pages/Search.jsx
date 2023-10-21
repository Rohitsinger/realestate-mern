import RecentOfferCard from "../reuse/RecentOfferCard"

const Search = () => {
  return (
   
      <div className=' sm:flex border-zinc-500'>
        <div className='sm:w-2/6 bg-slate-50'>
          <div className='flex p-4 gap-4'>
            <h2 className='mt-3 font-medium'>Search:</h2>
            <form action="" className='flex items-center  bg-slate-50 rounded-lg '>
              <input type="text" placeholder='search...' className=' p-3 rounded-lg w-24 md:w-64 outline-none' />
            </form>
          </div>
          <div className="flex gap-4 flex-wrap p-2">
            <h3>Type:</h3>
            <input type="checkbox" id="rent" name="" value="rent"/>
            <h2>Rent and sale</h2>
            <input type="checkbox" id="rent" name="" value="rent"/>
            <h2>Rent</h2>
            <input type="checkbox" id="rent" name="" value="rent"/>
            <h2>Sale</h2>
          </div>
          <div className="flex gap-4 flex-wrap p-2">
          <h3>Amenities:</h3>
            <input type="checkbox" id="rent" name="" value="rent"/>
            <h2>Parking</h2>
            <input type="checkbox" id="rent" name="" value="rent"/>
            <h2>Furnished</h2>
          </div>
          <div className="flex gap-4 flex-wrap p-2   rounded-md ">
          <h3 className="mt-4">Sort:</h3>
           <select name="" id="" className="outline-none py-2 w-36 m-2">
            <option value="" >rent</option>
           </select>
          </div>
        <div className="p-2">
        <button className="m-2 p-2 rounded-md w-full text-white   bg-slate-600"> Search</button>
        </div>
        </div>
        {/* cards  */}
        <div className=' bg-slate-100 '>
        <h1 className="text-2xl ml-24">Recent place for Offer</h1>
          <div className="w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  m-2 p-2" >
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

export default Search
