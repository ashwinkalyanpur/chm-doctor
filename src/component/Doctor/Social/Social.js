import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


import './Social.css';

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

export default function Social() {
    const classes = useStyles();


    return (
        <React.Fragment>
            <Typography component="h1" variant="h4" align="center">
                Social Media
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="Google"
                        name="Google"
                        label="Google"
                        fullWidth
                        autoComplete="google"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="Facebook"
                        name="Facebook"
                        label="Facebook"
                        fullWidth
                        autoComplete="facebook"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="Instagram"
                        name="Instagram"
                        label="Instagram"
                        fullWidth
                        autoComplete="instagram"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="Tweeter"
                        name="Tweeter"
                        label="Tweeter"
                        fullWidth
                        autoComplete="tweeter"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="LinkedIn"
                        name="LinkedIn"
                        label="LinkedIn"
                        fullWidth
                        autoComplete="linkedIn"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="Skype ID"
                        name="Skype ID"
                        label="Skype ID"
                        fullWidth
                        autoComplete="skypeID"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="Website"
                        name="Website"
                        label="Website"
                        fullWidth
                        autoComplete="website"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="Youtube Link"
                        name="Youtube Link"
                        label="Youtube Link"
                        fullWidth
                        autoComplete="youtubeLink"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="Member of Associations"
                        name="Member of Associations"
                        label="Member of Associations"
                        fullWidth
                        autoComplete="MemberofAssociations"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="Interested to Contribute to needy"
                        name="Interested to Contribute to needy"
                        label="Interested to Contribute to needy"
                        fullWidth
                        autoComplete="InterestedtoContributetoneedy"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="Wats app number"
                        name="Wats app number"
                        label="Wats app number"
                        fullWidth
                        autoComplete="watsappnumber"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="Viemo link"
                        name="Viemo link"
                        label="Viemo link"
                        fullWidth
                        autoComplete="viemolink"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="Blog"
                        name="Blog"
                        label="Blog"
                        fullWidth
                        autoComplete="blog"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="Print rest link"
                        name="Print rest link"
                        label="Print rest link"
                        fullWidth
                        autoComplete="printrestlink"
                    />
                </Grid>
                <Grid container spacing={3}>
                <Grid item xs={12} sm={8}>
                </Grid>
                    <Grid item xs={12} sm={4}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >Cancel</Button>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >Submit</Button>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>

    );
}

