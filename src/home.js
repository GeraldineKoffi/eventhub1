import React from "react";
import img1 from './mesImages/img1.jpg'
import EventList from './eventList'



function Home(){

    return(
      <>
        <div className="image">
          <img src={img1} alt="" width="100%"/>
              <h5>Bienvenue sur le site EventHub</h5>
         </div>
         
          <EventList/>
                 
        </>
    )
}
export default Home