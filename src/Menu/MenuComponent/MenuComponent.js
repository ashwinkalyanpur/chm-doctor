import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItemText from '@material-ui/core/ListItemText';



import './MenuComponent.css'


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    menuItem: {
        '&.active': {
            background: 'rgba(0, 0, 0, 0.08)',
            '& .MuiListItemIcon-root': {
                color: '#fff',
            },
        },
    },
}));
class MenuComponent extends Component {
    state = {
        isToggleBtnDoc: false,
        isToggleBtnHos: false,
        isToggleBtnCli: false,
        isToggleBtnLab: false,
        isToggleBtnPha: false,
        isToggleBtnBnk: false,
        isToggleBtnCen: false,
        isToggleBtnExc: false,
        isToggleBtnAmb: false,
        isToggleBtnSwa: false,
        isToggleBtnHtl: false,
        isToggleBtnTra: false,
        isToggleBtnMas: false,
    }

    render() {
        return (
            <div className="menuListContainer">
                {/* Start Doctor link */}
                <div className="btnContainerDoc">
                    <button
                        className={this.state.isToggleBtnDoc ? "slideMenu menu-close" : "slideMenu menus-open"}
                        onClick={() => this.setState({ isToggleBtnDoc: !this.state.isToggleBtnDoc })}>
                        <ListItemIcon>
                            <i className="fa  fa-medkit" aria-hidden="true"></i>
                        </ListItemIcon>
                        <ListItemText primary="Doctor" />
                        <span className="toggleIcon">
                            <i className="fa fa-angle-up" aria-hidden="true"></i>
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                    <div className={this.state.isToggleBtnDoc ? "slideMenuContainerDoc showContainer" : "slideMenuContainerDoc hideContainer"}>
                        <nav >
                            <ul>
                                <li >
                                    <NavLink to={'/Personal'} selected className="nav-link">Personal Details</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/ProfessionalDetails'} className="nav-link">Professional details</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/Clinic'} className="nav-link">Clinic</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/Hospital'} className="nav-link">Hospital</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/Procedures'} className="nav-link">Procedures</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/Social'} className="nav-link">Social</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/MasterControl'} className="nav-link">Master Control</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* End Doctor link */}
                {/* Start Hospital link */}
                <div className="btnContainerHos">

                    <button
                        className={this.state.isToggleBtnHos ? "slideMenu menu-close" : "slideMenu menus-open"}
                        onClick={() => this.setState({ isToggleBtnHos: !this.state.isToggleBtnHos })}>
                        <ListItemIcon>
                            <i className="fa fa-stethoscope"></i>
                        </ListItemIcon>
                        <ListItemText primary="Hospital" />
                        <span className="toggleIcon">
                            <i className="fa fa-angle-up" aria-hidden="true"></i>
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                    <div className={this.state.isToggleBtnHos ? "slideMenuContainerHos showContainer" : "slideMenuContainerHos hideContainer"}>
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to={'/Personal'} selected className="nav-link">Personal Details</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/ProfessionalDetails'} className="nav-link">Professional details</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/Clinic'} className="nav-link">Clinic</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/Hospital'} className="nav-link">Hospital</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/Procedures'} className="nav-link">Procedures</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/Social'} className="nav-link">Social</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/MasterControl'} className="nav-link">Master Control</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* End Hospital link */}
                {/* Start Clinic link */}
                <div className="btnContainerCli">
                    <button
                        className={this.state.isToggleBtnCli ? "slideMenu menu-close" : "slideMenu menus-open"}
                        onClick={() => this.setState({ isToggleBtnCli: !this.state.isToggleBtnCli })}>
                        <ListItemIcon>
                            <i className="fa fa-plus-square" aria-hidden="true"></i>
                        </ListItemIcon>
                        <ListItemText primary="Clinics" />
                        <span className="toggleIcon">
                            <i className="fa fa-angle-up" aria-hidden="true"></i>
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                    <div className={this.state.isToggleBtnCli ? "slideMenuContainerCli showContainer" : "slideMenuContainerCli hideContainer"}>
                        
                    </div>
                </div>
                {/* End Clinic link */}
                {/* Start Labs link */}
                <div className="btnContainerLab">
                    <button
                        className={this.state.isToggleBtnLab ? "slideMenu menu-close" : "slideMenu menus-open"}
                        onClick={() => this.setState({ isToggleBtnLab: !this.state.isToggleBtnLab })}>
                        <ListItemIcon>
                            <i className="fa fa-heartbeat" aria-hidden="true"></i>
                        </ListItemIcon>
                        <ListItemText primary="Lab" />
                        <span className="toggleIcon">
                            <i className="fa fa-angle-up" aria-hidden="true"></i>
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                    <div className={this.state.isToggleBtnLab ? "slideMenuContainerLab showContainer" : "slideMenuContainerLab hideContainer"}>
                        
                    </div>
                </div>
                {/* End Labs link */}
                {/* Start Pharmacy link */}
                <div className="btnContainerPha">
                    <button
                        className={this.state.isToggleBtnPha ? "slideMenu menu-close" : "slideMenu menus-open"}
                        onClick={() => this.setState({ isToggleBtnPha: !this.state.isToggleBtnPha })}>
                        <ListItemIcon>
                            <i className="fa fa-hospital-o" aria-hidden="true"></i>
                        </ListItemIcon>
                        <ListItemText primary="Pharmacy" />
                        <span className="toggleIcon">
                            <i className="fa fa-angle-up" aria-hidden="true"></i>
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                    <div className={this.state.isToggleBtnPha ? "slideMenuContainerPha showContainer" : "slideMenuContainerPha hideContainer"}>
                        
                    </div>
                </div>
                {/* End Pharmacy link */}
                {/* Start Blood Bank link */}
                <div className="btnContainerBnk">
                    <button
                        className={this.state.isToggleBtnBnk ? "slideMenu menu-close" : "slideMenu menus-open"}
                        onClick={() => this.setState({ isToggleBtnBnk: !this.state.isToggleBtnBnk })}>
                        <ListItemIcon>
                            <i className="fa fa-heart" aria-hidden="true"></i>
                        </ListItemIcon>
                        <ListItemText primary="Blood Bank" />
                        <span className="toggleIcon">
                            <i className="fa fa-angle-up" aria-hidden="true"></i>
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                    <div className={this.state.isToggleBtnBnk ? "slideMenuContainerBnk showContainer" : "slideMenuContainerBnk hideContainer"}>
                        
                    </div>
                </div>
                {/* End Blood Bank link */}
                {/* Start Fitness Centre link */}
                <div className="btnContainerCen">
                    <button
                        className={this.state.isToggleBtnCen ? "slideMenu menu-close" : "slideMenu menus-open"}
                        onClick={() => this.setState({ isToggleBtnCen: !this.state.isToggleBtnCen })}>
                        <ListItemIcon>
                            <i className="fa fa-bicycle" aria-hidden="true"></i>
                        </ListItemIcon>
                        <ListItemText primary="Fitness Centre" />
                        <span className="toggleIcon">
                            <i className="fa fa-angle-up" aria-hidden="true"></i>
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                    <div className={this.state.isToggleBtnCen ? "slideMenuContainerCen showContainer" : "slideMenuContainerCen hideContainer"}>
                        
                    </div>
                </div>
                {/* End Fitness Centre link */}
                {/* Start Centre of Excellence link */}
                <div className="btnContainerExc">
                    <button
                        className={this.state.isToggleBtnExc ? "slideMenu menu-close" : "slideMenu menus-open"}
                        onClick={() => this.setState({ isToggleBtnExc: !this.state.isToggleBtnExc })}>
                        <ListItemIcon>
                            <i className="fa fa-dot-circle-o" aria-hidden="true"></i>
                        </ListItemIcon>
                        <ListItemText primary="Centre of Excellence" />
                        <span className="toggleIcon">
                            <i className="fa fa-angle-up" aria-hidden="true"></i>
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                    <div className={this.state.isToggleBtnExc ? "slideMenuContainerExc showContainer" : "slideMenuContainerExc hideContainer"}>
                        
                    </div>
                </div>
                {/* End Centre of Excellence link */}
                {/* Start Ambulance link */}
                <div className="btnContainerAmb">
                    <button
                        className={this.state.isToggleBtnAmb ? "slideMenu menu-close" : "slideMenu menus-open"}
                        onClick={() => this.setState({ isToggleBtnAmb: !this.state.isToggleBtnAmb })}>
                        <ListItemIcon>
                            <i className="fa fa-ambulance" aria-hidden="true"></i>
                        </ListItemIcon>
                        <ListItemText primary="Ambulance" />
                        <span className="toggleIcon">
                            <i className="fa fa-angle-up" aria-hidden="true"></i>
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                    <div className={this.state.isToggleBtnAmb ? "slideMenuContainerAmb showContainer" : "slideMenuContainerAmb hideContainer"}>
                        
                    </div>
                </div>
                {/* End Ambulance link */}

                {/* Start Organ Swap link */}
                <div className="btnContainerSwa">
                    <button
                        className={this.state.isToggleBtnSwa ? "slideMenu menu-close" : "slideMenu menus-open"}
                        onClick={() => this.setState({ isToggleBtnSwa: !this.state.isToggleBtnSwa })}>
                        <ListItemIcon>
                            <i className="fa fa-handshake-o" aria-hidden="true"></i>
                        </ListItemIcon>
                        <ListItemText primary="Organ Swap" />
                        <span className="toggleIcon">
                            <i className="fa fa-angle-up" aria-hidden="true"></i>
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                    <div className={this.state.isToggleBtnSwa ? "slideMenuContainerSwa showContainer" : "slideMenuContainerSwa hideContainer"}>
                        
                    </div>
                </div>
                {/* End Organ Swap link */}
                {/* Start Hotel link */}
                <div className="btnContainerHtl">
                    <button
                        className={this.state.isToggleBtnHtl ? "slideMenu menu-close" : "slideMenu menus-open"}
                        onClick={() => this.setState({ isToggleBtnHtl: !this.state.isToggleBtnHtl })}>
                        <ListItemIcon>
                            <i className="fa fa-bed" aria-hidden="true"></i>
                        </ListItemIcon>
                        <ListItemText primary="Hotel" />
                        <span className="toggleIcon">
                            <i className="fa fa-angle-up" aria-hidden="true"></i>
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                    <div className={this.state.isToggleBtnHtl ? "slideMenuContainerHtl showContainer" : "slideMenuContainerHtl hideContainer"}>
                        
                    </div>
                </div>
                {/* End Hotel link */}
                {/* Start Transport link */}
                <div className="btnContainerTra">
                    <button
                        className={this.state.isToggleBtnTra ? "slideMenu menu-close" : "slideMenu menus-open"}
                        onClick={() => this.setState({ isToggleBtnTra: !this.state.isToggleBtnTra })}>
                        <ListItemIcon>
                            <i className="fa fa-taxi" aria-hidden="true"></i>
                        </ListItemIcon>
                        <ListItemText primary="Transport" />
                        <span className="toggleIcon">
                            <i className="fa fa-angle-up" aria-hidden="true"></i>
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                    <div className={this.state.isToggleBtnTra ? "slideMenuContainerTra showContainer" : "slideMenuContainerTra hideContainer"}>
                        
                    </div>
                </div>
                {/* End Transport link */}
                {/* Start Master link */}
                <div className="btnContainerMas">
                    <button
                        className={this.state.isToggleBtnMas ? "slideMenu menu-close" : "slideMenu menus-open"}
                        onClick={() => this.setState({ isToggleBtnMas: !this.state.isToggleBtnMas })}>
                        <ListItemIcon>
                            <i className="fa fa-user-md" aria-hidden="true"></i>
                        </ListItemIcon>
                        <ListItemText primary="Master" />
                        <span className="toggleIcon">
                            <i className="fa fa-angle-up" aria-hidden="true"></i>
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                    <div className={this.state.isToggleBtnMas ? "slideMenuContainerMas showContainer" : "slideMenuContainerMas hideContainer"}>
                        
                    </div>
                </div>
                {/* End Master link */}
            </div>
        );
    }
}
export default MenuComponent;