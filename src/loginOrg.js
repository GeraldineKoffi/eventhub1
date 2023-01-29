import React, { useState, useRef } from 'react';
import {Redirect, Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import axios from 'axios'

function LoginOrg(){

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
      await axios.post('http://localhost:4000/Auth/organisateur',{
        Mail,
        Pass
      })
      .then(response=>{
        {checked ? localStorage.setItem('remember', true): localStorage.setItem('remember', false)}
        
            localStorage.setItem('access_token', response.data.access_token)
            localStorage.setItem('setRemember', true);
            localStorage.setItem('mail', response.data.organisateur.mail)
            localStorage.setItem('tel', response.data.organisateur.tel)
            localStorage.setItem('adresse', response.data.organisateur.adresse)
            localStorage.setItem('id', response.data.organisateur.id)
            localStorage.setItem('gerant', response.data.organisateur.gerant)
            localStorage.setItem('num_RCS', response.data.organisateur.num_RCS)
            localStorage.setItem('role', "organisateur")
        setRedirect(true)    
      }) 
     
        
    }catch(error){
      if(error.response){
      alert(error.response.data.message)
      }
      else alert("Mot de passe incorrect")
    }
    
  };

  return (
   
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="login rounded p-4 p-sm-3">
       <Form.Label className="head">Connexion</Form.Label>
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
        <Link to={'/forgetPass'} className="pass">Mot de passe oublié?</Link>
    </Form.Group>
      <Button type="submit" variant="dark" className="w-100 mt-2">Se connecter</Button>
      {redirect ? <Redirect to ="/dashboardOrg"/>:null}
      <div className="compte">
      <span>Vous n'avez pas de compte,</span><Link to={'./role'} className="newCompte">Créer un compte?</Link>
      </div>
    </Form>
  );
}

export default LoginOrg