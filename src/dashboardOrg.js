import React, {useState} from "react";
import {Link} from 'react-router-dom'
import ProfilOrg from './dashboard/profilOrg'
import  './dashboard/style.css'


function dashboardOrg(){
    
    const logout=()=>{
        localStorage.removeItem('access_token')
        localStorage.removeItem("name")
        localStorage.removeItem("tel")
        localStorage.removeItem("adresse")
        localStorage.removeItem("mail")
        localStorage.removeItem("id")
        localStorage.removeItem("gerant")
        localStorage.removeItem("num_RCS")
    }
    return(
        <div className="dashboard">
             <Link to={'./'}><button className="deconnect" onClickCapture={logout}>Déconnexion</button></Link> 
             <Link to={'./inscritEvent'}><button className="event">Personnes inscrits à votre évènements</button></Link>   
             <Link to={'./modifEvent'}><button className="event1">Modifier un évènement</button></Link> 
             <Link to={'./events'}><button className="event2">Créer un nouvel évènement</button></Link> 

           <ProfilOrg/>
        </div>
    )

}
export default dashboardOrg