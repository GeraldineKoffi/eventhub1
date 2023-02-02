import React from 'react'
import { useEffect, useState } from 'react';
import Axios from 'axios';

function Interest() {
    const [data, setDate] = useState([])

    useEffect(() => {
        const user = parseInt(localStorage.getItem('id'))
        Axios.post("http://localhost:4000/ticket/user", { user })
            .then(res => {
                console.log(res);
                setDate(res.data)
            })
            .catch(err => console.log(err))

    }, []
    );

    const arr = data
        .map((data, index) => {
            const myStr=data.description;
            const subStr=myStr.substring(0,100);

            return (
                
                <tr key={index}> 
                  <th>{data.title}</th>
                  <th>{subStr}...</th> 
                  <th>{data.date}</th>  
                </tr>
            )
        }
        )

    return (
        <div className='interest'>
            <h5>Liste des évènements auxquels vous vous êtes Intéressé</h5>
           
            <table>
                <tr>
                    <th style={{fontWeight:"bold"}}>Titre</th>
                    <th style={{fontWeight:"bold"}}>Description</th>
                    <th style={{fontWeight:"bold"}}>Date</th>
                </tr>
               
                {arr}
               
            </table>
        </div>
    )
}
export default Interest