import React from 'react';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Grid from '@material-ui/core/Grid';
import SearchByDoctor from '../SearchDoctor/SearchByDoctor';
import Link from '@material-ui/core/Link';

import './MasterControl.css';

function handleClick(event) {
    event.preventDefault();
  }

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: 15,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
}));

export default function MasterControl() {
    const classes = useStyles();

    const [stateIns, setStateIns] = React.useState({
        checkedB: true,
    });
    const [statepat, setStatepat] = React.useState({
        checkedB: true,
    });
    const [stateBook, setStateBook] = React.useState({
        checkedB: true,
    });
    const [stateDoc, setStateDoc] = React.useState({
        checkedB: true,
    });
    const [stateRetial, setStateRetial] = React.useState({
        checkedB: true,
    });
    const [stateLive, setStateLive] = React.useState({
        checkedB: true,
    });
    const [statePlan, setStatePlan] = React.useState({
        checkedB: true,
    });
    const [stateTrac, setStateTrac] = React.useState({
        checkedB: true,
    });
    const [stateIPD, setStateIPD] = React.useState({
        checkedB: true,
    });
    const [stateInter, setStateInter] = React.useState({
        checkedB: true,
    });
    const [stateRank, setStateRank] = React.useState({
        checkedB: true,
    });
    const [stateTele, setStateTele] = React.useState({
        checkedB: true,
    });
    const [stateSecond, setStateSecond] = React.useState({
        checkedB: true,
    });
    const [stateVideo, setStateVideo] = React.useState({
        checkedB: true,
    });
    const [stateReview, setStateReview] = React.useState({
        checkedB: true,
    });


    const handleChangeIns = name => event => {
        setStateIns({ ...stateIns, [name]: event.target.checked });
    };
    const handleChangepat = name => event => {
        setStatepat({ ...statepat, [name]: event.target.checked });
    };
    const handleChangeBook = name => event => {
        setStateBook({ ...stateBook, [name]: event.target.checked });
    };
    const handleChangeDoc = name => event => {
        setStateDoc({ ...stateDoc, [name]: event.target.checked });
    };
    const handleChangeRetial = name => event => {
        setStateRetial({ ...stateRetial, [name]: event.target.checked });
    };
    const handleChangeLive = name => event => {
        setStateLive({ ...stateLive, [name]: event.target.checked });
    };
    const handleChangePlan = name => event => {
        setStatePlan({ ...statePlan, [name]: event.target.checked });
    };
    const handleChangeTrac = name => event => {
        setStateTrac({ ...stateTrac, [name]: event.target.checked });
    };


    const handleChangeIPD = name => event => {
        setStateIPD({ ...stateIPD, [name]: event.target.checked });
    };
    const handleChangeInter = name => event => {
        setStateInter({ ...stateInter, [name]: event.target.checked });
    };
    const handleChangeRank = name => event => {
        setStateRank({ ...stateRank, [name]: event.target.checked });
    };
    const handleChangeTele = name => event => {
        setStateTele({ ...stateTele, [name]: event.target.checked });
    };
    const handleChangeSecond = name => event => {
        setStateSecond({ ...stateSecond, [name]: event.target.checked });
    };
    const handleChangeVideo = name => event => {
        setStateVideo({ ...stateVideo, [name]: event.target.checked });
    };
    const handleChangeReview = name => event => {
        setStateReview({ ...stateReview, [name]: event.target.checked });
    };
    return (
        <React.Fragment>
            <Grid container spacing={3} className="border-top">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link
                                color="inherit"
                            >
                            Home
                        </Link>
                        <Link
                            color="inherit"
                            href={'/'}
                        >
                            Doctor
                        </Link>
                        <Link color="textPrimary" aria-current="page" href="/MasterControl" onClick={handleClick}>
                            Master Control
                        </Link>
                </Breadcrumbs>
            </Grid>
            <Typography component="h5" variant="h5" align="left">
                Master Control
            </Typography>
            <Grid container spacing={3}>
                <Grid className="border-container" item xs={12} sm={4}>
                    <div className={classes.root}>
                        <Paper className={classes.paper}>
                            <Grid container  spacing={2} >
                                <Grid item xs={12}>
                                    <Grid item >
                                        <FormLabel component="legend">Insurance customer</FormLabel>
                                        <Switch
                                            checked={stateIns.checkedA}
                                            onChange={handleChangeIns('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <FormLabel component="legend">Prime plan</FormLabel>
                                        <Switch
                                            checked={statePlan.checkedA}
                                            onChange={handleChangePlan('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <FormLabel component="legend">Retail customer</FormLabel>
                                        <Switch
                                            checked={stateRetial.checkedA}
                                            onChange={handleChangeRetial('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>
                </Grid>
                <Grid className="border-container" item xs={12} sm={4}>
                    <div className={classes.root}>
                        <Paper className={classes.paper}>
                            <Grid container  spacing={2} >
                                <Grid item xs={12}>
                                    <Grid item >
                                    <FormLabel component="legend">Live Support</FormLabel>
                                    <Switch
                                        checked={stateLive.checkedA}
                                        onChange={handleChangeLive('checkedB')}
                                        value="checkedB"
                                        color="primary"
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                    </Grid>
                                    <Grid item>
                                    <FormLabel component="legend">Video consolation</FormLabel>
                                    <Switch
                                        checked={stateVideo.checkedA}
                                        onChange={handleChangeVideo('checkedB')}
                                        value="checkedB"
                                        color="primary"
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                    </Grid>
                                    <Grid item>
                                        <FormLabel component="legend">Tele consultation</FormLabel>
                                        <Switch
                                            checked={stateTele.checkedA}
                                            onChange={handleChangeTele('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>
                </Grid>

                <Grid className="border-container" item xs={12} sm={4}>
                    <div className={classes.root}>
                        <Paper className={classes.paper}>
                            <Grid container  spacing={2} >
                                <Grid item xs={12}>
                                    <Grid item >
                                        <FormLabel component="legend">Option for online patients</FormLabel>
                                        <Switch
                                            checked={statepat.checkedA}
                                            onChange={handleChangepat('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <FormLabel component="legend">Online booking</FormLabel>
                                        <Switch
                                            checked={stateBook.checkedA}
                                            onChange={handleChangeBook('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <FormLabel component="legend">Support International customer</FormLabel>
                                        <Switch
                                            checked={stateInter.checkedA}
                                            onChange={handleChangeInter('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>
                </Grid>
                <Grid className="border-container" item xs={12} sm={4}>
                    <div className={classes.root}>
                        <Paper className={classes.paper}>
                            <Grid container  spacing={2} >
                                <Grid item xs={12}>
                                    <Grid item >
                                        <FormLabel component="legend">Onboard doctor</FormLabel>
                                        <Switch
                                            checked={stateDoc.checkedA}
                                            onChange={handleChangeDoc('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <FormLabel component="legend">IPD capable</FormLabel>
                                        <Switch
                                            checked={stateIPD.checkedA}
                                            onChange={handleChangeIPD('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <FormLabel component="legend">Monthly Visitors tracking</FormLabel>
                                        <Switch
                                            checked={stateTrac.checkedA}
                                            onChange={handleChangeTrac('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>
                </Grid>
                <Grid className="border-container" item xs={12} sm={4}>
                    <div className={classes.root}>
                        <Paper className={classes.paper}>
                            <Grid container  spacing={2} >
                                <Grid item xs={12}>
                                    <Grid item >
                                        <FormLabel component="legend">Second opinion</FormLabel>
                                        <Switch
                                            checked={stateSecond.checkedA}
                                            onChange={handleChangeSecond('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <FormLabel component="legend">Customer Reviews</FormLabel>
                                        <Switch
                                            checked={stateReview.checkedA}
                                            onChange={handleChangeReview('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <FormLabel component="legend">Overall Rank</FormLabel>
                                        <Switch
                                            checked={stateRank.checkedA}
                                            onChange={handleChangeRank('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}