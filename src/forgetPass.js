import React, {useState, useRef} from "react";
import {Redirect} from 'react-router-dom'
import axios from 'axios'

function ForgetPass(){
    const [redirect, setRedirect] = useState(false)
    const newPassInputRef=useRef();
    const emailInputRef=useRef();
   
    const setUpdate = async()=>{
        const pass=newPassInputRef.current.value;
        const mail=emailInputRef.current.value;
        try{
         await  axios.post("http://localhost:4000/user/change",{mail,pass})
          
        setRedirect(true)
        }
     catch (err) {
        console.log("l'erreur est :", err);
     }
     
  }
    
    return(
    <form className="login" onSubmit={setUpdate}>
        <h3 className="modif">Mot de passe oublié</h3>
        <div className="forget">
        <label>Email</label><br/>
        <input placeholder="Entrer un email" name="email" ref={emailInputRef} type="email"/><br/>
        <label>Nouveau mot de passe:</label><br/>
        <input placeholder="Entrer le nouveau mot de passe" type="password" name="confirm" ref={newPassInputRef}/><br/>
        <button className="valid">Changer</button>
        </div>
        {redirect? <Redirect to="/login" />: null}
    </form>
    )
}
export default ForgetPass