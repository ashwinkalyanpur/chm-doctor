import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

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

export default function Personalinfo() {
    const classes = useStyles();
    
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Personal Details
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="primaryEmail"
                        name="primaryEmail"
                        label="Primary Email Id"
                        fullWidth
                        autoComplete="pemail"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="alternateEmail"
                        name="alternateEmail"
                        label="Alternate Email Id"
                        fullWidth
                        autoComplete="aemail"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="website"
                        name="website"
                        label="Website URL"
                        fullWidth
                        autoComplete="website"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="mobilenumber"
                        name="mobilenumber"
                        label="Mobile Number"
                        fullWidth
                        autoComplete="mnumber"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="homenumber"
                        name="homenumber"
                        label="Home Landline Number"
                        fullWidth
                        autoComplete="hnumber"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="officenumber"
                        name="officenumber"
                        label="Office Number"
                        fullWidth
                        autoComplete="onumber"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="awards"
                        name="awards"
                        label="Awards"
                        fullWidth
                        autoComplete="Awards"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                    >Upload File</Button>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="language"
                        name="language"
                        label="Language"
                        fullWidth
                        autoComplete="language"
                    />
                </Grid>
                
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="read" />}
                        label="Read"
                    />
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="write" />}
                        label="Write"
                    />
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="speak" />}
                        label="Speak"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                    >Add language</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
