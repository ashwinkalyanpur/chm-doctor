import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddTeamTable from './table/AddTeamTable';

import './AddTeamPop.css';


const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function AddTeamPopup() {
    const handleCloseRes = () => setOpen(false);
    // const [showRes, setShowRes] = useState(false);

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };




    return (
        <div>
            <Icon className="fa fa-plus-circle" onClick={handleOpen} color="primary" />
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open} className="fixWidth">
                    <div className={classes.paper}>
                        <div className="titleBar">
                            <h4>Add Team Members</h4>
                            <span onClick={handleCloseRes}>x</span>
                        </div>
                        <React.Fragment>
                            <Grid container spacing={3}>
                                <AddTeamTable />
                               
                                <Grid className="col-12 spacing-btn">
                                    <Button variant="contained" onClick={handleCloseRes}>
                                        Cancel
                                    </Button>
                                    <Button variant="contained" color="primary" onClick={handleCloseRes}>
                                        Save
                                    </Button>
                                </Grid>
                            </Grid>
                        </React.Fragment>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}