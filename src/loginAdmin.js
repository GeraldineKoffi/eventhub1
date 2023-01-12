import React, { useRef} from 'react'
import {Redirect, Link} from 'react-router-dom'
import axios from 'axios'

function LoginAdmin(){
    const [redirect, setRedirect] = React.useState(false)
    const emailInputRef= useRef();
    const emailInputRefError=useRef();
    const passwordInputRef= useRef();
    const passwordInputRefError=useRef();
    const[checked, setChecked] = React.useState();

   
   const handleValidation= async(event)=>{
    
        event.preventDefault();
        const Mail= emailInputRef.current.value; 
        const Pass= passwordInputRef.current.value;
        if(!Mail){
          emailInputRefError.current.innerHTML="Ce champs est requis!"
        }else{
          emailInputRefError.current.innerHTML=""
        }
        if(!Pass){
          passwordInputRefError.current.innerHTML="Ce champs est requis!"
        }else{
          passwordInputRefError.current.innerHTML=""
        }
        try{
        await axios.post('http://localhost:4000/Auth/admin',{
            Mail,
            Pass
          })
          .then(response=>{
            
            { checked ? localStorage.setItem('remember', true) : localStorage.setItem('remember', false) }

            localStorage.setItem('access_token', response.data.access_token)
            localStorage.setItem('setRemember', true);
            localStorage.setItem('lastName', response.data.admin.lastName)
            localStorage.setItem('firstName', response.data.admin.firstName)
            localStorage.setItem('mail', response.data.admin.mail)
            localStorage.setItem('telephone', response.data.admin.telephone)
            localStorage.setItem('id', response.data.admin.id)
            setRedirect(true)
          }
           )
         
        }catch(error){
          console.log("error try:", error)
        }
       
      }
    
    return (
        <form className='login' onSubmit={handleValidation}>

        <div className='head'>Login Admin</div><br/>

        <label>Email</label><br/>
        <input  placeholder='Entrer votre email' name='email' type="email" ref={emailInputRef}/><br/>
        <div className='error' ref={emailInputRefError}  style={{ color:"red"}}/>

        <label>Mot de passe</label><br/>
        <input  placeholder='Entrer votre mot de passe' type="password" name='password'ref={passwordInputRef}/><br/>
        <div className='error' ref={passwordInputRefError}  style={{ color:"red"}}/>

        <input type="checkbox" className='remember' value={checked} onChange={() => setChecked(!checked)}  />
        <label className='text'> Se souvenir de moi</label>

         <Link to={'/forgetPass'} className='pass'>Mot de passe oublié?</Link><br />
         
          <button className='valid'>Valider</button><br/>
          {redirect? <Redirect to="/dashboardAd" />: null}
          <Link to={'./'} className='newcompte'>
            Vous n'avez pas de compte, <span>Créer un compte?</span>
          </Link>
          </form>
               

    )
}
export default LoginAdmin