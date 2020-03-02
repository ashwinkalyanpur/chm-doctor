import React from 'react';
import './Personal.css';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Grid from '@material-ui/core/Grid';
import SearchByDoctor from '../SearchDoctor/SearchByDoctor';
import Link from '@material-ui/core/Link';

import Address from './Address';
import Personalinfo from './PersonalInfo';
import FamilyDetails from './FamilyDetails';

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

const steps = ['Address Details', 'Personal Information', 'Family Details'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Address />;
    case 1:
      return <Personalinfo />;
    case 2:
      return <FamilyDetails />;
    default:
      throw new Error('Unknown step');
  
    }
}
export default function Personal() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  }
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
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
                <Link color="textPrimary" aria-current="page" href="/Personal" onClick={handleClick}>
                    Personal Details
                </Link>
        </Breadcrumbs>
        </Grid>
        <Grid item xs={12} sm={12}>
            <SearchByDoctor />
        </Grid>
    </Grid>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your Profile details upload.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Submit Details' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}