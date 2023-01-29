import React, {useEffect, useState,useRef} from 'react'
import axios from 'axios'
import utilisateur1 from './utilisateur1.png'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';




function Profil(){   
  
   const idInputRef=useRef();
   const nameInputRef=useRef();
   const prenomInputRef=useRef();
   const telInputRef=useRef();
   const [update,setUpdate]=useState(false)
   
   useEffect(()=>{
  
   },[update])
   
   const setUpdateOrg = async()=>{
      const lastName= nameInputRef.current.value;
      const firstName= prenomInputRef.current.value;
      const phone=telInputRef.current.value
      const id = idInputRef.current.value;
     
      try{
         axios.patch(`http://localhost:4000/user/`+ id, {lastName, firstName, phone})
        
           .then((response)=>{
            if(lastName && firstName && phone){
               localStorage.setItem('lastName', response.data.lastName)
               localStorage.setItem('firstName', response.data.firstName)
               localStorage.setItem('phone', response.data.phone)
               localStorage.setItem('id', response.data.id)
               setShow3(!show3)
               setUpdate(!update)
         }
         else if(!lastName && !firstName && !phone){
            setShow3(!show3)
            setUpdate(!update)
         }
         else if(lastName && !firstName && !phone){
            localStorage.setItem('lastName',response.data.lastName)
            setShow3(!show3)
            setUpdate(!update)
         }else if(!lastName && firstName && !phone){
            localStorage.setItem('firstName',response.data.firstName)
            setShow3(!show3)
            setUpdate(!update)
         }else if(!lastName && !firstName && phone){
            localStorage.setItem('phone',response.data.phone)
            setShow3(!show3)
            setUpdate(!update)
         }
           }) 
   
   }
   catch (err) {
      console.log("l'erreur est :", err);
   }
   
}
  

    const [show3, setShow3] = React.useState(false)
 
 function modif(){
    setShow3(!show3)
    
 }
 
    return(
      <>
        <img src={utilisateur1} alt='' className='imgProfil'/>  
        <input type="file" className='img' accept='image/*'/>
        <div className='info'>
        <p>{ localStorage.getItem('lastName')} { localStorage.getItem('firstName')}</p> 
        <p>{localStorage.getItem('mail')}</p>
        <p>{ localStorage.getItem('phone')}</p>
        </div>
        <Button type="submit" variant="dark"  className="modif" onClick={modif}>Modifier</Button>
       {show3? 
       <Form className="formModif">
        <h3 >Modifier vos informations</h3>
         <Form.Group >
         <Form.Control 
            value={ localStorage.getItem('id')} ref={idInputRef} type="hidden"/>
         </Form.Group>
         <Form.Group>
         <Form.Label>Nom</Form.Label>
         <Form.Control placeholder={ localStorage.getItem('lastName')} ref={nameInputRef} />
         </Form.Group>
         <Form.Group>
         <Form.Label>Prénom</Form.Label>
         <Form.Control placeholder={ localStorage.getItem('firstName')} ref={prenomInputRef} />
         </Form.Group>
         <Form.Group>
         <Form.Label>Numéro</Form.Label>
         <Form.Control placeholder={ localStorage.getItem('phone')} ref={telInputRef} />
         </Form.Group>
         <Button type="submit" variant="dark" onClick={setUpdateOrg}>Modifier</Button>
         </Form>
      :null}
      </>
    )
}
export default Profil