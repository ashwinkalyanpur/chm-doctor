
import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './Awards.css';


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

export default function Awards() {
    const classes = useStyles();

    return (
        <React.Fragment>
           
            <Grid container spacing={3}>
                <Grid item xs={12} sm={10}>
                    <TextField
                        placeholder="Description"
                        multiline={true}
                        rows={2}
                        rowsMax={4}
                    />
                </Grid>
                    <Grid className="col-6">
                        <TextField
                            required
                            id="uploadFile"
                            name="uploadFile"
                            label="Upload File"
                            fullWidth
                            autoComplete="uploadFile"
                        />
                    </Grid>
                    <Grid className="col-6">
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >Upload File</Button>
                    </Grid>
            </Grid>
        </React.Fragment>

    );
}