import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Medical from './Medical/Medical';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Grid from '@material-ui/core/Grid';
import SearchByDoctor from '../SearchDoctor/SearchByDoctor';
import Link from '@material-ui/core/Link';


function handleClick(event) {
    event.preventDefault();
  }

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function Procedures() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
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
                <Link color="textPrimary" aria-current="page" href="/Procedures" onClick={handleClick}>
                    Procedures
                </Link>
          </Breadcrumbs>
          <Grid item xs={9} sm={9}>
              <SearchByDoctor />
          </Grid>
      </Grid>
      <Typography component="h5" variant="h5" align="center">
          Procedure Details
      </Typography>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Medical services</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Medical />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Surgical services</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Medical />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
    </div>
  );
}