import React from "react";
import { Link } from "react-router-dom";
import user from './mesImages/user.jpg'
import Org from './mesImages/Org.jpg'
import Button from 'react-bootstrap/Button';


function RoleConnect(){
    return(
        <div className="role">
            
        <div className="user">
            <img src={user} className="userIcon" alt=""/>
            <Link to={'./login'} >
            <Button type="submit" variant="dark" className="rol w-100 mt-2">Connexion utilisateur</Button>
            </Link>
        </div>

        <div className="org">
            <img src={Org} className="orgIcon" alt=""/>
        <Link to={'./loginOrg'}>
        <Button type="submit" variant="dark" className=" rolo w-100 mt-2">Connexion organisateur</Button>
        </Link>
       </div>
       
    </div>

    )
}
export default RoleConnect