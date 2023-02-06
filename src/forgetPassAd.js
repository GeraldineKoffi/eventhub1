import React, {useState, useRef} from "react";
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function ForgetPassAd(){
    const [validated, setValidated] = useState(false);
    const [redirect, setRedirect] = useState(false)
    const newPassInputRef=useRef();
    const emailInputRef=useRef();
   
    const setUpdate = (event)=>{
        const pass=newPassInputRef.current.value;
        const mail=emailInputRef.current.value;
        const form = event.currentTarget;
        if (form.checkValidity() === false) { 
          event.stopPropagation();
        } 
        setValidated(true);
        try{
        axios.post("http://localhost:4000/admin/change",{mail,pass})
          
        setRedirect(true)
        }
     catch (err) {
        console.log("l'erreur est :", err);
     }
     
  }
    
    return(
        <Form noValidate validated={validated} onSubmit={setUpdate} className="login rounded p-4 p-sm-3">
        <Form.Label className="head">Modification de mot de passe</Form.Label>
         <Form.Group className="mb-3">
           <Form.Label>Email</Form.Label>
           <Form.Control
             required
             type="email"
             placeholder="Entrez votre email"
             name="email"
             ref={emailInputRef}
           />
           <Form.Control.Feedback type="invalid">Ce champs est requied!</Form.Control.Feedback>
         </Form.Group>
         <Form.Group className="mb-3">
           <Form.Label>Mot de passe</Form.Label>
           <Form.Control
             required
             type="password"
             placeholder="Entrez un nouveau mot de passe"
             name="confirm" 
             ref={newPassInputRef}
           />
           <Form.Control.Feedback type="invalid">Ce champs est requied!</Form.Control.Feedback>
         </Form.Group>
         <Button type="submit" variant="dark" className="btn btn-primary w-100 mt-2">Changer</Button>
        {redirect? <Redirect to="/loginAdmin" />: null}
    </Form>
    )
}
export default ForgetPassAd