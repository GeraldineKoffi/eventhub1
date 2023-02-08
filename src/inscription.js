import React, { useState, useRef } from 'react';
import {Redirect} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';


function Inscription() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [validated, setValidated] = useState(false);
  const nameInputRef = useRef();
  const prenomInputRef = useRef();
  const emailInputRef = useRef();
  const telInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordBixInputRef = useRef();
  const  [redirect, setRedirect]=useState(false)
  
  const handleSubmit = async(event) => {
    event.preventDefault();

    const lastName = nameInputRef.current.value;
    const firstName = prenomInputRef.current.value
    const mail = emailInputRef.current.value;
    const pass = passwordInputRef.current.value;
    const phone = telInputRef.current.value;
    const confirm = passwordBixInputRef.current.value;

    const form = event.currentTarget;
    if (form.checkValidity() === false || phone.length < 10 || phone.length > 10 || pass!=confirm) { 
      event.stopPropagation();
    } 

    setValidated(true);
    try{
      await axios.post("http://localhost:4000/user",{
        lastName,
          firstName,
          mail,
          pass,
          phone
      })
     
      setRedirect(true)

    } catch (err) {
      console.log("l'erreur est :", err);
    }
  
  };

  return (
   
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="signUp rounded p-4 p-sm-3">
       <Form.Label className="head">Inscription</Form.Label>
       <Form.Group className="mb-3">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            required
            placeholder="Entrez votre nom"
            name="name"
            ref={nameInputRef}
          />
          <Form.Control.Feedback type="invalid">Ce champs est requied!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Prénom</Form.Label>
          <Form.Control
            required
            placeholder="Entrez votre prénom"
            name="prenom"
            ref={prenomInputRef}
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
          <Form.Label>Téléphone</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Entrez votre numéro de téléphone"
            name="phone"
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
      {redirect ? <Redirect to ="/login"/>:null}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>Vous êtes bien inscrit , connectez-vous maintenant</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
}
export default Inscription