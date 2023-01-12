import React from 'react'
import { useEffect, useState } from 'react';
import Axios from 'axios';


function OrgBloquer() {
const [data, setDate] = useState([])
 
useEffect(() => {
    Axios.get("http://localhost:4000/organisateur")
        .then(res => {
            setDate(res.data)
        }
        ).catch(err => console.log(err))
},[] 
);
const arr = data
.map((data, index) => {
    return(
        <tr key={index}>
        <td>{data.name}</td><td> {data.adresse} </td><td>{data.tel}</td><td> {data.mail}</td><td>{data.actif}</td><td> {data.gerant}</td><td> {data.num_RCS}</td><td><button>Editer l'organisateur</button></td>
        </tr>
    )
})
return(
    <div className='orgBloquer'>
                <table>
            <tr><td>Name</td><td>Adress</td><td>Mail</td><td>Gerant</td><td>Telephone</td><td>Num Rcs</td><td>Statut</td><td>Edit</td></tr>
        {arr}
        </table>

    </div>

)

}
export default OrgBloquer