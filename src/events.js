import React, { useState,useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import {Redirect} from 'react-router-dom';


function Events() {
  const [validated, setValidated] = useState(false);
  const  [redirect, setRedirect]=useState(false);

  const titreInputRef= useRef();
  const descriptInputRef= useRef();
  const dayInputRef=useRef();
  const statutInputRef=useRef();
  const priceInputRef=useRef();
  const nbreInputRef=useRef(); 
  const actifInputRef=useRef();
  const fileInputRef=useRef();

  const handleSubmit = async(event) => {
    event.preventDefault();
      const title= titreInputRef.current.value; 
      const description= descriptInputRef.current.value; 
      const date = dayInputRef.current.value; 
      const prix=priceInputRef.current.value;
      const statut= statutInputRef.current.value;
      const actif=actifInputRef.current.value;
      const form = event.currentTarget;
      const organisateurId=localStorage.getItem('id');
      if (form.checkValidity() === false) {
        event.stopPropagation();
      }
      if(statut==="gratuit"){
        prix=0
      }
      setValidated(true);

      try {
      const Events = await axios.post("http://localhost:4000/event",{
            title,
            description,
            date,
            statut,
            prix,
            actif,
            organisateurId
          })
    
          const nbre=nbreInputRef.current.value;
      for (let i=0; i<=nbre;i++){
        const event=Events.data.id
        axios.post("http://localhost:4000/ticket", {
         event
      })
    }
    setRedirect(true)
         
        } catch (err) {
          console.log("l'erreur est :", err);
        }
       
  
      }
/*
  const [image, setImage]=useState('')
  const handleChange=(e)=>{
    console.log(e.target.files)
    setImage(e.target.files[0])
  }
  const Api=()=>{
    const formData=new FormData()
    formData.append('image',image)
    axios.post('http://localhost:3000/mesImages', formData).then((res)=>{
      console.log(res)
    })
  }
*/

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="event rounded p-4 p-sm-3">
    <Form.Label className="head">Création d'évènement</Form.Label>
        <Form.Group className="mb-3">
          <Form.Label>Titre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Donnez un titre à votre évènement"
            name="titre"
            ref={titreInputRef}
              />
          <Form.Control.Feedback type="invalid">Ce champs est requied</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control required as="textarea" rows={3} 
          name="description" ref={descriptInputRef} 
          placeholder="Décrivez votre évènement"/>
          <Form.Control.Feedback type="invalid">
          Ce champs est requied!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control
            required
            type="date"
            placeholder="Entrez la date"
            name="date"
           ref={dayInputRef}
          />
          <Form.Control.Feedback type="invalid">Ce champs est requied!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Statut</Form.Label>
            <Form.Select required name="statut" ref={statutInputRef}>
              <option>Payant</option>
              <option>Gratuit</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
            Ce champs est requied!
            </Form.Control.Feedback>
        </Form.Group>
      
        <Form.Group className="mb-3">
          <Form.Label>Prix du ticket</Form.Label>
          <Form.Control type="text" placeholder="prix" required name="prix" ref={priceInputRef}
           />
          <Form.Control.Feedback type="invalid">
            Ce champs est requied!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Nombre de ticket</Form.Label>
          <Form.Control type="text" placeholder="Entrez le nombre de ticket disponible" 
          required name="nbre" ref={nbreInputRef} />
          <Form.Control.Feedback type="invalid">
           Ce champs est requied!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Actif</Form.Label>
          <Form.Control type="text" placeholder="Zip" required name="actif" ref={actifInputRef} />
          <Form.Control.Feedback type="invalid">
          Ce champs est requied!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
      <Form.Label>Ajouter des images</Form.Label>
      <Form.Control type="file" multiple required />
      <Form.Control.Feedback type="invalid">
          Ce champs est requied!
          </Form.Control.Feedback>
      </Form.Group>
      <Button type="submit" variant="dark" className="w-100 mt-2">Valider</Button>
      {redirect ? <Redirect to="/#event" />:null}
    </Form>
  );
}
export default Events;