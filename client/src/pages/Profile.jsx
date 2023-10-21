import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {signOutStart,signOutSuccess,signOutFailure,updateUserFailure,updateUserSuccess,updateUserStart} from '../redux/user/userSlice'
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage'
import axios from 'axios'
import {app} from '../authentication/Firebase'
// import {v4} from 'uuid'
const Profile = () => {
    const {currentUser} = useSelector(state=>state.user)
    const dispatch = useDispatch()
  const navigate = useNavigate()
  const [updateUser,setUpdateUser] = useState({})
  const [file,setFile] = useState(undefined)
const [fileUpload,setFileUpload] = useState(0)
const [formData,setFormData] = useState({
})
const [fileUploadError,setFileUploadError] = useState(false)

  const fileRef = useRef(null)
  console.log(file);
  // firebase storage
      // allow read
      // write: if 
      // request.resource.size <2 * 1024*1024 &&
      // request.resource.contentType.matches('image/.*')

        useEffect(() => {
          if(file){
      handlePhotoChange(file)
    }
   }, [file])

//signout

  const signOut = async() => {
  
   try {
    dispatch(signOutStart())
    const res = await axios.get('/api/auth/signout')
    if(res.success===false){
     return
    }
    dispatch(signOutSuccess())
    navigate('/signin')
   } catch (error) {
    dispatch(signOutFailure())
      console.log(error);
   }

  }

const handlePhotoChange = (file) => {
  const storage = getStorage(app);
  const fileName = new Date().getTime() + file.name
  const storageRef = ref(storage,fileName)
  const uploadTask = uploadBytesResumable(storageRef,file);
  uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    setFileUpload(Math.round(progress))

  }, 
  (error) => {

    setFileUploadError(true)
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setFormData({...formData,avatar:downloadURL})
      console.log('File available at', downloadURL);

    });
     })
};

const handleChange = (e) => {
  setFormData({...formData,[e.target.id] : e.target.value})
} 
console.log(formData);

const handleClick = async(e) => {
  e.preventDefault();
try {
  dispatch(updateUserStart())
   const res = await axios.patch(`/api/user/updateuser/${currentUser.data._id}`,formData)
   console.log(res.data);
   setUpdateUser(res.data)
   dispatch(updateUserSuccess())
} catch (error) {
  console.log(error);
  dispatch(updateUserFailure())
}

} 
useEffect(() => {
   handleClick()
}, [])

 console.log(updateUser);  

  return (
<div>
<div className='w-[600px] shadow-2xl m-auto mt-12 '>
       <form action="" method="post" className='flex flex-col justify-center items-center m-4 p-4'>
      
       <h2 className='mb-4 text-2xl font-bold'>Profile</h2>

       <input type='file' onChange={(e)=>setFile(e.target.files[0])}  ref={fileRef} hidden accept='image/*'/>
       <img onClick={()=>fileRef.current.click()} className='w-16 rounded-full' src={currentUser.data.avatar} alt="" />

        <input className='m-2 p-2 w-64 rounded-md outline-slate-200' type="text" onChange={handleChange}id='username' defaultValue={currentUser.data.username}/>
        <input className='m-2 p-2 w-64 rounded-md outline-slate-200' type="text"  onChange={handleChange} id='email' defaultValue={currentUser.data.email}/>
        {/* <input className='m-2 p-2 w-64 rounded-md outline-slate-200' type="text" defaultValue={currentUser.data.avatar}/> */}
        <button type='button' className='p-2 m-2 w-64 rounded-md bg-blue-800 mt-4 text-white' onClick={handleClick}>Update</button>
        <button className='p-2 m-2 w-64 rounded-md bg-green-600 mt-4 text-white' onClick={() => navigate('/createlisting')}>Create Listing</button>
        <div className='text-red-700 font-semibold text-sm flex justify-between items-center gap-80 m-2 p-2 '>
         
          <span>Delete Account</span>
          
   
          <span  className='hover:text-slate-500 cursor-pointer' onClick={signOut}>Signout</span>
       
        </div>
        <span className='text-sm ml-8  mr-auto font-semibold text-red-700'>Something went wrong</span>
       </form>
    </div>
</div>
  )
}

export default Profile
