import React ,{useState} from "react";
import {Link} from 'react-router-dom'
import Interest from './dashboard/interest'
import Profil from './dashboard/profil'
import  './dashboard/style.css'

function dashboard(){

    function logout(){
        localStorage.removeItem("access_token")
        localStorage.removeItem("lastName")
        localStorage.removeItem("firstName")
        localStorage.removeItem("phone")
        localStorage.removeItem("mail")
        localStorage.removeItem("id")

    }

    return(
        <div className="dashboard">
             <Link to={'./'}><button className="deconnect" onClick={logout}>Déconnexion</button></Link> 
           <Profil/>
           <Interest/>
        </div>
    )

}
export default dashboard