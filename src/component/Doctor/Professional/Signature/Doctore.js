import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './Doctore.css';

<Grid item xs={12} sm={10}>
    <TextField
        autoFocus
        margin="dense"
        id="documentInfo"
        label="Document Info"
        type="text"
        fullWidth
        disabled
    />
</Grid>
    <Grid className="row">
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