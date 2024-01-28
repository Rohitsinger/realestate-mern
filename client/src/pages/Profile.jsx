import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signOutStart, signOutSuccess, signOutFailure, updateUserFailure, updateUserSuccess, updateUserStart } from '../redux/user/userSlice'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import axios from 'axios'
import { app } from '../authentication/Firebase'
import { AiOutlineSearch } from 'react-icons/ai'
// import {v4} from 'uuid'
const Profile = () => {
  const { currentUser } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [updateUser, setUpdateUser] = useState({})
  const [file, setFile] = useState(undefined)
  const [fileUpload, setFileUpload] = useState(0)
  const [formData, setFormData] = useState({})
  const [userListingDetails, setUserListingDetails] = useState([])
  const [showlisisting, setShowlisisting] = useState(false)
  const [fileUploadError, setFileUploadError] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const fileRef = useRef(null)
  console.log(file);
  // firebase storage
  // allow read
  // write: if 
  // request.resource.size <2 * 1024*1024 &&
  // request.resource.contentType.matches('image/.*')

  useEffect(() => {
    if (file) {
      handlePhotoChange(file)
    }
  }, [file])

  //signout

  const signOut = async () => {

    try {
      dispatch(signOutStart())
      const res = await axios.get('/api/auth/signout')
      if (res.success === false) {
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
    const storageRef = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        // setFileUpload(Math.round(progress))
      },
      (error) => {
        console.log(error);
        setFileUploadError(true)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, avatar: downloadURL })
          console.log('File available at', downloadURL);

        });
      })
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }
  console.log(formData);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart())
      const res = await axios.patch(`/api/user/updateuser/${currentUser.data._id}`, formData)
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

  //showing listings
  const handleShowListing = useCallback(async () => {
    try {
     setShowlisisting(true)
      const res = await axios.get(`/api/listing/getLists`)
      // const res = await axios.get(`/api/user/listings/${currentUser.data._id}`)
      setUserListingDetails(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }, [searchTerm])

  const handleDelete = async(deletingId) => {
   try {
    const res = await axios.delete(`/api/listing/delete/${deletingId}`)
    setUserListingDetails((prev)=>prev.filter((listing)=>listing._id!==deletingId))
   } catch (error) {
    console.log(error);
   }
  

  }

  //moving to single posts
  const movetoSinglePost = (listingId) => {
    navigate(`/listing/${listingId}`)
  }

  return (
    <div>
      <div className='md:w-[600px] w-[350px] overflow-x-hidden shadow-2xl m-auto mt-12 h-auto'>
        <form action="" method="post" className='flex flex-col justify-center items-center m-4 p-4'>

          <h2 className='mb-4 text-2xl font-bold'>Profile</h2>

          <input type='file' onChange={(e) => setFile(e.target.files[0])} ref={fileRef} hidden accept='image/*' />
          <img onClick={() => fileRef.current.click()} className='w-16 rounded-full' src={currentUser.data.avatar} alt="" />

          <input className='m-2 p-2 w-64 rounded-md outline-slate-200' type="text" onChange={handleChange} id='username' defaultValue={currentUser.data.username} />
          <input className='m-2 p-2 w-64 rounded-md outline-slate-200' type="text" onChange={handleChange} id='email' defaultValue={currentUser.data.email} />

          <button type='button' className='p-2 m-2 w-64 rounded-md bg-blue-800 mt-4 text-white' onClick={handleClick}>Update</button>
          <button className='p-2 m-2 w-64 rounded-md bg-green-600 mt-4 text-white' onClick={() => navigate('/create-listing')}>Create Listing</button>
          <div className='text-red-700 font-semibold text-sm flex justify-between items-center gap-36 md:gap:80 m-2 p-2 '>
            <span>Delete Account</span>
            <span className='hover:text-slate-500 cursor-pointer' onClick={signOut}>Signout</span>
          </div>
          <span className='text-sm ml-20  mr-auto font-semibold text-red-700'>Something went wrong</span>
        </form>
      </div>

      <button className='text-sm w-full font-semibold text-green-700' onClick={handleShowListing}>{showlisisting ? "" : "Show Listing"}
      </button>
      <div>
   {userListingDetails.length>0 &&  <form action="" className='flex items-center mr-8 rounded-lg '>

<input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='search...' className=' p-3 ml-auto mr-8  rounded-lg w-24  outline-none' />
<AiOutlineSearch className='text-slate-600' />
</form>}
        {userListingDetails.length > 0 && userListingDetails.filter((listing) => {
            if (searchTerm === "") {
              return <h1 className='p-6  m-6 '>No posts found</h1>
            } else if (listing.name.toLowerCase().includes(searchTerm)) {
              return listing
            }
            }).map((listingDetails, id) => (
            <>
              <div className="flex max-w-2xl m-4 flex-col items-center rounded-md border md:flex-row mx-auto cursor-pointer " key={id} >
               <div className="h-full w-full md:h-[200px] md:w-[300px] ">
                  <img
                    src={listingDetails.imageUrls}
                    alt="Laptop"
                    className="h-full w-full rounded-md object-cover "
                    onClick={() => movetoSinglePost(listingDetails._id)}
                  />
                </div>
                <div>
                  <div className="p-4">
                    <h1 className="inline-flex items-center text-lg font-semibold">
                      {listingDetails.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="ml-2 h-4 w-4"
                      >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </h1>
                    <p className="mt-3 text-sm text-gray-600">
                      {listingDetails.description}
                      debitis?
                    </p>
                    <div className="mt-4">
                      <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                        {listingDetails.bathrooms} bathrooms
                      </span>
                      <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                        {listingDetails.bedrooms} bedrooms
                      </span>
                      <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                        $ {listingDetails.regularPrice}
                      </span>
                    </div>
                    <div>
                      <button className="mb-2 bg-green-400 mr-2 inline-block rounded-lg px-3 py-1 text-[10px] font-semibold text-gray-900" onClick={()=>navigate(`/update-listing/${listingDetails._id}`)}>Edit</button>
                      <button className="mb-2 mr-2 inline-block  rounded-lg bg-red-400 px-3 py-1 text-[10px] font-semibold text-gray-900" onClick={()=>handleDelete(listingDetails._id)}>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
          )
        }
{userListingDetails.length===0 ? "" : <h1 className='p-8 m-8 text-lg text-center'></h1>}
      </div>
    </div>
  )
}

export default Profile
