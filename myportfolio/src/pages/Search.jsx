import RecentOfferCard from "../reuse/RecentOfferCard"

const Search = () => {
  return (
   
      <div className=' flex border-zinc-500'>
        <div className='w-2/6 bg-slate-50'>
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
           <RecentOfferCard/>
      </div>
  
  )
}

export default Search
