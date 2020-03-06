import React, { Component } from 'react';
import AddressInfo from './addressInfo/addressInfo';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Grid from '@material-ui/core/Grid';
import SearchByDoctor from '../SearchDoctor/SearchByDoctor';
import Link from '@material-ui/core/Link';


function handleClick(event) {
    event.preventDefault();
  }
class Clinic extends Component{
    render() {
        return (
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
                            <Link color="textPrimary" aria-current="page" href="/Clinic" onClick={handleClick}>
                                Clinic
                            </Link>
                    </Breadcrumbs>
                    <Grid item xs={9} sm={9}>
                        <SearchByDoctor />
                    </Grid>
                </Grid>
                <AddressInfo />
            </React.Fragment>
        );
    }
}
export default Clinic;
