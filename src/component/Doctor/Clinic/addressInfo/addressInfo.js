import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Dialog from "@material-ui/core/Dialog";
import DetailsTable from "./detailsTable";

import './addressInfo.css';

const styles = theme => ({
    formControl: {
        margin: theme.spacing(4),
        minWidth: 120
    }
});

class AddressInfo extends React.Component {
    state = {
        country: "",
        state: "",
        city: "",
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
                    <Typography variant="h6" gutterBottom>
                        Professional Details
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
                        <Grid item xs={12} sm={12}>
                            <DetailsTable />
                        </Grid>
                    </Grid>
                </React.Fragment>
            </form>
        );
    }
}

AddressInfo.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddressInfo);
