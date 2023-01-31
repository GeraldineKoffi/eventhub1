import React, { useState, useRef } from 'react';
import {Redirect, Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import axios from 'axios'

function LoginAdmin(){

  const [validated, setValidated] = useState(false);
  const emailInputRef=useRef();
  const passInputRef=useRef();
  const [checked , setChecked]=useState()
  const  [redirect, setRedirect]=useState(false)
  
  const handleSubmit = async(event) => {
    event.preventDefault();

    const Mail= emailInputRef.current.value;
    const Pass= passInputRef.current.value;

    const form = event.currentTarget;
    if (form.checkValidity() === false) { 
      event.stopPropagation();
    } 
    setValidated(true);
    try{
      await axios.post('http://localhost:4000/Auth/admin',{
        Mail,
        Pass
      })
      .then(response=>{
        {checked ? localStorage.setItem('remember', true): localStorage.setItem('remember', false)}
        
        localStorage.setItem('access_token', response.data.access_token)
        localStorage.setItem('setRemember', true);
        localStorage.setItem('lastName', response.data.admin.lastName)
        localStorage.setItem('firstName', response.data.admin.firstName)
        localStorage.setItem('mail', response.data.admin.mail)
        localStorage.setItem('telephone', response.data.admin.telephone)
        localStorage.setItem('role',"admin")
        localStorage.setItem('id', response.data.admin.id)
        setRedirect(true)
      }) 
     
    }catch(error){
      console.log("error try:", error)
    }
    
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="login rounded p-4 p-sm-3">
       <Form.Label className="head">Connexion Admin</Form.Label>
        <Form.Group clssName="mb-3">
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
            placeholder="Entrez votre mot de passe"
            name="password"
            ref={passInputRef}
          />
          <Form.Control.Feedback type="invalid">Ce champs est requied!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="check">
        <Form.Check
        type="checkbox"
        value={checked}
        onchange={()=>setChecked(!checked)}
          label="Se souvenir de moi"
        />
        <Link to={'/forgetPassAd'} className="pass">Mot de passe oublié?</Link>
    </Form.Group>
      <Button type="submit" variant="dark" className="w-100 mt-2">Se connecter</Button>
      {redirect ? <Redirect to ="/dashboardAd"/>:null}
    </Form>
  );
}

export default LoginAdmin