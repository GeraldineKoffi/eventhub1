import React from "react";
import Interest from './dashboard/interest'
import Profil from './dashboard/profil'

function dashboard(){
    return(
        <div className="dashboard">
           <Profil/>
           <Interest/>
        </div>
    )

}
export default dashboard