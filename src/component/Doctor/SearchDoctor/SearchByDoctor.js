import React from "react";

import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import TextField from '@material-ui/core/TextField';
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Button from '@material-ui/core/Button';


import './SearchDoctor.css';


const styles = theme => ({
    formControl: {
        margin: theme.spacing(4),
        minWidth: 120,
        maxWidth: "90%"
    }
});
class SearchByDoctor extends React.Component {
    state = {
        Hospitals: "",
        Doctor: "",
        labelWidth: 0
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3}>
                        <FormControl className={classes.formControl}>
                            <InputLabel ref={this.InputLabelRef} htmlFor="outlined-Hospitals-simple">
                                Hospital/Clinic
                            </InputLabel>
                            <Select
                                className="selectborder"
                                value={this.state.Hospitals}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'Hospitals',
                                    id: 'Hospitals-native-simple',
                                }}
                            >
                                <MenuItem value="">
                                    <em>Select</em>
                                </MenuItem>
                                <MenuItem value={"Hospitals 1"}>Apollo Hospitals Sheshadripuram</MenuItem>
                                <MenuItem value={"Hospitals 2"}>Apollo Hospitals Bannerghatta</MenuItem>
                                <MenuItem value={"Hospitals 3"}>Apollo Hospitals Guddadahalli</MenuItem>
                                <MenuItem value={"Hospitals 4"}>Manipal Hospital Malleshwaram</MenuItem>
                                <MenuItem value={"Hospitals 5"}>Manipal Hospital Whitefield</MenuItem>
                                <MenuItem value={"Hospitals 6"}>Manipal Hospitals Jayanagar</MenuItem>
                                <MenuItem value={"Hospitals 7"}>Fortis Hospital Rajajinagar</MenuItem>
                                <MenuItem value={"Hospitals 8"}>Fortis Hospital Nagarbhavi</MenuItem>
                                <MenuItem value={"Hospitals 9"}>Fortis Hospital Vasanth Nagar</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl className={classes.formControl}>
                            <InputLabel ref={this.InputLabelRef} htmlFor="outlined-state-simple">
                                Search By Doctor
                                </InputLabel>
                            <Select
                                value={this.state.doctor}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'doctor',
                                    id: 'state-native-simple',
                                }}
                            >
                                <MenuItem value="">
                                    <em>Select</em>
                                </MenuItem>
                                <MenuItem value={"Doctor 1"}>Dr.Manjunath M</MenuItem>
                                <MenuItem value={"Doctor 2"}>Dr.Rajesh G</MenuItem>
                                <MenuItem value={"Doctor 3"}>Dr.Keshav S</MenuItem>
                                <MenuItem value={"Doctor 2"}>Dr.Rajesh G S</MenuItem>
                                <MenuItem value={"Doctor 3"}>Dr.Keshav S M</MenuItem>
                                <MenuItem value={"Doctor 2"}>Dr.Rajesh K</MenuItem>
                                <MenuItem value={"Doctor 3"}>Dr.Keshav N</MenuItem>
                                <MenuItem value={"Doctor 2"}>Dr.Rajesh S</MenuItem>
                                <MenuItem value={"Doctor 3"}>Dr.Keshav S R</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                        <FormControl className={classes.formControl}>
                            <InputLabel ref={this.InputLabelRef} className="align" htmlFor="outlined-clinic-simple">
                                OR
                            </InputLabel>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl className={classes.formControl}>
                            <TextField
                                id="doctorID"
                                name="DoctorID"
                                label="Doctor ID"
                                fullWidth
                                autoComplete="oClinic"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                            <Button variant="contained" className="btnTopSpacing" color="primary">
                            <i className="fa fa-search" aria-hidden="true"></i> Search
                            </Button>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

SearchByDoctor.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchByDoctor);