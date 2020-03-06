import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

import DetailsTable from './detailsTable';
import SearchByDoctor from './SearchByDoctor';



import './SearchDoctor.css';
import AddDoctorBtn from "./AddDoctorBtn";

function handleClick(event) {
    event.preventDefault();
  }
const styles = theme => ({
    formControl: {
        margin: theme.spacing(4),
        minWidth: 120
    }
});
class SearchDoctor extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            
            <form className={classes.root} autoComplete="on">
                
                <React.Fragment>
                    
                    <Grid container spacing={3}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Typography color="textPrimary">Home</Typography>
                        </Breadcrumbs>
                        <Grid item xs={10} sm={10}>
                            <SearchByDoctor />
                        </Grid>
                        <Grid item xs={12} sm={1}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <AddDoctorBtn />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Typography component="h5" variant="h5" align="left">
                            Search Doctor
                        </Typography>
                        <Grid item xs={12} sm={12}>
                            <DetailsTable />
                        </Grid>
                    </Grid>
                </React.Fragment>
            </form>
        );
    }
}

SearchDoctor.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchDoctor);
