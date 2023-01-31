import React, { useState, useRef } from 'react';
import {Redirect} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'

function InscriptionOrg() {
  const [validated, setValidated] = useState(false);
  const  [redirect, setRedirect]=useState(false)
  const nameInputRef= useRef();
  const adressInputRef=useRef();
  const emailInputRef= useRef();
  const telInputRef= useRef();
  const passwordInputRef= useRef();
  const passwordBixInputRef= useRef();
  const gerantInputRef=useRef();
  const numRcsInputRef=useRef();
   
  const handleSubmit = async(event) => {
    event.preventDefault();

    const name= nameInputRef.current.value;
    const mail= emailInputRef.current.value; 
    const pass= passwordInputRef.current.value;
    const tel= telInputRef.current.value; 
    const adresse= adressInputRef.current.value; 
    const gerant= gerantInputRef.current.value;
    const num_RCS= numRcsInputRef.current.value;
    const confirm=passwordBixInputRef.current.value;

    const form = event.currentTarget;
    if (form.checkValidity() === false || tel.length < 10 || tel.length > 10 || pass!=confirm) { 
      event.stopPropagation();
    } 

    setValidated(true);
    try{
      await axios.post("http://localhost:4000/organisateur",{
        name,
        mail,
        pass,
        tel,
        adresse,
        gerant,
        num_RCS
      }
      )
      setRedirect(true)

    } catch (err) {
      console.log("l'erreur est :", err);
    }
  
  };

  return (
   
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="signUp rounded p-4 p-sm-3">
       <Form.Label className="head">Inscription</Form.Label>
       <Form.Group className="mb-3">
          <Form.Label>Nom Entreprise</Form.Label>
          <Form.Control
            required
            placeholder="Entrez votre nom"
            name="name"
            ref={nameInputRef}
          />
          <Form.Control.Feedback type="invalid">Ce champs est requied!</Form.Control.Feedback>
        </Form.Group>
      
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
          <Form.Label>Gerant</Form.Label>
          <Form.Control
            required
            placeholder="Entrez votre prénom"
            name="gerant"
            ref={gerantInputRef}
          />
          <Form.Control.Feedback type="invalid">Ce champs est requied!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Adresse</Form.Label>
          <Form.Control
            required
            placeholder="Entrez votre prénom"
            name="adresse"
            ref={adressInputRef}
          />
          <Form.Control.Feedback type="invalid">Ce champs est requied!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Numéro RCS</Form.Label>
          <Form.Control
            required
            placeholder="Entrez votre prénom"
            name="numRcs"
            ref={numRcsInputRef}
          />
          <Form.Control.Feedback type="invalid">Ce champs est requied!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Téléphone</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Entrez votre numéro de téléphone"
            name="tel"
            ref={telInputRef}
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
            ref={passwordInputRef}
          />
          <Form.Control.Feedback type="invalid">Ce champs est requied!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirmer le mot de passe</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Confirmez votre mot de passe"
            name="password"
            ref={passwordBixInputRef}
          />
          <Form.Control.Feedback type="invalid">Ce champs est requied!</Form.Control.Feedback>
        </Form.Group>
      <Button type="submit" variant="dark" className="w-100 mt-2">S'inscrire</Button>
      {redirect ? <Redirect to ="/loginOrg"/>:null}
    </Form>
  );
}
export default InscriptionOrg