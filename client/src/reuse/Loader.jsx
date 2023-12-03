import React from 'react'
import { LuLoader } from "react-icons/lu"
export default function Loader() {
    const [loader, setLoader] = useState(2)
useEffect(() => {
   const interval = setTimeout(() => {
      setLoader((prev)=>prev--)
   }, 2000);
}, [])

  return (
    <div className='w-full'>
     {loader?<LuLoader/>:""} 
    </div>
  )
}
