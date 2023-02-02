import React from 'react'
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';


function OrgBloquer() {
const [data, setDate] = useState([])
const [update,setUpdate]=useState(false)
   

 const change= async(id,index)=>{
     
    Axios.delete("http://localhost:4000/organisateur/"+id)
        .then(
            setUpdate(!update)
        )
 }
 
useEffect(() => {
    Axios.get("http://localhost:4000/organisateur")
        .then(res => {
            setDate(res.data)
        }
        ).catch(err => console.log(err))
},[update] 
);
const arr = data
.map((data, index) => {
    var Id=data.id
    return(
        <tr key={index}>
            
        <th>{data.name}</th>
        <th> {data.adresse} </th>
        <th>{data.mail}</th>
        <th> {data.gerant}</th>
        <th>{data.tel}</th>
        <th> {data.num_RCS}</th>
        <th> {data.actif}</th>
        <th><Button variant="dark" onClick={()=>change(Id,index)} >Désactiver</Button></th>
        </tr>
    )
})
return(
    <div className='orgBloquer'>
        <div className='headOrg'>
        <h3>Liste des organisateurs</h3>
        </div>
        <table>     
            <tr>
                <th style={{fontWeight:"bold"}}>Nom</th>
                <th style={{fontWeight:"bold"}}>Adresse</th>
                <th style={{fontWeight:"bold"}}>Email</th>
                <th style={{fontWeight:"bold"}}>Gerant</th>
                <th style={{fontWeight:"bold"}}>Téléphone</th>
                <th style={{fontWeight:"bold"}}>Numéro RCS</th>
                <th style={{fontWeight:"bold"}}>Statut</th>
                <th style={{fontWeight:"bold"}}>Editer</th>
                </tr>
        {arr}
        </table>
    </div>

)

}
export default OrgBloquer