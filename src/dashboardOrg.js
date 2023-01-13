import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom'
import ProfilOrg from './dashboard/profilOrg'
import './dashboard/style.css'
import axios from 'axios';

function dashboardOrg() {

  const [data, setDate] = useState([])
  const [user, setUser] = useState([])
  useEffect(() => {
    Axios.get("http://localhost:4000/organisateur/" + localStorage.getItem('id'))
      .then(res => {
        // console.log(res.data.Events);
        setDate(res.data.Events)
        // Axios.get("http://localhost:4000/organisateur/").then(rep => { console.log(rep); })
      }
      ).catch(err => console.log(err))
  }, []
  );

  var table = []
  const arr = data
    .map((data, index) => {
      var eventName = data.title
      var event = data.id
      axios.post("http://localhost:4000/ticket/event/", { event })
        .then(res => {
          if (res.data != null) {
            table.push(res.data, `${eventName}`)
          }
        })
      console.log(table)
      return (
        <div className='listEvent' key={index}>
          <h5>{data.title} <br />{data.description} <br />{data.date}<br /> {data.prix}</h5>
          
          <Link to={`./modifEvent/${data.id}`}><button className="event1">Modifier évènement</button> </Link>
         <Link to={`./listPart/${data.id}`}><button className="event2">Liste des participants</button> </Link>
        </div>
      )
    })
  table.map(ta => {
    console.log(ta);
  })
  return (
    <div className="dashboard">
      <ProfilOrg />
      <h1>Liste de vos évènements</h1>
      {arr}
      <Link to={'./events'}><button className="event">Créer un nouvel évènement</button></Link>

    </div>
  )

}
export default dashboardOrg