import React from "react";

import { useEffect, useState } from "react";
import Axios from "axios";
import ProfilAD from './dashboard/profilAD'
import  './dashboard/style.css'
import UserBloquer from './dashboard/userBloquer'
import OrgBloquer from './dashboard/orgBloquer'


function dashboardAd(){
    const [data, setDate] = useState([])
    
    useEffect(() => {
        Axios.get("http://localhost:4000/event")
            .then(res => {
                setDate(res.data)
                console.log(res.data);
            }
            ).catch(err => console.log(err))
    },[] 
    );   
     const arr = data
   
  
.map((data, index) => {
    return(
    <tr key={index}>
    <td>{data.title}</td><td> {data.description}</td><td> {data.date}</td><td> {data.prix}</td><td>{data.actif}</td> <td><button >Desactiver l'évènement</button></td>    

    </tr>
    )
})
    return(
        <div className="dashboardAd">
           <ProfilAD/>
           <h1>Liste des évènements</h1>
           <table border={1} className="tableEvent">
            <tr><td>Title</td><td>Description</td><td>Date</td><td>Price</td><td>Actif</td><td>Edit</td></tr>
           {arr}
           </table>
           <br/>
           <UserBloquer/><br/>
           <h3></h3>
           <OrgBloquer/>

           
        </div>
    )

}
export default dashboardAd