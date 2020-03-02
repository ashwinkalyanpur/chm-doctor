import 'date-fns';
import React, { Fragment, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';


function handleClick(event) {
    event.preventDefault();
  }
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

export default function FamilyDetails() {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleDateChange = date => {
        setSelectedDate(date);
    };
    return (
        <React.Fragment>
            <Typography component="h1" variant="h4" align="center">
                 Family Details
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Date Of Birth"
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Marrage Date"
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="spouseName"
                        name="spouseName"
                        label="Spouse Name"
                        fullWidth
                        autoComplete="sname"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="kidName"
                        name="kidName"
                        label="Kid Name"
                        fullWidth
                        autoComplete="kname"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                    >Add Kids</Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="hobbies"
                        name="hobbies"
                        label="Hobbies"
                        fullWidth
                        autoComplete="hobbies"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                    >Add Hobbies</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}