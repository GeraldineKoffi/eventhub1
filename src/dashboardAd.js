import React from "react";

import { useEffect, useState } from "react";
import Axios from "axios";
import ProfilAD from './dashboard/profilAD'
import UserBloquer from './dashboard/userBloquer'
import OrgBloquer from './dashboard/orgBloquer'
import Button from 'react-bootstrap/Button'


function dashboardAd(){
    const [data, setDate] = useState([])
    const [update,setUpdate]=useState(false)
   

 const change= async(id,index)=>{
     
    Axios.delete("http://localhost:4000/event/"+id)
        .then(
            setUpdate(!update)
        )
 }
    
    useEffect(() => {
        Axios.get("http://localhost:4000/event")
            .then(res => {
                setDate(res.data)
                console.log(res.data);
            }
            ).catch(err => console.log(err))
    },[update] 
    );   
     const arr = data
   
  
.map((data, index) => {
    var Id=data.id
    return(
    <div key={index}>
    <hr/>
    <p>{data.title}  {data.description}  {data.date}  {data.prix} {data.actif.toString()} 
    <Button variant="dark" onClick={()=>change(Id,index)} >Desactiver l'évènement</Button></p> 
    </div>
    )
})
    return(
        <div className="dashboard">
           <ProfilAD/>
           <div className="eventL">
           <h4>Liste des évènements</h4>
           {arr}
           </div>
           <UserBloquer/>
           
           <OrgBloquer/>

           
        </div>
    )

}
export default dashboardAd