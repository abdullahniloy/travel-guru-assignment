import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import NoMatch from './Component/NoMatch/NoMatch';

import Sundorban from './Component/Sundorban/Sundorban';
import Sajek from './Component/Sajek/Sajek';
import Sreemongol from './Component/Sreemongol/Sreemongol';
import LogedIn from './Component/LogedIn/LogedIn';


function App() {
 
  return (
      <div className="App" >
      <Router> 
       <Switch> 
         <Route path="/home"> 
           <Home></Home>
         </Route>
         <Route exact path = "/"> 
          <Home></Home>
         </Route>

         <Route exact path = "/sundorban"> 
          <Sundorban></Sundorban>
         </Route>

         <Route exact path = "/sajek"> 
          <Sajek></Sajek>
         </Route>
         <Route exact path = "/sreemongol"> 
          <Sreemongol></Sreemongol>
         </Route>

         <Route exact path = "/logedIn"> 
         <LogedIn></LogedIn>
         </Route>

         <Route path = "*">
        <NoMatch></NoMatch>
         </Route>



       </Switch>
      </Router>
    </div>
  );
}

export default App;
