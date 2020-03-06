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



import './DoctorQualification.css';




function createData(qualification, specialization, university, achievements) {
  return { qualification, specialization, university, achievements };
}

const rows = [
  createData('Sample 16', 'Apollo', 'Test University 1', 2001),
  createData('Sample 17', 'Apollo 1', 'Test University 2', 2002),
  createData('Sample 18', 'Apollo 2', 'Test University 3', 2003),
  createData('Sample 19', 'Apollo 3', 'Test University 4', 2004),
  createData('Sample 20', 'Apollo 4', 'Test University 5', 2005),
  createData('Sample 1', 'Apollo 5', 'Test University 6', 2006),
  createData('Sample 2', 'Manipal Hospital 1', 'Test University 7', 2007),
  createData('Sample 3', 'Manipal Hospital 2', 'Test University 8', 2008),
  createData('Sample 4', 'Manipal Hospital 3', 'Test University 9', 2009),
  createData('Sample 5', 'Manipal Hospital 4', 'Test University 10', 2010),
  createData('Sample 6', 'Manipal Hospital 5', 'Test University 11', 2011),
  createData('Sample 7', 'Fortis Hospital 1', 'Test University 5', 2012),
  createData('Sample 8', 'Fortis Hospital 2', 'Test University 12', 2013),
  createData('Sample 9', 'Fortis Hospital 3', 'Test University 5', 2014),
  createData('Sample 10', 'Fortis Hospital 4', 'Test University 13', 2015),
  createData('Sample 11', 'Fortis Hospital 5', 'Test University 14', 2016),
  createData('Sample 12', 'Columbia Hospital 1', 'Test University 15', 2017),
  createData('Sample 13', 'Columbia Hospital 2', 'Test University 16', 2018),
  createData('Sample 14', 'Columbia Hospital 3', 'Test University 17', 2019),
  createData('Sample 15', 'Columbia Hospital 4', 'Test University 18', 2020),

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


export default function DoctorQualification() {
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
          <TableCell>Qualification</TableCell>
          <TableCell align="right">Specialization</TableCell>
          <TableCell align="right">University</TableCell>
          <TableCell align="right">Achievement Year</TableCell>
          <TableCell align="right">Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.qualification}>
            <TableCell component="th" scope="row">
              {row.qualification}
            </TableCell>
            <TableCell align="right">{row.specialization}</TableCell>
            <TableCell align="right">{row.university}</TableCell>
            <TableCell align="right">{row.achievements}</TableCell>
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
                      <InputLabel htmlFor="qualification">
                        Qualification Name
                      </InputLabel>
                      <FormControl className={classes.formControl}>
                        <TextField
                          id="qualification"
                          name="qualification"
                          value={row.qualification}
                          fullWidth
                          autoComplete="oClinic"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <InputLabel htmlFor="specialization">
                        Specialization
                      </InputLabel>
                      <FormControl className={classes.formControl}>
                        <TextField
                          id="specialization"
                          name="specialization"
                          value={row.specialization}
                          fullWidth
                          autoComplete="oClinic"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <InputLabel htmlFor="university">
                        University
                      </InputLabel>
                      <FormControl className={classes.formControl}>
                        <TextField
                          id="university"
                          name="university"
                          value={row.university}
                          fullWidth
                          autoComplete="oClinic"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <InputLabel htmlFor="achievements">
                        Achievement Year
                      </InputLabel>
                      <FormControl className={classes.formControl}>
                        <TextField
                          id="achievements"
                          name="achievements"
                          value={row.achievements}
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
                    <Grid item xs={6} sm={3}>
                      <InputLabel htmlFor="qualification">
                        {row.qualification}
                      </InputLabel>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <InputLabel htmlFor="specialization">
                        {row.specialization}
                      </InputLabel>
                    </Grid>
                    <Grid item xs={6} sm={2}>
                      <InputLabel htmlFor="university">
                        {row.university}
                      </InputLabel>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <InputLabel htmlFor="achievements">
                        {row.achievements}
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