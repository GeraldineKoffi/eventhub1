import React, { useEffect,useRef,useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function ModifEvent() {

   const idInputRef=useRef();
   const titleInputRef=useRef();
   const descripInputRef=useRef();
   const dateInputRef=useRef();
   const PriceInputRef=useRef();
   const statutInputRef=useRef();

   const [update,setUpdate]=useState(false)
   let { event } = useParams();

   useEffect(()=>{
  
   },[update])
   
   const setUpdateOrg = async()=>{
      const title= titleInputRef.current.value;
      const description=descripInputRef.current.value
      const date= dateInputRef.current.value; 
      const prix= PriceInputRef.current.value;
      const statut= statutInputRef.current.value;
     
      try{
         axios.patch(`http://localhost:4000/event`+ event,{title,description,date,prix,statut}
         .then((response)=>{
            setUpdate(!update)
         }))
      }
      catch (err) {
         console.log("l'erreur est :", err);
      }
   }
  
   return (
      <div className='profilOrg'>
       <input   value={data.id} ref={idInputRef} type="hidden" /><br/>
       <label>Titre</label><br/>
       <input placeholder={data.title} ref={titleInputRef} /><br/>
      <label>Description</label><br/>
      <input placeholder={data.description} ref={descripInputRef} /><br/>
       <label>Date</label><br/>
       <input placeholder={data.date} ref={dateInputRef} /><br/>
       <label>Prix</label><br/>
       <input placeholder={data.prix} ref={PriceInputRef} /><br/>
       <label>Statut</label><br/>
       <input placeholder={data.statut} ref={statutInputRef} /><br/>
       <button className='valid' onClick={setUpdateOrg}>Valider</button>
       </div>
   )
}
export default ModifEvent