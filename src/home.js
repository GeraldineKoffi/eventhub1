import React from "react";
import img1 from './mesImages/img1.jpg'
import EventList from './eventList'



function Home(){

    return(
      <div id="event">
        <div className="image">
          <img src={img1} alt="" width="100%"/>
          <h1> Bienvenue sur le site EventHub</h1>
          </div>
          
          <EventList/>
          
                 
        </div>
    )
}
export default Home