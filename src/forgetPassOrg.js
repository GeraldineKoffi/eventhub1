import React, {useState, useRef} from "react";
import {Redirect} from 'react-router-dom'
import axios from 'axios'

function ForgetPass(){
    const [redirect, setRedirect] = useState(false)
    const newPassInputRef=useRef();
   
    const setUpdate = async()=>{
        const pass=newPassInputRef.current.value;
        try{
         await  axios.post("http://localhost:4000/user",{
            pass
           })
        setRedirect(true)
        }
     catch (err) {
        console.log("l'erreur est :", err);
     }
     
  }
    
    return(
    <form className="login">
        <h3 className="modif">Mot de passe oublié</h3>
        <div className="forget">
        <label>Entrer un nouveau mot de passe:</label><br/>
        <input placeholder="Entrer un nouveau mot de passe" name="pass" ref={newPassInputRef} type="password"/><br/>
        <label>Confirmer le nouveau mot de passe:</label><br/>
        <input placeholder="Confirmer le nouveau mot de passe" type="password" name="confirm"/><br/>
        <button className="valid" onClick={setUpdate}>Changer</button>
        {redirect? <Redirect to={"./login"} />: null}
        </div>
    </form>
    )
}
export default ForgetPass