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
import MenuComponent from './MenuComponent/MenuComponent';
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
                >
                <MenuComponent />
            </ListItem>
           
        </List>
    );
}