import React, { useState } from "react"
import UserBloquer from './dashboard/userBloquer'
import OrgBloquer from './dashboard/orgBloquer'
import EventBloc from "./dashboard/eventBloc";
import {Link} from "react-router-dom"
import Button from "react-bootstrap/Button"
import AdminBloc from "./dashboard/adminBloc"
import ProfilAS from './dashboard/profilAS'
        
function dashboardAS(){

    return(
        <div className="dashboardAS">
          <Link to="./inscriptionAdmin">
            <Button variant="dark" className="créerA">Créer un admin</Button>
        </Link> 
        <ProfilAS />
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