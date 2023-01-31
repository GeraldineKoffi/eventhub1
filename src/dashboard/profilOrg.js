import utilisateur1 from './utilisateur1.png'
import axios from 'axios'
import React, {useEffect, useState,useRef} from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';

function ProfilOrg(){   
   const idInputRef=useRef();
   const nameInputRef=useRef();
   const telInputRef=useRef();
   const gerantInputRef=useRef();
   const [update,setUpdate]=useState(false)

   useEffect(()=>{
  
   },[update])
   
   const setUpdateOrg = async()=>{
      const name= nameInputRef.current.value;
      const tel=telInputRef.current.value
      const gerant= gerantInputRef.current.value; 
      const id = idInputRef.current.value;
     
      try{
         axios.patch(`http://localhost:4000/organisateur/`+ id, {name, gerant, tel})
         .then((response)=>{
               if(name && gerant && tel){
               localStorage.setItem('name', response.data.name)
               localStorage.setItem('tel', response.data.tel)
               localStorage.setItem('gerant', response.data.gerant)
               setShow3(!show3)
               setUpdate(!update)
               }
               else if(!name && !gerant && !tel){
                  setShow3(!show3)
                  setUpdate(!update)
               }
               else if(name && !gerant && !tel){
                  localStorage.setItem('name',response.data.name)
                  setShow3(!show3)
                  setUpdate(!update)
               }else if(!name && gerant && !tel){
                  localStorage.setItem('gerant',response.data.gerant)
                  setShow3(!show3)
                  setUpdate(!update)
               }else if(!name && !gerant && tel){
                  localStorage.setItem('tel',response.data.tel)
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
      <div className='profilOrg'>
        <img src={utilisateur1} alt='' className='imgProfil'/>  
        <input type="file" className='img' accept='image/*'/>
        <div className='info'>
        <p>{ localStorage.getItem('name')}</p> 
        <p>{ localStorage.getItem('mail')}</p>
        <p>{ localStorage.getItem('tel')}</p>
        <p>{ localStorage.getItem('adresse')}</p>
        <p>{ localStorage.getItem('gerant')}</p>
        <p>{ localStorage.getItem('num_RCS')}</p>
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
         <Form.Control placeholder={ localStorage.getItem('name')} ref={nameInputRef} />
         </Form.Group>
         <Form.Group>
         <Form.Label>Téléphone</Form.Label>
         <Form.Control placeholder={ localStorage.getItem('tel')} ref={telInputRef} />
         </Form.Group>
         <Form.Group>
         <Form.Label>Gérant</Form.Label>
         <Form.Control placeholder={ localStorage.getItem('gerant')} ref={gerantInputRef} />
         </Form.Group>
         <Button type="submit" variant="dark" onClick={setUpdateOrg}>Modifier</Button>
         </Form>
      :null}
      </div>
    )
}
export default ProfilOrg