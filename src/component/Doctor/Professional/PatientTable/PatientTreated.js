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



import './PatientTreated.css';




function createData(disease, Patientstreated, Successrate, Year) {
  return { disease, Patientstreated, Successrate, Year };
}

const rows = [
        createData( 'Sample 17', 'Apollo 1', '65%', 2002 ),
        createData( 'Sample 18', 'Apollo 2', '75%', 2003 ),
        createData( 'Sample 19', 'Apollo 3', '85%', 2004 ),
        createData( 'Sample 20', 'Apollo 4', '95%', 2005 ),
        createData( 'Sample 1', 'Apollo 5', '60%', 2006 ),
        createData( 'Sample 2', 'Manipal Hospital 1', '33%', 2007 ),
        createData( 'Sample 3', 'Manipal Hospital 2', '80%', 2008 ),
        createData( 'Sample 4', 'Manipal Hospital 3', '90%', 2009 ),
        createData( 'Sample 5', 'Manipal Hospital 4', '75%', 2010 ),
        createData( 'Sample 6', 'Manipal Hospital 5', '90%', 2011 ),
        createData( 'Sample 7', 'Fortis Hospital 1', '95%', 2012 ),
        createData( 'Sample 8', 'Fortis Hospital 2', '96%', 2013 ),
        createData( 'Sample 9', 'Fortis Hospital 3', '95%', 2014 ),
        createData( 'Sample 10', 'Fortis Hospital 4', '98%', 2015 ),
        createData( 'Sample 11', 'Fortis Hospital 5', '93%', 2016 ),
        createData( 'Sample 12', 'Columbia Hospital 1', '88%', 2017 ),
        createData( 'Sample 13', 'Columbia Hospital 2', '85%', 2018 ),
        createData( 'Sample 14', 'Columbia Hospital 3', '44%', 2019 ),
        createData( 'Sample 15', 'Columbia Hospital 4', '45%', 2020 ),

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


export default function PatientTreated() {
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
          <TableCell>Disease</TableCell>
          <TableCell align="right">Patients Treated</TableCell>
          <TableCell align="right">Success Rate</TableCell>
          <TableCell align="right">Year</TableCell>
          <TableCell align="right">Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.disease}>
            <TableCell component="th" scope="row">
              {row.disease}
            </TableCell>
            <TableCell align="right">{row.Patientstreated}</TableCell>
            <TableCell align="right">{row.Successrate}</TableCell>
            <TableCell align="right">{row.Year}</TableCell>
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
                      <InputLabel htmlFor="disease">
                      Disease Name
                      </InputLabel>
                      <FormControl className={classes.formControl}>
                        <TextField
                          id="disease"
                          name="disease"
                          value={row.disease}
                          fullWidth
                          autoComplete="oClinic"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                    <InputLabel htmlFor="Patientstreated">
                        Patients Treated
                      </InputLabel>
                      <FormControl className={classes.formControl}>
                        <TextField
                          id="Patientstreated"
                          name="Patientstreated"
                          value={row.Patientstreated}
                          fullWidth
                          autoComplete="oClinic"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                    <InputLabel htmlFor="Successrate">
                      Success Rate
                      </InputLabel>
                      <FormControl className={classes.formControl}>
                        <TextField
                          id="Successrate"
                          name="Successrate"
                          value={row.Successrate}
                          fullWidth
                          autoComplete="oClinic"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                    <InputLabel htmlFor="Year">
                        Year
                      </InputLabel>
                      <FormControl className={classes.formControl}>
                        <TextField
                          id="Year"
                          name="Year"
                          value={row.Year}
                          fullWidth
                          autoComplete="oClinic"
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="contained" onClick={handleCloseDetailsTable}>
                    Cancel
                    </Button>
                  <Button variant="contained" color="primary" onClick={handleCloseDetailsTable}>
                    Update
                  </Button>
                </Modal.Footer>
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
                    <Grid item xs={6} sm={3}>
                      <InputLabel htmlFor="disease">
                      {row.disease}
                      </InputLabel>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                    <InputLabel htmlFor="Patientstreated">
                      {row.Patientstreated}
                      </InputLabel>
                    </Grid>
                    <Grid item xs={6} sm={2}>
                    <InputLabel htmlFor="Successrate">
                      {row.Successrate}
                      </InputLabel>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <InputLabel htmlFor="Year">
                      {row.Year}
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