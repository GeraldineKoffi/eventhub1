import './style.css'

import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import Inscription from './inscription'
import Home from './home'
import Login from './login'
import LoginAdmin from './loginAdmin'
import InscriptionOrg from './inscriptionOrg'
import EventList from './eventList'
import Events from './events'
import ForgetPass from './forgetPass'
import ForgetPassOrg from './forgetPassOrg'
import ForgetPassAd from './forgetPassAd'
import Dashboard from './dashboard'
import DashboardAd from './dashboardAd'
import DashboardOrg from './dashboardOrg'
import ModifEvent from './modifEvent'
import InscriptionAdmin from './InscriptionAdmin'
import Role from './role'
import RoleConnect from './roleConnect'
import LoginOrg from './loginOrg'
import {useEffect} from 'react'


function All() {
	const [update, setUpdate]=React.useState(false)
	
    useEffect(()=>{

    },[update])
	return (
		<Router>

			<Header setUpdate={setUpdate} />

			<Switch>

				<Route exact path={"/"}>
					<Home />
				</Route>

				<Route path={"/inscription"}>
	           <Inscription />
                </Route>

				<Route path={"/inscriptionOrg"}>
                <InscriptionOrg />
                </Route>

				<Route path={"/inscriptionAdmin"}>
                  <InscriptionAdmin />
                </Route>

				<Route path={"/login"}>
					<Login update={update} setUpdate={setUpdate} />
				</Route>

				<Route path={"/loginOrg"}>
                 <LoginOrg />
                </Route>

            	<Route path={"/loginAdmin"}>
                <LoginAdmin />
                </Route>
                
				<Route path={"/forgetPass"}>
                 <ForgetPass />
                </Route>
				<Route path={"/forgetPassOrg"}>
                 <ForgetPassOrg />
                </Route>
				<Route path={"/forgetPassAd"}>
                 <ForgetPassAd />
                </Route>

				<Route path={"/role"}>
                  <Role />
                </Route>

                <Route path={"/roleConnect"}>
                 <RoleConnect />
                </Route>

				<Route path={"/dashboard"}>
                   <Dashboard />
                </Route>

                <Route path={"/dashboardOrg"}>
                <DashboardOrg />
                </Route>

                <Route path={"/dashboardAd"}>
                   <DashboardAd />
                </Route>		

				<Route path={"/eventList"}>
                   <EventList />
				</Route>

				<Route path={"/events"}>
                <Events />
                </Route>
                
				
                
				
				
			<Route path={"/modifEvent"}>
              <ModifEvent />
            </Route>
             
			</Switch>

			<Footer />
			
		</Router> 
	)
}

function Root() {
	return (
		<div className='EventHub'>
			<All/>
		</div>
	)
}

export default Root