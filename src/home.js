import React from "react";
import img1 from './mesImages/img1.jpg'
import axios from 'axios'
import { useEffect, useState} from 'react';
import Axios from 'axios';




function Home(){

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
        
        </div>
    )
}
export default Home