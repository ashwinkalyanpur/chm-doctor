import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Modal from 'react-bootstrap/Modal';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from '@material-ui/core/TextField';
import Pagination from '@material-ui/lab/Pagination';
import { TableFooter } from '@material-ui/core';


import './DoctorExperience.css';


function createData(Designation, hospital, joinedDate, relivedDate, location) {
  return { Designation, hospital, joinedDate, relivedDate, location };
}

const rows = [
  createData('Sample 16', 'Apollo', 1995, 2001, 'Malleshwaram'),
  createData('Sample 17', 'Apollo 1', 1999, 2002, 'MG Road'),
  createData('Sample 18', 'Apollo 2', 1996, 2003, 'Gandhi bazaar'),
  createData('Sample 19', 'Apollo 3', 1984, 2004, 'BTM Layout'),
  createData('Sample 20', 'Apollo 4', 2001, 2005, 'HSR Layout'),
  createData('Sample 1', 'Apollo 5', 2000, 2006, 'JP Nagar'),
  createData('Sample 2', 'Manipal Hospital 1', 2003, 2007, 'Rajajinagar'),
  createData('Sample 3', 'Manipal Hospital 2', 2001, 2008, 'RV Road'),
  createData('Sample 4', 'Manipal Hospital 3', 1993, 2009, 'Malleshwaram'),
  createData('Sample 5', 'Manipal Hospital 4', 1996, 2010, 'MG Road'),
  createData('Sample 6', 'Manipal Hospital 5', 1995, 2011, 'Gandhi bazaar'),
  createData('Sample 7', 'Fortis Hospital 1', 1996, 2012, 'BTM Layout'),
  createData('Sample 8', 'Fortis Hospital 2', 2003, 2013, 'HSR Layout'),
  createData('Sample 9', 'Fortis Hospital 3', 2008, 2014, 'JP Nagar'),
  createData('Sample 10', 'Fortis Hospital 4', 2006, 2015, 'Rajajinagar'),
  createData('Sample 11', 'Fortis Hospital 5', 2001, 2016, 'RV Road'),
  createData('Sample 12', 'Columbia Hospital 1', 2005, 2017, 'Malleshwaram'),
  createData('Sample 13', 'Columbia Hospital 2', 1996, 2018, 'MG Road'),
  createData('Sample 14', 'Columbia Hospital 3', 2003, 2019, 'JP Nagar'),
  createData('Sample 15', 'Columbia Hospital 4', 1984, 2020, 'Rajajinagar'),

];


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));


export default function DoctorExperience() {
  const classes = useStyles();

  const handleCloseDetailsTable = () => setShowDetailsTable(false);

  const [showDetailsTable, setShowDetailsTable] = useState(false);

  const handleCloseDeleteTable = () => setShowDeleteTable(false);

  const [showDeleteTable, setShowDeleteTable] = useState(false);

  const [state, setState] = React.useState({
    checkedB: true,
  });


  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  return (
    <Table className={classes.table} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell>Designation</TableCell>
          <TableCell align="right">Patients Treated</TableCell>
          <TableCell align="right">Joined Rate</TableCell>
          <TableCell align="right">Relived Date</TableCell>
          <TableCell align="right">location</TableCell>
          <TableCell align="right">Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.Designation}>
            <TableCell component="th" scope="row">
              {row.Designation}
            </TableCell>
            <TableCell align="right">{row.hospital}</TableCell>
            <TableCell align="right">{row.joinedDate}</TableCell>
            <TableCell align="right">{row.relivedDate}</TableCell>
            <TableCell align="right">{row.location}</TableCell>
            <TableCell align="right">
              <IconButton edge="end" aria-label="edit">
                <EditIcon onClick={() => setShowDetailsTable(true)} />
              </IconButton>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon onClick={() => setShowDeleteTable(true)} />
              </IconButton>
              {/* Edit Doctor Popup */}
              <Modal
                size="lg"
                show={showDetailsTable}
                onHide={() => setShowDetailsTable(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg">
                    Edit Doctor Basic Information
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Grid container spacing={3}>
                    <Grid item xs={6} sm={4}>
                      <InputLabel htmlFor="Designation">
                        Designation Name
                      </InputLabel>
                      <FormControl className={classes.formControl}>
                        <TextField
                          id="Designation"
                          name="Designation"
                          value={row.Designation}
                          fullWidth
                          autoComplete="oClinic"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <InputLabel htmlFor="hospital">
                        Patients Treated
                      </InputLabel>
                      <FormControl className={classes.formControl}>
                        <TextField
                          id="hospital"
                          name="hospital"
                          value={row.hospital}
                          fullWidth
                          autoComplete="oClinic"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <InputLabel htmlFor="joinedDate">
                        Joined Rate
                      </InputLabel>
                      <FormControl className={classes.formControl}>
                        <TextField
                          id="joinedDate"
                          name="joinedDate"
                          value={row.joinedDate}
                          fullWidth
                          autoComplete="oClinic"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <InputLabel htmlFor="relivedDate">
                        Relived Date
                      </InputLabel>
                      <FormControl className={classes.formControl}>
                        <TextField
                          id="relivedDate"
                          name="relivedDate"
                          value={row.relivedDate}
                          fullWidth
                          autoComplete="oClinic"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <InputLabel htmlFor="location">
                        location
                      </InputLabel>
                      <FormControl className={classes.formControl}>
                        <TextField
                          id="location"
                          name="location"
                          value={row.location}
                          fullWidth
                          autoComplete="oClinic"
                        />
                      </FormControl>
                    </Grid>
                    <Grid className="top-spacing" item xs={12} sm={12}>
                      <Button variant="contained" onClick={handleCloseDetailsTable}>
                        Cancel
                        </Button>
                      <Button variant="contained" color="primary" onClick={handleCloseDetailsTable}>
                        Update
                        </Button>
                    </Grid>
                  </Grid>

                </Modal.Body>
              </Modal>
              {/* End Edit Doctor Popup */}
              {/* Delete Doctor Popup */}
              <Modal
                size="lg"
                show={showDeleteTable}
                onHide={() => setShowDeleteTable(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg">
                    Delete Doctor Basic Information
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Grid container spacing={3}>
                    <Grid item xs={6} sm={4}>
                      <InputLabel htmlFor="Designation">
                        {row.Designation}
                      </InputLabel>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <InputLabel htmlFor="hospital">
                        {row.hospital}
                      </InputLabel>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <InputLabel htmlFor="joinedDate">
                        {row.joinedDate}
                      </InputLabel>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <InputLabel htmlFor="relivedDate">
                        {row.relivedDate}
                      </InputLabel>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <InputLabel htmlFor="location">
                        {row.location}
                      </InputLabel>
                    </Grid>
                  </Grid>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="contained" onClick={handleCloseDeleteTable}>
                    Cancel
                    </Button>
                  <Button variant="contained" color="primary" onClick={handleCloseDeleteTable}>
                    Delete
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* End Delete Doctor Popup */}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan="5">
            <Grid className="top-spacing" item xs={12} sm={12}>
              <Pagination count={10} color="primary" />
            </Grid>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>

  );
}