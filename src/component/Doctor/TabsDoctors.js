import React from 'react';
import './TabsDoctors.css';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Personal from './Personal/Personal';
import ProfessionalDetails from './Professional/ProfessionalDetails';
import Clinic from './Clinic/Clinic';
import Hospital from './Hospital/Hospital';
import Procedures from './Procedures/Procedures';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Personal Details" href="/Personal" />
          <LinkTab label="Professional Details" href="/Professional" />
          <LinkTab label="Clinic" href="/Clinic" />
          <LinkTab label="Hospital" href="/Hospital" />
          <LinkTab label="Procedures" href="/Procedures" />
          <LinkTab label="Social" href="/Social" />
          <LinkTab label="Master Control" href="/MasterControl" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Personal />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProfessionalDetails />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Clinic />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Hospital />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Procedures />
      </TabPanel>
      <TabPanel value={value} index={5}>
      Social page under construction
      </TabPanel>
      <TabPanel value={value} index={6}>
      Master Control page under construction
      </TabPanel>
    </div>
  );
}
