import React from "react";
import img1 from './mesImages/img1.jpg'
import axios from 'axios'
import { useEffect, useState} from 'react';
import Axios from 'axios';




function Home(){
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
        <div className='eventList' key={index}>
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
    return(
      <div>
        <div className="image">
          <img src={img1} alt="" width="100%"/> 
        <div className="present">
              <h5>EventHub, un site pour la promotion des évènements. 
                <br/>Elle permet aux organisateurs d'évènements de pouvoir facilement <br/>
                faire connaitre leurs évènements au grand public </h5>
         </div>
         </div>
         <div id="event">
            {arr}  
        </div>
        </div>
    )
}
export default Home