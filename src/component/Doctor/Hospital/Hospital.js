import React from "react";
import Typography from '@material-ui/core/Typography';
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Grid from '@material-ui/core/Grid';
import SearchByDoctor from '../SearchDoctor/SearchByDoctor';
import Link from '@material-ui/core/Link';

import './Hospital.css';


function handleClick(event) {
    event.preventDefault();
  }

const styles = theme => ({
    formControl: {
        margin: theme.spacing(4),
        minWidth: 120
    }
});

class Hospital extends React.Component {
    state = {
        country: "",
        state: "",
        city: "",
        hospital: "",
        labelWidth: 0
    };

    componentDidMount() {
        this.setState({
            labelWidth: ReactDOM.findDOMNode(this.InputLabelRef.current).offsetWidth
        });
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { classes } = this.props;

        this.InputLabelRef = React.createRef();
        return (
            <form className={classes.root} autoComplete="off">
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
                            <Link color="textPrimary" aria-current="page" href="/Hospital" onClick={handleClick}>
                                Hospital
                            </Link>
                    </Breadcrumbs>
                    <Grid item xs={9} sm={9}>
                        <SearchByDoctor />
                    </Grid>
                </Grid>
                <Typography component="h5" variant="h5" align="left">
                        Hospital Details
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <FormControl className={classes.formControl}>
                                <InputLabel ref={this.InputLabelRef} htmlFor="outlined-country-simple">
                                    Country
                                </InputLabel>
                                <Select
                                    value={this.state.country}
                                    onChange={this.handleChange}
                                    inputProps={{
                                        name: 'country',
                                        id: 'country-native-simple',
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>Select</em>
                                    </MenuItem>
                                    <MenuItem value={"Country 1"}>Country 1</MenuItem>
                                    <MenuItem value={"Country 2"}>Country 2</MenuItem>
                                    <MenuItem value={"Country 3"}>Country 3</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl className={classes.formControl}>
                                <InputLabel ref={this.InputLabelRef} htmlFor="outlined-state-simple">
                                    State
                                </InputLabel>
                                <Select
                                    value={this.state.state}
                                    onChange={this.handleChange}
                                    inputProps={{
                                        name: 'state',
                                        id: 'state-native-simple',
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>Select</em>
                                    </MenuItem>
                                    <MenuItem value={"state 1"}>state 1</MenuItem>
                                    <MenuItem value={"state 2"}>state 2</MenuItem>
                                    <MenuItem value={"state 3"}>state 3</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl className={classes.formControl}>
                                <InputLabel ref={this.InputLabelRef} htmlFor="outlined-city-simple">
                                    City
                                </InputLabel>
                                <Select
                                    value={this.state.city}
                                    onChange={this.handleChange}
                                    inputProps={{
                                        name: 'city',
                                        id: 'city-native-simple',
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>Select</em>
                                    </MenuItem>
                                    <MenuItem value={"city 1"}>city 1</MenuItem>
                                    <MenuItem value={"city 2"}>city 2</MenuItem>
                                    <MenuItem value={"city 3"}>city 3</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl className={classes.formControl}>
                                <InputLabel ref={this.InputLabelRef} htmlFor="outlined-hospital-simple">
                                    Hospital Name
                                </InputLabel>
                                <Select
                                    value={this.state.hospital}
                                    onChange={this.handleChange}
                                    inputProps={{
                                        name: 'hospital',
                                        id: 'hospital-native-simple',
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>Select</em>
                                    </MenuItem>
                                    <MenuItem value={"hospital 1"}>Hospital Name 1</MenuItem>
                                    <MenuItem value={"hospital 2"}>Hospital Name 2</MenuItem>
                                    <MenuItem value={"hospital 3"}>Hospital Name 3</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl className={classes.formControl}>
                                <TextField
                                    required
                                    id="DPSpeciality"
                                    name="DPSpeciality"
                                    label="Designation/ Primary speciality"
                                    fullWidth
                                    autoComplete="DPSpeciality"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl className={classes.formControl}>
                                <TextField
                                    required
                                    id="DPSpeciality"
                                    name="DPSpeciality"
                                    label="Years of working"
                                    fullWidth
                                    autoComplete="DPSpeciality"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl className={classes.formControl}>
                                <TextField
                                    required
                                    id="DPSpeciality"
                                    name="DPSpeciality"
                                    label="Hospital Address"
                                    fullWidth
                                    autoComplete="DPSpeciality"
                                    multiline={true}
                                    rows={2}
                                    rowsMax={4}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl className={classes.formControl}>
                                <TextField
                                    required
                                    id="DPSpeciality"
                                    name="DPSpeciality"
                                    label="Achievements in the Hospital"
                                    fullWidth
                                    autoComplete="DPSpeciality"
                                    multiline={true}
                                    rows={2}
                                    rowsMax={4}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl className={classes.formControl}>
                                <TextField
                                    required
                                    id="DPSpeciality"
                                    name="DPSpeciality"
                                    label="Medical Team"
                                    fullWidth
                                    autoComplete="DPSpeciality"
                                    multiline={true}
                                    rows={2}
                                    rowsMax={4}
                                />
                            </FormControl>
                        </Grid>
                        <Grid className="col-12 top-spacing">
                            <Button variant="contained">
                                Cancel
                            </Button>
                            <Button variant="contained" color="primary">
                                Add
                            </Button>
                        </Grid>
                    </Grid>
                </React.Fragment>
            </form>
            
        );
    }
}

Hospital.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Hospital);
