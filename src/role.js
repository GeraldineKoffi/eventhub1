import React from "react";
import { Link } from "react-router-dom";
import user from './mesImages/user.jpg'
import Org from './mesImages/Org.jpg'
import Button from 'react-bootstrap/Button';


function Role(){
    return(
        <div className="role">
            
            <div className="user">
                <img src={user} className="userIcon" alt=""/>
                <Link to={'./inscription'} >
                <Button type="submit" variant="dark" className="w-100 mt-2">Créer un compte utilisateur</Button>
                </Link>
            </div>

            <div className="org">
                <img src={Org} className="orgIcon" alt=""/>
            <Link to={'./inscriptionorg'}>
            <Button type="submit" variant="dark" className="w-100 mt-2">Créer un compte organisateur</Button>
            </Link>
           </div>
           
        </div>
    )
}export default Role