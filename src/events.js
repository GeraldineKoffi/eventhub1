import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function Events() {
  const [validated, setValidated] = useState(false);
  const [image, setImage]=useState("");

  const fileOnchange=(e)=>{
    setImage(e.target.files[0])
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    let formData=new FormData();
    formData.append("",image)
  }


  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>

        <Form.Group as={Col} md="4">
          <Form.Label>Titre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Donnez un titre à votre évènement"
              />
          <Form.Control.Feedback type="invalid">Ce champs est requied</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Description</Form.Label>
          <Form.Control required as="textarea" rows={3} placeholder="Décrivez votre évènement"/>
          <Form.Control.Feedback type="invalid">
          Ce champs est requied!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Date</Form.Label>
          <Form.Control
            required
            type="date"
            placeholder="Entrez la date"
          />
          <Form.Control.Feedback type="invalid">Ce champs est requied!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Statut</Form.Label>
            <Form.Select required>
              <option>Payant</option>
              <option>Gratuit</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
            Ce champs est requied!
            </Form.Control.Feedback>
        </Form.Group>
      
        <Form.Group as={Col} md="4">
          <Form.Label>Prix du ticket</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Ce champs est requied!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Nombre de ticket</Form.Label>
          <Form.Control type="text" placeholder="Entrez le nombre de ticket disponible" required />
          <Form.Control.Feedback type="invalid">
           Ce champs est requied!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Actif</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
          Ce champs est requied!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
      <Form.Label>Ajouter des images</Form.Label>
      <Form.Control type="file" multiple onchange={fileOnchange}/>
      <Form.Control.Feedback type="invalid">
          Ce champs est requied!
          </Form.Control.Feedback>
      </Form.Group>
      <Button type="submit">Valider</Button>
    </Form>
  );
}
export default Events;