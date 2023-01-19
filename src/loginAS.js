import React, { useRef} from 'react'
import {Redirect, Link} from 'react-router-dom'
import axios from 'axios'

function LoginAS(){
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
        await axios.post('http://localhost:4000/Auth/Supadmin',{
            Mail,
            Pass
          })
          .then(response=>{
            
            { checked ? localStorage.setItem('remember', true) : localStorage.setItem('remember', false) }

            localStorage.setItem('access_token', response.data.access_token)
            localStorage.setItem('setRemember', true);
            localStorage.setItem('lastName', response.data.SuperAdmin.lastName)
            localStorage.setItem('firstName', response.data.SuperAdmin.firstName)
            localStorage.setItem('mail', response.data.SuperAdmin.mail)
            localStorage.setItem('telephone', response.data.SuperAdmin.telephone)
            localStorage.setItem('id', response.data.SuperAdmin.id)
            setRedirect(true)
          }
           )
         
        }catch(error){
          console.log("error try:", error)
        }
       
      }
    
    return (
        <div className='loginAS'>
        <form className='login' onSubmit={handleValidation}>

        <div className='head'>Login Super Admin</div><br/>

        <label>Email</label><br/>
        <input  placeholder='Entrer votre email' name='email' type="email" ref={emailInputRef}/><br/>
        <div className='error' ref={emailInputRefError}  style={{ color:"red"}}/>

        <label>Mot de passe</label><br/>
        <input  placeholder='Entrer votre mot de passe' type="password" name='password'ref={passwordInputRef}/><br/>
        <div className='error' ref={passwordInputRefError}  style={{ color:"red"}}/>

        <input type="checkbox" className='remember' value={checked} onChange={() => setChecked(!checked)}  />
        <label className='text'> Se souvenir de moi</label>  
          <button className='valid'>Valider</button><br/>
          {redirect? <Redirect to="/dashboardSup" />: null}
          </form>
               
   </div>
    )
}
export default LoginAS