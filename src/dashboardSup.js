import React from "react"
import UserBloquer from './dashboard/userBloquer'
import OrgBloquer from './dashboard/orgBloquer'
import EventBloc from "./dashboard/eventBloc";
import {Link} from "react-router-dom"
import Button from "react-bootstrap/Button"
import utilisateur1 from './dashboard/utilisateur1.png'
import AdminBloc from "./dashboard/adminBloc"

function dashboardAS(){
 
    return(
        <div className="dashboardAS">
        <div style={{display:"flex", marginLeft:"40px"}}>
        <img src={utilisateur1} alt='' className='imgProfil'/>  
        <input type="file" className='img' accept='image/*'/>
        <div className='info'>
        <p>{ localStorage.getItem('lastName')} { localStorage.getItem('firstName')}</p>
        <p>{ localStorage.getItem('mail')}</p>
        <p>{ localStorage.getItem('telephone')}</p>
        </div>
        </div>
          <Link to="./inscriptionAdmin">
            <Button variant="dark" className="créerA">Créer un admin</Button>
        </Link> 
        <AdminBloc />
        <div style={{marginTop:"20px"}}>
        <EventBloc />
        </div>
        <UserBloquer />
        <OrgBloquer />
        </div>
    )

}
export default dashboardAS