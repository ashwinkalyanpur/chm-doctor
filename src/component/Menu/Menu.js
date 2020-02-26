import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Personal from '../Doctor/Personal/Personal';
import ProfessionalDetails from '../Doctor/Professional/ProfessionalDetails';
import Clinic from '../Doctor/Clinic/Clinic';




export default function Menu() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

       
        <Switch>
          <Route exact path="/">
            <Personal />
          </Route>
          <Route path="/about">
            <ProfessionalDetails />
          </Route>
          <Route path="/dashboard">
            <Clinic />
          </Route>
        </Switch>
      </div>
    </Router>
  );
  function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
  
  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
  
  function Dashboard() {
    return (
      <div>
        <h2>Dashboard</h2>
      </div>
    );
  }
}



