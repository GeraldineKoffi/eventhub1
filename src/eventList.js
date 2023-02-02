import React, { useEffect, useState} from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'

function EventList() {
    const [data, setDate] = useState([])
    const [search, setSearch]=useState([])

     
    useEffect(() => {
        Axios.get("http://localhost:4000/event")
            .then(res => {
                setDate(res.data)
            }
            ).catch(err => console.log(err))
    },[] 
    );

    var buytick = async (id) => {

        const event = id
        const user = parseInt(localStorage.getItem('id'))
        const userLastName = localStorage.getItem('lastName')
        const idUser = Axios.get("http://localhost:4000/user/" + user)

        if ((await idUser).data.lastName === userLastName){

            axios.post("http://localhost:4000/ticket/buy", {
                event,
                user,
            }).then(res => {
                alert(res.data);
            })
        .catch(error=>{
              alert(error.response.data.message)
              
            })
          }

    }

   const handleSearch=(e)=>{
    let value = e.target.value;
    setSearch(value)
   }
    const arr=data
     
    .filter((val)=>{
            return val.title.includes(search)
    })
    
  .map((data, index) => {
    if(data.actif===true){

    if(data.statut==="Payant"){
        return (
            <div  key={index}>
                <h5 className='title'>{data.title} </h5>
                <h5 className='descrp'>{data.description}</h5>
                <h5 className='date'> {data.date}</h5>  
                <h5 className='prix'>Prix: {data.prix}FCFA</h5>  
                <button className='valid'  onClick={()=>buytick(data.id)}>Achat de ticket</button>
            </div>
            
        )
        }else{
            return(
                <div className='eventList' key={index}>
                <h5 className='title'>{data.title} </h5>
                <h5 className='descrp'>{data.description}</h5>
                <h5 className='date'> {data.date}</h5>  
                <h5 className='prix'> {data.statut}</h5>  
                <button className='valid' onClick={()=>buytick(data.id)}>Intéresser</button>
                </div>
            )
        }
    }else{

    }
    })
    return (
        <>
        <div className="eventList" >
        <h2>Liste des évènements</h2>
            <Form className="search d-flex">
                <Form.Control type="search" placeholder="Titre de l'évènement" 
                className="me-2" aria-label="search" name="search" id="search" onChange={handleSearch}/>
                <Button variant="outline-dark">Rechercher</Button>
            </Form>
           
            </div>
            <hr/>
            {arr}
        </>
    )
}
export default EventList