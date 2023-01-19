import React from "react";
import {Link} from 'react-router-dom'
import { useEffect, useState } from "react";
import Axios from "axios";
import  './dashboard/style.css'
import UserBloquer from './dashboard/userBloquer'
import OrgBloquer from './dashboard/orgBloquer'


function dashboardAS(){
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
    <tr key={index}>
    <td>{data.title}</td><td> {data.description}</td><td> {data.date}</td><td> {data.prix}</td><td>{data.actif.toString()}</td> <td><button onClick={()=>change(Id,index)} >Desactiver l'évènement</button></td>    

    </tr>
    )
})
    return(
        <div className="dashboardSup">
          <Link to="./inscriptionAdmin"><button className='valider'>Créer un admin</button></Link>  
           <h1>Liste des évènements</h1>
           <table border={1} className="tableEvent">
            <tr><td>Title</td><td>Description</td><td>Date</td><td>Price</td><td>Actif</td><td>Edit</td></tr>
           {arr}
           </table>
           <br/>
           
           <UserBloquer className="userBloquer"/><br/>
           
           <OrgBloquer className="orgBloquer"/>

           
        </div>
    )

}
export default dashboardAS