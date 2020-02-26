import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import './ListMenu.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



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

export default function ListMenu() {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [openDOC, setOpenDoc] = React.useState(true);
    const [openHOS, setOpenHOS] = React.useState(true);
    const [openCli, setOpenCli] = React.useState(true);
    const [openLab, setOpenLab] = React.useState(true);
    const [openPha, setOpenPha] = React.useState(true);
    const [openBan, setOpenBan] = React.useState(true);
    const [openFit, setOpenFit] = React.useState(true);
    const [openCen, setOpenCen] = React.useState(true);
    const [openAmb, setOpenAmb] = React.useState(true);
    const [openOrg, setOpenOrg] = React.useState(true);
    const [openHot, setOpenHot] = React.useState(true);
    const [openTrans, setOpenTrans] = React.useState(true);
    const [openMaster, setOpenMaster] = React.useState(true);



    const handleClickDoc = (event, index) => {
        setOpenDoc(!openDOC);
        setSelectedIndex(index);
    };
    const handleClickHos = (event, index) => {
        setOpenHOS(!openHOS);
        setSelectedIndex(index);
    };
    const handleClickCli = (event, index) => {
        setOpenCli(!openCli);
        setSelectedIndex(index);
    };
    const handleClickLab = (event, index) => {
        setOpenLab(!openLab);
        setSelectedIndex(index);
    };
    const handleClickPha = (event, index) => {
        setOpenPha(!openPha);
        setSelectedIndex(index);
    };
    const handleClickBan = (event, index) => {
        setOpenBan(!openBan);
        setSelectedIndex(index);
    };
    const handleClickFit = (event, index) => {
        setOpenFit(!openFit);
        setSelectedIndex(index);
    };
    const handleClickCen = (event, index) => {
        setOpenCen(!openCen);
        setSelectedIndex(index);
    };
    const handleClickAmb = (event, index) => {
        setOpenAmb(!openAmb);
        setSelectedIndex(index);
    };
    const handleClickOrg = (event, index) => {
        setOpenOrg(!openOrg);
        setSelectedIndex(index);
    };
    const handleClickHot = (event, index) => {
        setOpenHot(!openHot);
        setSelectedIndex(index);
    };
    const handleClickTrans = (event, index) => {
        setOpenTrans(!openTrans);
        setSelectedIndex(index);
    };
    const handleClickMaster = (event, index) => {
        setOpenMaster(!openMaster);
        setSelectedIndex(index);
    };
    return (
        <List
            component="nav"
            className={classes.root}
        >
            {/* Doctor */}
            <ListItem button 
                selected={selectedIndex === 1} onClick={event => handleClickDoc(event, 1)}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Doctor" />
                {openDOC ? <ExpandMore /> : <ExpandLess />}
            </ListItem>
            <Collapse in={!openDOC} timeout="auto" unmountOnExit >
                <List  component="div" disablePadding>
                    <ListItem button >
                        <ul >
                            <li>
                                <Link to={'/'} selected className="nav-link">Personal Details</Link>
                            </li>
                            <li>
                                <Link to={'/ProfessionalDetails'} className="nav-link">Professional details</Link>
                            </li>
                            <li>
                                <Link to={'/Clinic'} className="nav-link">Clinic</Link>
                            </li>
                            <li>
                                <Link to={'/Hospital'} className="nav-link">Hospital</Link>
                            </li>
                            <li>
                                <Link to={'/Procedures'} className="nav-link">Procedures</Link>
                            </li>
                            <li>
                                <Link to={'/Social'} className="nav-link">Social</Link>
                            </li>
                            <li>
                                <Link to={'/MasterControl'} className="nav-link">Master Control</Link>
                            </li>
                        </ul>
                    </ListItem>
                </List>
            </Collapse>
            {/* End Doctor */}
            {/* Hospital */}
            <ListItem button selected={selectedIndex === 2} onClick={event => handleClickHos(event, 2)}  >
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Hospital" />
                {openHOS ? <ExpandMore /> : <ExpandLess />}
            </ListItem>
            <Collapse in={!openHOS} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ul>
                            <li>
                                <Link to={'/'} className="nav-link">Personal Details</Link>
                            </li>
                            <li>
                                <Link to={'/ProfessionalDetails'} className="nav-link">Professional details</Link>
                            </li>
                            <li>
                                <Link to={'/Clinic'} className="nav-link">Clinic</Link>
                            </li>
                            <li>
                                <Link to={'/Hospital'} className="nav-link">Hospital</Link>
                            </li>
                            <li>
                                <Link to={'/Procedures'} className="nav-link">Procedures</Link>
                            </li>
                        </ul>
                    </ListItem>
                </List>
            </Collapse>
            {/*End  Hospital */}
            {/* Clinics */}
            <ListItem button selected={selectedIndex === 3} onClick={event => handleClickCli(event, 3)} >
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Clinics" />
                {openCli ? <ExpandMore /> : <ExpandLess />}
            </ListItem>
            <Collapse in={!openCli} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem className={classes.nested}>
                        <ul>
                            <li>
                                <Link to={'/'} className="nav-link" >Personal Details</Link>
                            </li>
                            <li>
                                <Link to={'/ProfessionalDetails'} className="nav-link">Professional details</Link>
                            </li>
                            <li>
                                <Link to={'/Clinic'} className="nav-link">Clinic</Link>
                            </li>
                            <li>
                                <Link to={'/Hospital'} className="nav-link">Hospital</Link>
                            </li>
                            <li>
                                <Link to={'/Procedures'} className="nav-link">Procedures</Link>
                            </li>
                        </ul>
                    </ListItem>
                </List>
            </Collapse>
            {/*End  Clinics */}
            {/* Labs */}
            <ListItem button  selected={selectedIndex === 4} onClick={event => handleClickLab(event, 4)}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Labs" />
                {openLab ? <ExpandMore /> : <ExpandLess />}
            </ListItem>
            <Collapse in={!openLab} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ul>
                            <li>
                                <Link to={'/'} className="nav-link">Personal Details</Link>
                            </li>
                            <li>
                                <Link to={'/ProfessionalDetails'} className="nav-link">Professional details</Link>
                            </li>
                            <li>
                                <Link to={'/Clinic'} className="nav-link">Clinic</Link>
                            </li>
                            <li>
                                <Link to={'/Hospital'} className="nav-link">Hospital</Link>
                            </li>
                            <li>
                                <Link to={'/Procedures'} className="nav-link">Procedures</Link>
                            </li>
                        </ul>
                    </ListItem>
                </List>
            </Collapse>
            {/*End  Labs */}
            {/* Pharmacy */}
            <ListItem button  selected={selectedIndex === 5} onClick={event => handleClickPha(event, 5)}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Pharmacy" />
                {openPha ? <ExpandMore /> : <ExpandLess />}
            </ListItem>
            <Collapse in={!openPha} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ul>
                            <li>
                                <Link to={'/'} className="nav-link">Personal Details</Link>
                            </li>
                            <li>
                                <Link to={'/ProfessionalDetails'} className="nav-link">Professional details</Link>
                            </li>
                            <li>
                                <Link to={'/Clinic'} className="nav-link">Clinic</Link>
                            </li>
                            <li>
                                <Link to={'/Hospital'} className="nav-link">Hospital</Link>
                            </li>
                            <li>
                                <Link to={'/Procedures'} className="nav-link">Procedures</Link>
                            </li>
                        </ul>
                    </ListItem>
                </List>
            </Collapse>
            {/*End  Pharmacy */}
            {/* Blood Bank */}
            <ListItem button  selected={selectedIndex === 6} onClick={event => handleClickBan(event, 6)}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Blood Bank" />
                {openBan ? <ExpandMore /> : <ExpandLess />}
            </ListItem>
            <Collapse in={!openBan} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ul>
                            <li>
                                <Link to={'/'} className="nav-link">Personal Details</Link>
                            </li>
                            <li>
                                <Link to={'/ProfessionalDetails'} className="nav-link">Professional details</Link>
                            </li>
                            <li>
                                <Link to={'/Clinic'} className="nav-link">Clinic</Link>
                            </li>
                            <li>
                                <Link to={'/Hospital'} className="nav-link">Hospital</Link>
                            </li>
                            <li>
                                <Link to={'/Procedures'} className="nav-link">Procedures</Link>
                            </li>
                        </ul>
                    </ListItem>
                </List>
            </Collapse>
            {/*End  Blood Bank */}
            {/* Fitness Centre */}
            <ListItem button  selected={selectedIndex === 7} onClick={event => handleClickFit(event, 7)}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Fitness Centre" />
                {openFit ? <ExpandMore /> : <ExpandLess />}
            </ListItem>
            <Collapse in={!openFit} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ul>
                            <li>
                                <Link to={'/'} className="nav-link">Personal Details</Link>
                            </li>
                            <li>
                                <Link to={'/ProfessionalDetails'} className="nav-link">Professional details</Link>
                            </li>
                            <li>
                                <Link to={'/Clinic'} className="nav-link">Clinic</Link>
                            </li>
                            <li>
                                <Link to={'/Hospital'} className="nav-link">Hospital</Link>
                            </li>
                            <li>
                                <Link to={'/Procedures'} className="nav-link">Procedures</Link>
                            </li>
                        </ul>
                    </ListItem>
                </List>
            </Collapse>
            {/*End  Fitness Centre */}
            {/* Centre of Excellence */}
            <ListItem button  selected={selectedIndex === 8} onClick={event => handleClickCen(event, 8)}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Centre of Excellence" />
                {openCen ? <ExpandMore /> : <ExpandLess />}
            </ListItem>
            <Collapse in={!openCen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ul>
                            <li>
                                <Link to={'/'} className="nav-link">Personal Details</Link>
                            </li>
                            <li>
                                <Link to={'/ProfessionalDetails'} className="nav-link">Professional details</Link>
                            </li>
                            <li>
                                <Link to={'/Clinic'} className="nav-link">Clinic</Link>
                            </li>
                            <li>
                                <Link to={'/Hospital'} className="nav-link">Hospital</Link>
                            </li>
                            <li>
                                <Link to={'/Procedures'} className="nav-link">Procedures</Link>
                            </li>
                        </ul>
                    </ListItem>
                </List>
            </Collapse>
            {/*End  Centre of Excellence */}
            {/* Ambulance */}
            <ListItem button  selected={selectedIndex === 9} onClick={event => handleClickAmb(event, 9)}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Ambulance" />
                {openAmb ? <ExpandMore /> : <ExpandLess />}
            </ListItem>
            <Collapse in={!openAmb} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ul>
                            <li>
                                <Link to={'/'} className="nav-link">Personal Details</Link>
                            </li>
                            <li>
                                <Link to={'/ProfessionalDetails'} className="nav-link">Professional details</Link>
                            </li>
                            <li>
                                <Link to={'/Clinic'} className="nav-link">Clinic</Link>
                            </li>
                            <li>
                                <Link to={'/Hospital'} className="nav-link">Hospital</Link>
                            </li>
                            <li>
                                <Link to={'/Procedures'} className="nav-link">Procedures</Link>
                            </li>
                        </ul>
                    </ListItem>
                </List>
            </Collapse>
            {/*End  Ambulance */}
            {/* Organ Swap */}
            <ListItem button  selected={selectedIndex === 10} onClick={event => handleClickOrg(event, 10)}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Organ Swap" />
                {openOrg ? <ExpandMore /> : <ExpandLess />}
            </ListItem>
            <Collapse in={!openOrg} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ul>
                            <li>
                                <Link to={'/'} className="nav-link">Personal Details</Link>
                            </li>
                            <li>
                                <Link to={'/ProfessionalDetails'} className="nav-link">Professional details</Link>
                            </li>
                            <li>
                                <Link to={'/Clinic'} className="nav-link">Clinic</Link>
                            </li>
                            <li>
                                <Link to={'/Hospital'} className="nav-link">Hospital</Link>
                            </li>
                            <li>
                                <Link to={'/Procedures'} className="nav-link">Procedures</Link>
                            </li>
                        </ul>
                    </ListItem>
                </List>
            </Collapse>
            {/*End  Organ Swap */}
            {/* Hotels */}
            <ListItem button  selected={selectedIndex === 11} onClick={event => handleClickHot(event, 11)}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Hotels" />
                {openHot ? <ExpandMore /> : <ExpandLess />}
            </ListItem>
            <Collapse in={!openHot} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ul>
                            <li>
                                <Link to={'/'} className="nav-link">Personal Details</Link>
                            </li>
                            <li>
                                <Link to={'/ProfessionalDetails'} className="nav-link">Professional details</Link>
                            </li>
                            <li>
                                <Link to={'/Clinic'} className="nav-link">Clinic</Link>
                            </li>
                            <li>
                                <Link to={'/Hospital'} className="nav-link">Hospital</Link>
                            </li>
                            <li>
                                <Link to={'/Procedures'} className="nav-link">Procedures</Link>
                            </li>
                        </ul>
                    </ListItem>
                </List>
            </Collapse>
            {/*End  Hotels */}
            {/* Transport */}
            <ListItem button  selected={selectedIndex === 12} onClick={event => handleClickTrans(event, 12)}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Transport" />
                {openTrans ? <ExpandMore /> : <ExpandLess />}
            </ListItem>
            <Collapse in={!openTrans} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ul>
                            <li>
                                <Link to={'/'} className="nav-link">Personal Details</Link>
                            </li>
                            <li>
                                <Link to={'/ProfessionalDetails'} className="nav-link">Professional details</Link>
                            </li>
                            <li>
                                <Link to={'/Clinic'} className="nav-link">Clinic</Link>
                            </li>
                            <li>
                                <Link to={'/Hospital'} className="nav-link">Hospital</Link>
                            </li>
                            <li>
                                <Link to={'/Procedures'} className="nav-link">Procedures</Link>
                            </li>
                        </ul>
                    </ListItem>
                </List>
            </Collapse>
            {/*End  Transport */}
            {/* Master */}
            <ListItem button  selected={selectedIndex === 13} onClick={event => handleClickMaster(event, 13)}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Master" />
                {openMaster ? <ExpandMore /> : <ExpandLess />}
            </ListItem>
            <Collapse in={!openMaster} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ul>
                            <li>
                                <Link to={'/'} className="nav-link">Personal Details</Link>
                            </li>
                            <li>
                                <Link to={'/ProfessionalDetails'} className="nav-link">Professional details</Link>
                            </li>
                            <li>
                                <Link to={'/Clinic'} className="nav-link">Clinic</Link>
                            </li>
                            <li>
                                <Link to={'/Hospital'} className="nav-link">Hospital</Link>
                            </li>
                            <li>
                                <Link to={'/Procedures'} className="nav-link">Procedures</Link>
                            </li>
                        </ul>
                    </ListItem>
                </List>
            </Collapse>
            {/*End  Master */}
        </List>
    );
}