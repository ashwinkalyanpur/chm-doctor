import React, { Component, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './ProfessionalDetails.css';
import DateFnsUtils from '@date-io/date-fns';
import Modal from 'react-bootstrap/Modal';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import Awards from './Award/Awards';
import PatientTreated from './PatientTable/PatientTreated';
import DoctorExperience from './DoctorExpTable/DoctorExperience';
import DoctorQualification from './DoctorQuaTable/DoctorQualification';

const useStyles = makeStyles(theme => ({
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

const ExpansionPanel = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiExpansionPanelDetails);

export default function ProfessionalDetails() {
    const classes = useStyles();
    const handleCloseDoc = () => setShowDoc(false);
    const handleCloseRes = () => setShowRes(false);
    const handleCloseAwd = () => setShowAwd(false);

    const [showAwd, setShowAwd] = useState(false);
    const [showDoc, setShowDoc] = useState(false);
    const [showRes, setShowRes] = useState(false);

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleDateChange = date => {
        setSelectedDate(date);
    };

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Professional Details
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                    <TextField
                        id="designation"
                        name="designation"
                        label="Designation"
                        fullWidth
                        autoComplete="designation"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={() => setShowAwd(true)}
                    >Awards and Achivement</Button>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={() => setShowDoc(true)}
                    >Doctore signature
                    </Button>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={() => setShowRes(true)}
                    >Research Articles
                    </Button>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography>Patient treated for each disease</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <PatientTreated />
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
                            <Typography>Doctor experience</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                           <DoctorExperience />
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography>Doctor qualification</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                           <DoctorQualification />
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Grid>
                <Modal
                    size="lg"
                    show={showAwd}
                    onHide={() => setShowAwd(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Awards and Achivement
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Awards />
                        <Grid className="col-12 top-spacing">
                            <Button variant="contained" onClick={handleCloseAwd}>
                                Cancel
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleCloseAwd}>
                                Add
                            </Button>
                        </Grid>
                    </Modal.Body>
                </Modal>
                <Modal
                    size="lg"
                    show={showDoc}
                    onHide={() => setShowDoc(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Doctor Digital Signature
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Grid className="col-12">
                            <Button variant="contained" onClick={handleCloseDoc}>
                                Cancel
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleCloseDoc}>
                                Add
                            </Button>
                        </Grid>
                    </Modal.Body>
                </Modal>
                <Modal
                    size="lg"
                    show={showRes}
                    onHide={() => setShowRes(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Research Articles
                </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Grid item xs={12} sm={10}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="Research Articles Published Date"
                                    format="MM/dd/yyyy"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid className="row">
                            <Grid className="col-12">
                                <TextField
                                    placeholder="Research Description"
                                    multiline={true}
                                    rows={2}
                                    rowsMax={4}
                                />
                            </Grid>
                        </Grid>
                        <Grid className="row">
                            <Grid className="col-6">
                                <TextField
                                    required
                                    id="uploadFile"
                                    name="uploadFile"
                                    label="Upload Research Articles Image"
                                    fullWidth
                                    autoComplete="uploadFile"
                                />
                            </Grid>
                            <Grid className="col-6">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                >Upload Research Articles Image</Button>
                            </Grid>

                        </Grid>
                        <Grid className="col-12">
                            <Button variant="contained" onClick={handleCloseRes}>
                                Cancel
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleCloseRes}>
                                Add
                            </Button>
                        </Grid>
                    </Modal.Body>
                </Modal>
            </Grid>
        </React.Fragment>

    );
}