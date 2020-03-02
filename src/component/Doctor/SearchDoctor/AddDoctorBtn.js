import React, { Component, useState } from "react";
import { Grid } from "@material-ui/core";

import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal';
import { makeStyles } from '@material-ui/core/styles';
import SearchByDoctor from './SearchByDoctor';
import './SearchDoctor.css';


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

export default function AddDoctorBtn() {
    const classes = useStyles();

    const handleCloseAddDoc = () => setShowAddDoc(false);

    const [showAddDoc, setShowAddDoc] = useState(false);
    return (
            <React.Fragment>
                <Grid item xs={12} sm={1}>
                    <Button variant="contained" 
                    color="primary"
                    className="btnTopSpacing"
                    onClick={() => setShowAddDoc(true)}>
                        <i className="fa fa-user-plus" aria-hidden="true"></i> Add
                    </Button>
                </Grid>
                <Modal
                        size="lg"
                        show={showAddDoc}
                        onHide={() => setShowAddDoc(false)}
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">
                                Add Doctor Basic information
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Grid>
                                <SearchByDoctor />
                            </Grid>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="contained" className='cancelBtn' onClick={handleCloseAddDoc}>
                                    Cancel
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={() => setShowAddDoc(true)}
                                >  <i className="fa fa-user-plus" aria-hidden="true"></i> Add
                            </Button>
                        </Modal.Footer>
                    </Modal>
            </React.Fragment>
    );
}