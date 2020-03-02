import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



import Header from '../src/Header/Header';
import SearchDoctor from '../src/component/Doctor/SearchDoctor/SearchDoctor';
import Personal from '../src/component/Doctor/Personal/Personal';
import Hospitals from '../src/component/Hospitals/Hospitals';
import Clinics from '../src/component/Clinics/Clinics';
import ProfessionalDetails from '../src/component/Doctor/Professional/ProfessionalDetails';
import Clinic from '../src/component/Doctor/Clinic/Clinic';
import Hospital from '../src/component/Doctor/Hospital/Hospital';
import Procedures from '../src/component/Doctor/Procedures/Procedures';
import ListMenu from '../src/Menu/ListMenu';
import Social from '../src/component/Doctor/Social/Social';
import MasterControl from '../src/component/Doctor/MasterControl/MasterControl';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';


class App extends Component {


  render() {

    return (

      <Router>
        <div>
          <Header />
        </div>
        <div className="leftMenu">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              {/* <li><Link to={'/'} className="nav-link"></Link></li> */}
              <li><ListMenu /></li>
            </ul>
          </nav>
        </div>
        <div className="right">
          <Switch>
            <Route exact path='/' component={SearchDoctor} />
            <Route path='/Personal' component={Personal} />
            <Route path='/ProfessionalDetails' component={ProfessionalDetails} />
            <Route path='/Clinic' component={Clinic} />
            <Route path='/Hospital' component={Hospital} />
            <Route path='/Procedures' component={Procedures} />
            <Route path='/Hospitals' component={Hospitals} />
            <Route path='/Clinics' component={Clinics} />
            <Route path='/Social' component={Social} />
            <Route path='/MasterControl' component={MasterControl} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;