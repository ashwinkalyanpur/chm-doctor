import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

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

export default function Research() {
    const classes = useStyles();

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleDateChange = date => {
        setSelectedDate(date);
    };

    return (
        <React.Fragment>
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
        </React.Fragment>
    );
}