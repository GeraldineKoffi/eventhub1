import React from "react";
import EventList from './eventList'



function Home(){

    return(
      <>
        <div className="image">
          <div className="color-overlay d-flex justify-content-center align-items-center">
            <h1> Bienvenue sur le site EventHub</h1>
             </div>
          </div>
          <div id="event">
          <EventList/>
          </div> 
        </>
    )
}
export default Home