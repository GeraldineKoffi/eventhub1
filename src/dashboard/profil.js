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
   const [update,setUpdate]=useState(false);
   const [show, setShow]=useState(false)
   
   useEffect(()=>{
  
   },[update])
   
   const setUpdateUser = async()=>{
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
               setShow(!show)
               setUpdate(!update)
         }
         else if(!lastName && !firstName && !phone){
            setShow(!show)
            setUpdate(!update)
         }
         else if(lastName && !firstName && !phone){
            localStorage.setItem('lastName',response.data.lastName)
            setShow(!show)
            setUpdate(!update)
         }else if(!lastName && firstName && !phone){
            localStorage.setItem('firstName',response.data.firstName)
            setShow(!show)
            setUpdate(!update)
         }else if(!lastName && !firstName && phone){
            localStorage.setItem('phone',response.data.phone)
            setShow(!show)
            setUpdate(!update)
         }
           }) 
   
   }
   catch (err) {
      console.log("l'erreur est :", err);
   }
   
}
  
  function modif(){
    setShow(!show)
 }
 
    return( 
      <div className='profil'>
        <img src={utilisateur1} alt='' className='imgProfil'/>  
        <input type="file" className='img' accept='image/*'/>
        <div className='info'>
        <p>{ localStorage.getItem('lastName')} { localStorage.getItem('firstName')}</p> 
        <p>{localStorage.getItem('mail')}</p>
        <p>{ localStorage.getItem('phone')}</p>
        </div>
        <Button type="submit" variant="dark"  className="modif" onClick={modif}>Editer le profil</Button>
       {show? 
       <Form className="formModif">
        <h5>Modifier vos informations</h5>
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
         </Form.Group><br/>
         <Button type="submit" variant="dark" className="valid" onClick={setUpdateUser}>Modifier</Button>
         <Button type='reset'  className="valid"  variant="dark" onClick={modif} >Annuler</Button>
         </Form>
      :null}
      </div>
    )
}
export default Profil