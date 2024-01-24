import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'
import RecentOfferCard from "../reuse/RecentOfferCard"
import axios from 'axios'
const Search = () => {
  const navigate = useNavigate()
  const [loading,setLoading] = useState(false)
  const [listings,setListings] = useState([])
  const [sideBarData,setSideBarData] = useState({
    searchTerm:'',
    type:'all',
    parking: false,
    furnished: false,
    offer:false,
    sort:'created_at',
    order:'desc',      
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
  const searchTermUrl =  urlParams.get('searchTerm')
  const typeFromUrl = urlParams.get('type')
  const parkingFromUrl = urlParams.get('parking')
  const furnishedUrl = urlParams.get('furnished')
  const offerUrl = urlParams.get('offer')
  const sortUrl = urlParams.get('sort')
  const orderUrl = urlParams.get('order')

  if (searchTermUrl || typeFromUrl || parkingFromUrl || furnishedUrl || offerUrl || sortUrl || orderUrl) {
    setSideBarData({
      searchTerm:searchTermUrl || "",
      type:typeFromUrl || 'all',
      parking:parkingFromUrl==='true'?true:false,
      furnished:furnishedUrl==='true'?true:false,
      offer:parkingFromUrl==='true'?true:false,
      sort:sortUrl || 'created_at',
      order:orderUrl || 'desc',
    })
  }


  const fetchListing = async() => {
    setLoading(true);
    const searchQuery = urlParams.toString()
    const result = await axios.get(`/api/listing/getCompleteLists?${searchQuery}`)
    setListings(result.data);
    setLoading(false)
   
  }
  fetchListing()
  }, [location.search])
  console.log(listings);
  const handleChange = (e) => {
      if (e.target.id==='all' || e.target.id==='rent' || e.target.id==='sale') {
        setSideBarData({...sideBarData,type:e.target.id})
      }
      if (e.target.id==='searchTerm') {
        setSideBarData({...sideBarData,type:e.target.value})
      }
      if (e.target.id==='parking' || e.target.id==='furnished' || e.target.id==='offer') {
        setSideBarData({...sideBarData,[e.target.id]:e.target.checked || e.target.checked==='true' ? true : false})
      }
      if (e.target.id === 'sort_order') {
        const sort = e.target.value.split('_')[0] || 'created_at';
       
        const order = e.target.value.split('_')[1] || 'desc';
     
        setSideBarData({...sideBarData,sort,order})
      }
  }

  const handleSubmit = (e) => {
     e.preventDefault();
   const urlParams = new URLSearchParams();
   urlParams.set('searchTerm',sideBarData.searchTerm)
   urlParams.set('type',sideBarData.type)
   urlParams.set('parking',sideBarData.parking)
   urlParams.set('furnished',sideBarData.furnished)
   urlParams.set('offer',sideBarData.offer)
   urlParams.set('sort',sideBarData.sort)
   urlParams.set('order',sideBarData.order)
   const searchQuery = urlParams.toString()
   navigate(`/search?${searchQuery}`)
  }
  return (
      <div className=' sm:flex border-zinc-500 overflow-x-hidden'>
        <div className='sm:w-2/6 bg-slate-50'>
          <div className='flex p-4 gap-4'>
            <h2 className='mt-3 font-medium'>Search:</h2>
            <form action=""  className='flex items-center  bg-slate-50 rounded-lg '>
              <input
               type="text" placeholder='search...'
               className=' p-3 rounded-lg w-24 md:w-64 outline-none'
               value={sideBarData.searchTerm}
               onChange={handleChange}
                />
            </form>
          </div>
          <div className="flex gap-4 flex-wrap p-2">
            <h3>Type:</h3>
            <input type="checkbox" id="all" name="" value="all"
               onChange={handleChange}
               checked={sideBarData.type==='all'}
            />
            <h2>Rent and sale</h2>
            <input type="checkbox" id="rent" name="" value="rent"
                onChange={handleChange}
               checked={sideBarData.type==='rent'}
            />
            <h2>Rent</h2>
            <input type="checkbox" id="sale" name="" value="sale"
                onChange={handleChange}
               checked={sideBarData.type==='sale'}
            />
            <h2>Sale</h2>
          </div>
          <div className="flex gap-4 flex-wrap p-2">
          <h3>Amenities:</h3>
          <input type="checkbox" id="parking" name="" value="parking"
              onChange={handleChange}
               checked={sideBarData.offer}
            />
            <h2>offer</h2>
            <input type="checkbox" id="parking" name="" value="parking"
              onChange={handleChange}
               checked={sideBarData.parking}
            />
            <h2>Parking</h2>
            <input type="checkbox" id="furnished" name="" value="furnished"
               onChange={handleChange}
               checked={sideBarData.furnished}/>
            <h2>Furnished</h2>
          </div>
          <div className="flex gap-4 flex-wrap p-2 rounded-md ">
          <h3 className="mt-4">Sort:</h3>
           <select name="" id="sort_order" className="outline-none cursor-pointer text-sm py-2 w-36 m-2"
           onChange={handleChange} defaultValue={'created_at_desc'}>
            <option value="regularprice_desc" className="">Price High to Low</option>
            <option value="regularprice_asc" className="">Price low to High</option>
            <option value="createdAt_desc" className="">Latest</option>
            <option value="createdAt_asc" className="">Oldest</option>
           </select>
          </div>
        <div className="p-2">
        <button className="m-2 p-2 rounded-md w-full text-white   bg-slate-600" onClick={handleSubmit}> Search</button>
        </div>
        </div>
        {/* cards  */}
          <div className="w-4/6  bg-slate-100 min-h-screen">
          <h1 className="text-2xl ml-72">Recent place for Offer</h1>
          {loading ? <h2 className="flex flex-col justify-center items-center">Loading</h2> :""}
          <div className='  grid grid-cols-2  '>
           {listings.length>0?listings.map((listing)=>(
          <div className="w-full    m-2 p-2" >
           <div className=" border-spacing-2 p-4 shadow-2xl">
           <img src={listing.imageUrls} alt="" />
           <h1 className="font-bold text-2xl">{listing.name}</h1>
           <h4 className="mt-2">{listing.address}</h4>
           <p className="text-sm">{listing.description}</p>
              <div className="mt-2 ">
                 <span className="text-slate-500">$ 3,400/month</span>
                <div className="flex justify-between mt-2">
                <span className="text-slate-600">{listing.bedrooms} beds</span>
                <span className="text-slate-600">{listing.bathrooms} Bathrooms</span>
                </div>
              </div>
           </div>
           
          </div>
        
         )):<h1 className="flex flex-col justify-center items-center m-12 py-24">No data found</h1>}
        </div>
          </div>
      </div>
  
  )
}

export default Search
