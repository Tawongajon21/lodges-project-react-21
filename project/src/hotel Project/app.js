import React from 'react';
import Home from './home';
import Error from './error';
import Rooms from './rooms';
import SingleRoom from './singleRoom';
import Navbar from './components/navbar';
import Booking from './booking';
import {Route, Switch } from 'react-router-dom';
import Footer from './footer';
const App = () => {
    return (
        <div>
            <Navbar/>
            <Switch>
            <Route exact path="/"  component={Home}/>
            <Route exact path="/rooms" component={Rooms}/>
            <Route exact path="/rooms/:slug" component={SingleRoom}/>
<Route path="/booking" component={Booking}/>

            <Route component={Error}/>
           
            </Switch>
<Footer/>
        </div>
    )
}

export default App
