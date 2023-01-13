import React, { useRef } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'


function Inscription() {
  const [redirect, setRedirect] = React.useState(false)
  const nameInputRef = useRef();
  const nameInputRefError = useRef();
  const prenomInputRef = useRef();
  const prenomInputRefError = useRef();
  const emailInputRef = useRef();
  const emailInputRefError = useRef();
  const telInputRef = useRef();
  const telInputRefError = useRef();
  const passwordInputRef = useRef();
  const passwordInputRefError = useRef();
  const passwordBixInputRef = useRef();
  const passwordBixInputRefError = useRef();



  const handleSubmit = async (event) => {
    event.preventDefault()
    const lastName = nameInputRef.current.value;
    const firstName = prenomInputRef.current.value
    const mail = emailInputRef.current.value;
    const pass = passwordInputRef.current.value;
    const phone = telInputRef.current.value;
    const confirm = passwordBixInputRef.current.value;
    if (!lastName || !firstName || !mail || !phone || !pass || !confirm || pass !== confirm || phone.length < 10 || phone.length > 10) {

      if (!lastName) {
        nameInputRefError.current.innerHTML = "Ce champs est requis!"
      } else {
        nameInputRefError.current.innerHTML = ""

      }
      if (!firstName) {
        prenomInputRefError.current.innerHTML = "Ce champs est requis!"
      } else {
        prenomInputRefError.current.innerHTML = ""
      }
      if (!mail) {
        emailInputRefError.current.innerHTML = "Ce champs est requis!"
      } else {
        emailInputRefError.current.innerHTML = ""
      }
      if (!phone) {
        telInputRefError.current.innerHTML = "Ce champs est requis!"
      } else if (phone.length < 10 || phone.length > 10) {
        telInputRefError.current.innerHTML = "Resaississez le numéro de téléphone"
      }
      else {
        telInputRefError.current.innerHTML = ""
      }
      if (!pass) {
        passwordInputRefError.current.innerHTML = "Ce champs est requis!"
      } else {
        passwordInputRefError.current.innerHTML = ""
      }
      if (!confirm) {
        passwordBixInputRefError.current.innerHTML = "Ce champs est requis!"
      } else
        if (pass !== confirm) {
          passwordBixInputRefError.current.innerHTML = "Le mot de passe est différent du premier"
        }
        else {
          passwordBixInputRefError.current.innerHTML = ""
          return
        }
    }
    else {
      nameInputRefError.current.innerHTML = ""
      prenomInputRefError.current.innerHTML = ""
      emailInputRefError.current.innerHTML = ""
      telInputRefError.current.innerHTML = ""
      passwordInputRefError.current.innerHTML = ""
      passwordBixInputRefError.current.innerHTML = ""


      try {
        await axios.post("http://localhost:4000/user", {
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
    }


  }


  return (
    <form className='signup' onSubmit={handleSubmit}>
      <div className='head'>SignUp User</div><br />
      <label>Nom </label><br />
      <input placeholder='Entrer votre Nom ' id="name" ref={nameInputRef} /><br />
      <div className='error' ref={nameInputRefError} style={{ color: "red" }} />
      <label>Prénom </label><br />
      <input placeholder='Entrer votre prénom ' id="prenom" ref={prenomInputRef} /><br />
      <div className='error' ref={prenomInputRefError} style={{ color: "red" }} />

      <label>Email</label><br />
      <input placeholder='Entrer un email' type="email" id="email" ref={emailInputRef} /><br />
      <div className='error' ref={emailInputRefError} style={{ color: "red" }} />
      <label>Téléphone</label><br />
      <input placeholder='Entrer votre numéro de téléphone' id="telephone" ref={telInputRef} /><br />
      <div className='error' ref={telInputRefError} style={{ color: "red" }} />
      <label>Mot de passe</label><br />
      <input placeholder='Entrer un mot de passe' id="password" type="password" ref={passwordInputRef} /><br />
      <div className='error' ref={passwordInputRefError} style={{ color: "red" }} />
      <label>Confirmer le mot de passe</label><br />
      <input placeholder='Confirmer le mot de passe' id="passwordBix" type="password" ref={passwordBixInputRef} /><br />
      <div className='error' ref={passwordBixInputRefError} style={{ color: "red" }} />

      <button className='valid'>S'inscrire</button>
      {redirect ? <Redirect to="/login" /> : null}


    </form>

  )
}
export default Inscription