import React,{useEffect} from 'react';
import './style.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import Home from './home'
import Login from './login'
import LoginAS from './loginAS'
import LoginAdmin from './loginAdmin'
import LoginOrg from './loginOrg'
import InscriptionOrg from './inscriptionOrg'
import Inscription from './inscription'
import InscriptionAdmin from './InscriptionAdmin'
import ForgetPass from './forgetPass'
import ForgetPassOrg from './forgetPassOrg'
import ForgetPassAd from './forgetPassAd'
import ForgetPassAS from './forgetPassAS'
import Events from './events'
import Dashboard from './dashboard'
import DashboardAd from './dashboardAd'
import DashboardOrg from './dashboardOrg'
import DashboardSup from './dashboardSup'
import ModifEvent from './modifEvent'
import Role from './role'
import RoleConnect from './roleConnect'
import ListPart from './listPart'

function App(){
    const [update, setUpdate] = React.useState(false)

    useEffect(() => {

    }, [update])
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
                    <LoginOrg update={update} setUpdate={setUpdate} />
                </Route>

                <Route path={"/loginAdmin"}>
                    <LoginAdmin update={update} setUpdate={setUpdate} />
                </Route>
                <Route path={"/loginAS"}>
                    <LoginAS update={update} setUpdate={setUpdate} />
                </Route>

                <Route path={"/forgetPass"}>
                    <ForgetPass />
                </Route>
                <Route path={"/forgetPassOrg"}>
                    <ForgetPassOrg />
                </Route>
                <Route path={"/forgetPassAS"}>
                    <ForgetPassAS />
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
                <Route path={"/dashboardSup"}>
                    <DashboardSup />
                </Route>

                <Route path={"/events"}>
                    <Events />
                </Route>


                <Route path={"/modifEvent/:event"}>
                    <ModifEvent />
                </Route>
                <Route path={"/listPart/:event"}>
                    <ListPart />
                </Route>

            </Switch><br/>
            <Footer />

        </Router>
    )
}

export default App;
