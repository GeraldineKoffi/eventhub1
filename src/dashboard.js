import React from "react";
import Interest from './dashboard/interest'
import Profil from './dashboard/profil'

function dashboard(){
    return(
        <div className="dashboard">
            <div className="bar"></div>
           <Profil/>
           <Interest/>
        </div>
    )

}
export default dashboard