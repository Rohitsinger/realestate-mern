import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Contact = ({listing}) => {
  const [landLord,setlandLord] = useState(null)
  const [message,setMessage] = useState('')

  const onChange = (e) => {
    setMessage(e.target.value)
  }
 
  console.log(landLord);
  useEffect(() => {
    try {
    
      const fetchisting = async () => {
        const getUser = await axios.get(`/api/user/getuser/${listing.userRef}`)
        setlandLord(getUser.data);
      }
      fetchisting()
     
    } catch (error) {
    console.log(error);
    }
  }, [listing.userRef])
  return (
    <>
       {
      landLord && (
           <div >
          <h3 className='ml-16 p-4'>Contact : <span className='text-green-500 font-medium '>{landLord.username}</span></h3>
          <div className='flex flex-col gap-4'>
          <textArea className="  outline-double rounded-md p-2"
            name="message"
            id="message"
            rows='2'
            value={message}
            onChange= {onChange}
            placeholder="Enter the message"
           />
           <Link className='py-2 mt-8 px-4 text-center rounded-md bg-slate-400' to={`mailto:${landLord.email}?subject=Regarding ${listing.name}&body=${message}`}>Send message</Link>
          </div>
         </div>
      )
    }
     
     
    </>
  )
}

export default Contact
