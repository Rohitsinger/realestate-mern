import React from 'react'
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import { app } from './Firebase'
import { useDispatch } from 'react-redux'
import { signFailure, signSuccess } from '../redux/user/userSlice'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const OAuth = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
    const handleGoogleClick = async() => {
          try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app);
            const result = await signInWithPopup(auth,provider)
            const data = await axios.post(`/api/auth/google`,{
              name:result.user.displayName,
              email:result.user.email,
              photo:result.user.photoURL
        
            })
          console.log(data);
            dispatch(signSuccess(data))
            navigate('/')
          } catch (error) {
            console.log("couldnot login with google", error);
            // dispatch(signFailure(data))
          }
    }
  return (
    <div className='w-full mr-4'>
      <button onClick={handleGoogleClick} type='button' className='p-2 m-2 w-full rounded-md bg-red-800 hover:bg-red-900 mt-4 text-white'>OAuth</button>
    </div>
  )
}

export default OAuth
