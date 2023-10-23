import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { useEffect, useRef, useState } from 'react'
import { app } from '../authentication/Firebase';

export const CreateListing = () => {
  const inputRef = useRef(null)
  const [files,setFiles] = useState([])
  const [imageError,setImageError] = useState(false)
  const [uploading,setUploading] = useState(false)
  const [formData,setFormData] = useState({
    imageUrl:[]
  })
  console.log(files);
  console.log(formData);
//submit multiple image 
 const handleImageSubmit = (e) => {
    if(files.length > 0 && files.length < 7 + formData.imageUrl.length < 7){
      setUploading(true)
      const promises = [];
      for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]))
      }
      Promise.all(promises).then((urls)=>{
        setFormData({...formData,imageUrl:formData.imageUrl.concat(urls)
         
        })
        setUploading((false))
        setImageError(false)
      }).catch((err)=>{
        setImageError(err);
        setUploading(false)
      })
      
    }else{
      setImageError('You can only upload six image per listing')
    }
 }

 const storeImage = (file) => {
   console.log(file);
return new Promise((resolve, reject) => {
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
    // setFileUpload(Math.round(progress))

  }, 
  (error) => {
    console.log(error);
    reject(error)
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      resolve(downloadURL)
      console.log('File available at', downloadURL);
 
    });
     }
  )
})
 }

  //taking references

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  //deleyte images
  const handleDeleteImage =(index)=>{
    setFormData({...formData,imageUrl:formData.imageUrl.filter((_,i)=>i!==index)})
  }

  return (
    <div>
      {/* //left side */}
      <h1 className=' flex justify-center items-center text-2xl font-bold '>Create a listing</h1>
      <div className=' md:flex mt-8 mx-auto '>
        <div className=' xl:w-1/4 md:ml-auto '>

          <div className=' md:ml-0 flex flex-col gap-4'>
            <input className='m-2 p-2 w-full rounded-md outline outline-offset-2 outline-slate-300' ref={inputRef} name='username' type="text" placeholder='enter name' />
            <textarea className='m-2 p-2 w-full rounded-md outline outline-offset-2 outline-slate-300' name='description' type="text" placeholder='enter description' />
            <input className='m-2 p-2 w-full rounded-md outline outline-offset-2 outline-slate-300' name='address' type="text" placeholder='enter address' />
          </div>
          <div className="flex gap-4 flex-wrap p-2 " >
            <input type="checkbox" id="rent" name="" value="rent" />
            <h2> sale</h2>
            <input type="checkbox" id="rent" name="" value="rent" />
            <h2>Rent</h2>
            <input type="checkbox" id="rent" name="" value="rent" />
            <h2>Parking</h2>
            <input type="checkbox" id="rent" name="" value="rent" />
            <h2>Furnished</h2>
            <input type="checkbox" id="rent" name="" value="rent" />
            <h2>offer</h2>

          </div>

          <div className="flex  gap-2 p-2   rounded-md ">
            <h3 className="mt-4 ">Beds</h3>
            <input type='number' defaultValue="1" className="outline outline-offset-2 outline-slate-300 rounded-md ml-2  py-2 w-12 m-2" />
            <h3 className="mt-4">Baths</h3>
            <input type='number' defaultValue="1" className="outline outline-offset-2 outline-slate-300 rounded-md  py-2 w-12 m-2" />
          </div>
          <div className='flex flex-wrap gap-4'>
            <input type='number' defaultValue="100" className="outline outline-offset-2 outline-slate-300 rounded-md ml-2  py-2 w-12 m-2" />
            <h3 className="mt-4 ">Regular price ($/Month)</h3>
            <input type='number' defaultValue="100" className="outline outline-offset-2 outline-slate-300 rounded-md ml-2  py-2 w-12 m-2" />
            <h3 className="mt-4 ">Discounted price ($/Month)</h3>
          </div>
        </div>

        {/* //right side */}

        <div className=' xl:w-1/3 md:mr-auto md:ml-8' >
          <h2>First image should be cover image (max-6)</h2>
          <div className='flex items-center  '>
            <input onChange={(e)=>setFiles(e.target.files)} multiple aria-describedby="user_avatar_help" id="user_avatar" type="file" className=' bg-slate-800 h-[30px] rounded-md ' />
            <button onClick={handleImageSubmit} className='m-2 px-3 py-1 rounded-sm text-green-500 outline outline-offset-1 outline-green-600'>{uploading?"Uploading":"Upload"}</button>
          </div>
          <p className='text-red-500'>{imageError}</p>
          {
            formData.imageUrl.length>0  && 
            formData.imageUrl.map((urls,index)=>(
             <div className='flex justify-between p-3 border items-center'>
             <img src={urls} className='w-20 h-20 object-contain rounded-lg '/>
             <button onClick={()=>handleDeleteImage(index)} className='text-red-600 hover:opacity-75 rounded-md my-4  py-1 px-3'>Delete</button>
             </div>
            ))
          }
          <button className="m-2 p-2 rounded-md  text-white w-64  bg-slate-800"> Create Listing</button>
        </div>
    
      </div>
    </div>
  )
}
