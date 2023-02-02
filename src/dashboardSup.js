import React from "react"
import UserBloquer from './dashboard/userBloquer'
import OrgBloquer from './dashboard/orgBloquer'
import EventBloc from "./dashboard/eventBloc";
import {Link} from "react-router-dom"
import Button from "react-bootstrap/Button"


function dashboardAS(){
 
    return(
        <div className="dashboardAS">
          <Link to="./inscriptionAdmin">
            <Button variant="dark">Créer un admin</Button>
        </Link> 
        <div style={{marginTop:"20px"}}>
        <EventBloc />
        </div>
        <UserBloquer />
        <OrgBloquer />
        </div>
    )

}
export default dashboardAS