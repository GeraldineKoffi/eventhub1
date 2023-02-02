import React, { useEffect,useRef,useState } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
         <Form className='modifEvent rounded p-4 p-sm-3' >
         <Form.Label className='head'>Modification Evènement</Form.Label>
         <Form.Group>
         <Form.Control value={data.id} ref={idInputRef} type="hidden" />
         </Form.Group>
         <Form.Label>Titre</Form.Label><br/>
         <Form.Control placeholder={data.title} ref={titleInputRef} />
         <Form.Label>Description</Form.Label><br/>
         <Form.Control placeholder={data.description} ref={descripInputRef} />
         <Form.Label>Date</Form.Label><br/>
         <Form.Control placeholder={data.date} ref={dateInputRef} />
         <Form.Label>Prix</Form.Label><br/>
         <Form.Control placeholder={data.prix} ref={PriceInputRef} />
         <Form.Label>Statut</Form.Label>
         <Form.Control placeholder={data.statut} ref={statutInputRef}/>
         <Form.Label>évènements Actif</Form.Label>
         <Form.Control placeholder={data.actif.toString()} ref={actifInputRef}/> 
         <br/>    
         <Button variant='dark' className="w-100 mt-2" onClick={setUpdateOrg}>Valider</Button> 
         {redirect ? <Redirect to={"/dashboardOrg"} /> : null}
         </Form>
   )
}
}

export default ModifEvent