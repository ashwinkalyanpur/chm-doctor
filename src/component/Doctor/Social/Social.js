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
                        className="fa fa-google-plus"
                    />
                </Grid>

                <Grid item xs={12} sm={4}>
                    <TextField
                        id="Facebook"
                        name="Facebook"
                        label="Facebook"
                        fullWidth
                        autoComplete="facebook"
                        className="fa fa-facebook"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="Instagram"
                        name="Instagram"
                        label="Instagram"
                        fullWidth
                        autoComplete="instagram"
                        className="fa fa-instagram"

                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="Twitter"
                        name="Twitter"
                        label="Twitter"
                        fullWidth
                        autoComplete="Twitter"
                        className="fa fa-twitter"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="LinkedIn"
                        name="LinkedIn"
                        label="LinkedIn"
                        fullWidth
                        autoComplete="linkedIn"
                        className="fa fa-linkedin"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="Skype ID"
                        name="Skype ID"
                        label="Skype ID"
                        fullWidth
                        autoComplete="skypeID"
                        className="fa fa-skype"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="Website"
                        name="Website"
                        label="Website"
                        fullWidth
                        autoComplete="website"
                        className="fa fa-globe"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="Youtube Link"
                        name="Youtube Link"
                        label="Youtube Link"
                        fullWidth
                        autoComplete="youtubeLink"
                        className="fa fa-youtube"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="Member of Associations"
                        name="Member of Associations"
                        label="Member of Associations"
                        fullWidth
                        autoComplete="MemberofAssociations"
                        className="fa fa-user-md"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="Interested to Contribute to needy"
                        name="Interested to Contribute to needy"
                        label="Interested to Contribute to needy"
                        fullWidth
                        autoComplete="InterestedtoContributetoneedy"
                        className="fa fa-money"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="Wats app number"
                        name="Wats app number"
                        label="Wats app number"
                        fullWidth
                        autoComplete="watsappnumber"
                        className="fa fa-whatsapp"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="Viemo link"
                        name="Viemo link"
                        label="Viemo link"
                        fullWidth
                        autoComplete="viemolink"
                        className="fa fa-vimeo-square"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="Blog"
                        name="Blog"
                        label="Blog"
                        fullWidth
                        autoComplete="blog"
                        className="fa fa-file"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="Tumblr"
                        name="Print rest link"
                        label="Print rest link"
                        fullWidth
                        autoComplete="printrestlink"
                        className="fa fa-pinterest"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="Tumblr"
                        name="Tumblr"
                        label="Tumblr"
                        fullWidth
                        autoComplete="Tumblr"
                        className="fa fa-tumblr"
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

