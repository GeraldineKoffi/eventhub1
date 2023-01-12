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
            return (
                <div className='listEvent' key={index}>
                    <h5>{data.title} {data.description} {data.date} </h5>
                </div>
            )
        }
        )

    return (
        <div className='interest'>
            <h2>Liste des évènements auxquels vous vous êtes Intéressé</h2>
            {arr}
        </div>
    )
}
export default Interest