import React from "react";
import ProfilAD from './dashboard/profilAD'
import UserBloquer from './dashboard/userBloquer'
import OrgBloquer from './dashboard/orgBloquer'
import EventBloc from "./dashboard/eventBloc";



function dashboardAd(){

    return(
        <div className="dashboardAD">
           <ProfilAD /> 
           <div style={{marginTop:"20px"}}>
           <EventBloc /> 
           </div>
           <UserBloquer/>
           <OrgBloquer/>

           
        </div>
    )

}
export default dashboardAd