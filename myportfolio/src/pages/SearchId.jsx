import {IoLocationSharp} from 'react-icons/io5'
import {BiSolidBed} from 'react-icons/bi'
import {MdOutlineDepartureBoard} from 'react-icons/md'
import {FaChair} from 'react-icons/fa'
import {GiBathtub} from 'react-icons/gi'
const SearchId = () => {
  return (
    <div className='overflow-hidden'>
       <div className='w-full '>
       <img className='w-full h-96' src="https://images.pexels.com/photos/7512041/pexels-photo-7512041.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
       <div className='p-4 m-2 mx-auto flex justify-center'>
       <h1 className="font-bold text-xl">Modern penthouse class..  <span className="text-slate-500">$3,400/month</span></h1>
       </div>
       </div>
    
  <div className=" flex justify-center items-center text-slate-600 mr-20">
       <IoLocationSharp />
       <h4 className="font-semibold ">36/2/1 r.n.r.c ghat road shibpur Howrah </h4>
       </div>
       <div className='flex justify-center mt-2 gap-2 mr-20'>
       <button className='w-36 bg-red-400 hover:bg-red-500  m-1 p-1 rounded-md font-bold text-slate-700'>For Rent</button>
       <button className='w-36 bg-green-400  hover:bg-green-500  m-1 p-1 rounded-md font-bold text-slate-700'>Buy:$20 Discount</button>
      </div>
       <p className='text-sm  w-[800px] table mt-4 ml-auto mr-16  font-semibold'>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum architecto est error porro quaerat, nesciunt, odit exercitationem consectetur blanditiis magnam iusto omnis tempora nam provident sequi dolorem unde suscipit perspiciatis.</p>
       <div className='flex items-center font-medium gap-4 justify-center m-2 p-2 ml-10'>
       <span>Beds</span>
        <BiSolidBed/>
        <span>Parking spot</span>
        <MdOutlineDepartureBoard/>
        <span>Furnished</span>
        <FaChair/>
        <span>Bath</span>
        <GiBathtub/>
       </div>
     <div className='  flex justify-center'>
     <button className='w-[780px]  flex justify-center  bg-slate-600  hover:bg-slate-700  m-2 p-2  rounded-md font-semibold text-white'>Contact Landlord</button>
     </div>
  </div>

 
  )
}

export default SearchId
