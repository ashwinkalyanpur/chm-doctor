import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import MenuHeader from '../Header/MenuHeader';
import Logo from '../assets/logoCH.jpg'
import './Header.css';


class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={2}>
                        <img src={Logo} className="logo" />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul className="navbar-nav mr-auto headerLink">
                            <li>
                                <Link to={''} className="nav-link">DOMESTIC</Link>
                            </li>
                            <li>
                                <Link to={''} className="nav-link">INTERNATIOINAL</Link>
                            </li>
                            <li>
                                <Link to={''} className="nav-link">CONTARCTED</Link>
                            </li>
                            <li>
                                <Link to={''} className="nav-link">NON-CONTARCTED</Link>
                            </li>
                            <li>
                                <Link to={''} className="nav-link">APPOINTMENTS</Link>
                            </li>
                            <li>
                                <Link to={''} className="nav-link">QUOTES</Link>
                            </li>
                            <li>
                                <Link to={''} className="nav-link">ALL</Link>
                            </li>
                        </ul>
                    </nav>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <MenuHeader />
                    </Grid>
                </Grid>
            </React.Fragment>

        );
    }
}

export default Header;