import React from "react";

import { useEffect, useState } from "react";
import Axios from "axios";
import ProfilAD from './dashboard/profilAD'
import  './dashboard/style.css'
import UserBloquer from './dashboard/userBloquer'
import OrgBloquer from './dashboard/orgBloquer'
import {Link} from 'react-router-dom'

function dashboardAd(){
    const [data, setDate] = useState([])
    const [search, setSearch]=useState([])
    const logout=()=>{
        localStorage.removeItem('access_token')
        localStorage.removeItem("lastNname")
        localStorage.removeItem("telephone")
        localStorage.removeItem("firstName")
        localStorage.removeItem("mail")
        localStorage.removeItem("id")
    }
     
    useEffect(() => {
        Axios.get("http://localhost:4000/event")
            .then(res => {
                setDate(res.data)
                console.log(res.data);
            }
            ).catch(err => console.log(err))
    },[] 
    );   

       const handleSearch=(e)=>{
    let value = e.target.value;
    setSearch(value)
   }
     const arr = data
   
  .filter((val)=>{
          return val.title.includes(search)
  })
  
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
           <table>
            <tr><td>Title</td><td>Description</td><td>Date</td><td>Price</td><td>Actif</td><td>Edit</td></tr>
           {arr}
           </table>
           <br/>
           <UserBloquer/><br/>
           <h3></h3>
           <OrgBloquer/>
           <Link to={'./'}><button className="deconnect" onClickCapture={logout}>Déconnexion</button></Link> 

           
        </div>
    )

}
export default dashboardAd