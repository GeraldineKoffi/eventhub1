import {useEffect} from 'react'
import React from "react";
import {Link} from 'react-router-dom'
import menu from './mesImages/menu.png'


function Header( { update, setUpdate } ){
    const [show, setShow] = React.useState(false)
    //  const  [update, setUpdate]=React.useState(false)
    useEffect(()=>{

     },[update])
     function Menu(){
        setShow(!show)
     }
    
     function logout(){
        localStorage.removeItem("access_token")
        localStorage.removeItem("lastName")
        localStorage.removeItem("firstName")
        localStorage.removeItem("phone")
        localStorage.removeItem("mail")
        localStorage.removeItem("id")
        setUpdate(true)
    }
    return(
             <div className="header">
         <Link to={'./'}><div className="logo"> E-venT Hub</div></Link>  
        <div className="menu" onClick={Menu}><img src={menu} alt="menu" width="55px" /></div>
        {!localStorage.getItem('id') ?
        <div className="menuAll"> 
            <Link to={'./Role'}><button id="link">Inscription</button></Link><br/>
            <Link to={'/roleConnect'}><button id="link" >Connexion</button></Link><br/>
            <Link to={'./eventList'}><button id="link">Evènements</button></Link> 
        </div>:
          <div className="menuAll">
            
          <Link to={'./Role'}><button id="link">Inscription</button></Link><br/>
          <Link to={'/roleConnect'}><button id="link" >Connexion</button></Link><br/>
          <Link to={'/'}><button id="link" onClick={logout} >Déconnexion</button></Link><br/>
          <Link to={'./eventList'}><button id="link">Evènements</button></Link> 
      </div>}

      {show? <div className="menuAl">
                
    <Link to={'./Role'}><button id="link">Inscription</button></Link><br/>
     <Link to={'/roleConnect'}><button id="link" >Connexion</button></Link><br/>
     <Link to={'./eventList'}><button id="link">Evènements</button></Link> 
 </div>:null}
        
        </div>
    )
}
export default Header;