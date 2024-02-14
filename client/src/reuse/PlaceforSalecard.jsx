import { Link } from "react-router-dom"


const PlaceforSalecard = ({saleListings}) => {
 
  return (
    <>
    <h1 className="text-2xl ml-24 font-semibold text-gray-500 hover:text-gray-600 hover:scale-150 duration-300" ><Link to={`/search?type=sale`}>Recent place for Sale</Link></h1>
    <div className=' bg-slate-100  grid grid-cols-1 md:grid-cols-3  m-2 p-2'>
    
      {saleListings.map((sale,id)=>(
        <div key={sale._id}>
          <div className="w-full " >
           <div className=" border-spacing-2 p-4 shadow-2xl">
           <img src={sale.imageUrls[0]} alt="" />
           <h1 className="font-bold text-2xl">{sale.name}</h1>
           <h4 className="mt-2">{sale.address} </h4>
           <p className="text-sm">{sale.description}</p>
              <div className="mt-2 ">
                 <span className="text-slate-500">$ {sale.regularPrice}/month</span>
                <div className="flex justify-between mt-2">
                <span className="text-slate-600">{sale.bedrooms} beds</span>
                <span className="text-slate-600">{sale.bathrooms} Bathrooms</span>
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

export default PlaceforSalecard
