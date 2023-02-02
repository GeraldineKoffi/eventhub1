import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom'
import ProfilOrg from './dashboard/profilOrg'
import axios from 'axios';
import Button from 'react-bootstrap/Button'

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
      const myStr=data.description;
      const subStr=myStr.substring(0,100);
      return (
        <tr key={index} >
          <th>{data.title}</th> 
          <th>{subStr}...</th> 
          <th>{data.date}</th> 
          <th>{data.prix}</th>
          <th>
          <Link to={`./modifEvent/${data.id}`}>
            <Button variant="dark" >Modifier</Button> 
          </Link>
         <Link to={`./listPart/${data.id}`}>
          <Button variant="dark">Liste des participants</Button> 
          </Link>
        </th>
        </tr>
      )
    })
  table.map(ta => {
    console.log(ta);
  })
  return (
    <div className="dashboard"> 
    <div className='bar'></div>
      <ProfilOrg />
      <div className='ListEvent'>
      <h3>Liste de vos évènements</h3>
      <table>
                <tr>
                    <th style={{fontWeight:"bold"}}>Titre</th>
                    <th style={{fontWeight:"bold"}}>Description</th>
                    <th style={{fontWeight:"bold"}}>Date</th>
                    <th style={{fontWeight:"bold"}}>Prix</th>
                    <th style={{fontWeight:"bold"}}>Editer</th>
                </tr>
      {arr}
      </table>
      </div>
      <Link to={'./events'}>
        <Button variant="dark" className="buttonEvent">Créer un nouvel évènement</Button>
      </Link>

    </div>
  )

}
export default dashboardOrg