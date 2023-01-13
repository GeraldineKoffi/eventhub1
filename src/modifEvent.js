import React, { useEffect,useRef,useState } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import { useParams } from 'react-router-dom'

function ModifEvent() {

   const idInputRef=useRef();
   const titleInputRef=useRef();
   const descripInputRef=useRef();
   const dateInputRef=useRef();
   const PriceInputRef=useRef();
   const actifInputRef=useRef();
   const statutInputRef=useRef();
    const [data, setDate]=useState();
   const [redirect,setRedirect]=useState(false)
   let { event } = useParams();

   useEffect(()=>{
   axios.get("http://localhost:4000/event/"+ event)
   .then((res)=>{
      setDate(res.data)
   })
   },[])
   
   console.log(data);
   const setUpdateOrg = async()=>{
      const title= titleInputRef.current.value;
      const description=descripInputRef.current.value
      const date= dateInputRef.current.value; 
      const prix= PriceInputRef.current.value;
      const statut= statutInputRef.current.value;
      const actif=actifInputRef.current.value
     
      try{
         axios.patch("http://localhost:4000/event/"+ event,{title,description,date,prix,statut,actif})
         .then(
            res=>{

               setRedirect(true)
            }
         )
            
         }
      
      catch (err) {
         console.log("l'erreur est :", err);
      }
   }
  
   if(data!=null){

      return (
         <div className='modifEvent' >
            <h3>Modification Evènement</h3>
        <input value={data.id} ref={idInputRef} type="hidden" /><br/>
       <label>Titre</label><br/>
       <input placeholder={data.title} ref={titleInputRef} /><br/>
      <label>Description</label><br/>
      <input placeholder={data.description} ref={descripInputRef} /><br/>
      <label>Date</label><br/>
      <input placeholder={data.date} ref={dateInputRef} /><br/>
      <label>Prix</label><br/>
      <input placeholder={data.prix} ref={PriceInputRef} /><br/>
      <label>Statut</label><br/>
      <input placeholder={data.statut} ref={statutInputRef} /><br/><br/>   
      <label>évènements Actif</label><br/>
      <input placeholder={data.actif} ref={actifInputRef} /><br/><br/>  
      <p>
   <button className='valid' onClick={setUpdateOrg}>Valider</button> 
   {redirect ? <Redirect to={"/dashboardOrg"} /> : null}
      </p>
       </div>
   )
}
}

export default ModifEvent