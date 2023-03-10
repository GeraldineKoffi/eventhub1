import React from "react";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button'
import Axios from "axios";

function EventBloc(){ 
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
const myStr=data.description;
const subStr=myStr.substring(0,100);
return(
<tr key={index}>
<th>{data.title}</th>
<th>{subStr}...</th> 
<th>{data.date}</th>
<th>{data.prix}</th>
<th>{data.actif.toString()}</th> 
<th><Button variant="dark" onClick={()=>change(Id,index)} >Desactiver</Button></th> 
</tr>
)
})
return (
    <div className="eventBloc">
<div className="eventL">
        <h3>Liste des évènements</h3>
</div>
<table>
                <tr>
                    <th style={{fontWeight:"bold"}}>Titre</th>
                    <th style={{fontWeight:"bold"}}>Description</th>
                    <th style={{fontWeight:"bold"}}>Date</th>
                    <th style={{fontWeight:"bold"}}>Prix</th>
                    <th style={{fontWeight:"bold"}}>Statut</th>
                    <th style={{fontWeight:"bold"}}>Editer</th>
                </tr>
      {arr}
      </table>
</div>
)
}
export default EventBloc