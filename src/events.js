import axios from 'axios'
import React, { useRef} from 'react'
import { useState } from 'react'

import "./Events/style.css"

function Events(){
  const [image, setImage] = useState('')
  const handleImage=(e)=>{
    console.log(e.target.files)
    setImage(e.target.files[0])
  }
  const handleApi=()=>{
   
    const formData = new FormData()
    formData.append('image', image)
    axios.post("http://localhost:4000/event",formData).then((res)=>{
      console.log(res)
    })
  }
  return(
    <form className='events'>
         <label>Image</label>
         <input type="file" name="file"  onChange={handleImage}/>
          <button className='valid' onClick={handleApi}>Valider</button>
        </form>
  )
}
export default Events