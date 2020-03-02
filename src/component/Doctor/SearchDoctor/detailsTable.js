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



import './SearchDoctor.css';




function createData(hname, dname, ftime, ttime, did, spcial) {
  return { hname, dname, ftime, ttime, did, spcial };
}

const rows = [
  createData('Manipal Hospital, M.G.Road', 'Dr Srinivas', "14:00", "15:00", 1200, "OPD"),
  createData('Manipal Hospital, R.V.Road', 'Dr Raghavendra', "10:00", "12:00", 1202, "IPD"),
  createData('Apollo  Hospital, M.G.Road', 'Dr Ramakrishna', "19:00", "2200", 1305, "IPD"),
  createData('Apollo Hospital, Jayanagar', 'Dr Manjunath', "11:00", "13:30", 1505, "IPD"),
  createData('Manipal Hospital, J.P.Nagar', 'Dr Devi Shetty', "10:00", "14:00", 1665, "OPD"),
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
}));


export default function DetailsTable() {
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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseModel = () => {
    setOpen(false);
  }
  return (
    <Table className={classes.table} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell>Hospital/Clinic Name</TableCell>
          <TableCell align="right">Doctor Name</TableCell>
          <TableCell align="right">Time From</TableCell>
          <TableCell align="right">Time Till</TableCell>
          <TableCell align="right">Doctor ID</TableCell>
          <TableCell align="right">Specialized In</TableCell>
          <TableCell align="right">Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.hname}>
            <TableCell component="th" scope="row">
              {row.hname}
            </TableCell>
            <TableCell align="right">{row.dname}</TableCell>
            <TableCell align="right">{row.ftime}</TableCell>
            <TableCell align="right">{row.ttime}</TableCell>
            <TableCell align="right">{row.did}</TableCell>
            <TableCell align="right">{row.spcial}</TableCell>
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
                      <InputLabel htmlFor="hname">
                        Hospital Name
                      </InputLabel>
                      <FormControl className={classes.formControl}>
                        <TextField
                          id="hname"
                          name="hname"
                          value={row.hname}
                          fullWidth
                          autoComplete="oClinic"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                    <InputLabel htmlFor="dname">
                        Doctor Name
                      </InputLabel>
                      <FormControl className={classes.formControl}>
                        <TextField
                          id="dname"
                          name="dname"
                          value={row.dname}
                          fullWidth
                          autoComplete="oClinic"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                    <InputLabel htmlFor="ftime">
                        Time From
                      </InputLabel>
                      <FormControl className={classes.formControl}>
                        <TextField
                          id="ftime"
                          name="ftime"
                          value={row.ftime}
                          fullWidth
                          autoComplete="oClinic"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                    <InputLabel htmlFor="ttime">
                        Time To
                      </InputLabel>
                      <FormControl className={classes.formControl}>
                        <TextField
                          id="ttime"
                          name="ttime"
                          value={row.ttime}
                          fullWidth
                          autoComplete="oClinic"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                    <InputLabel htmlFor="did">
                        Doctor ID
                      </InputLabel>
                      <FormControl className={classes.formControl}>
                        <TextField
                          id="did"
                          name="did"
                          value={row.did}
                          fullWidth
                          autoComplete="oClinic"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                    <InputLabel htmlFor="spcial">
                       Specialized In
                      </InputLabel>
                      <FormControl className={classes.formControl}>
                        <TextField
                          id="spcial"
                          name="spcial"
                          value={row.spcial}
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
                      <InputLabel htmlFor="hname">
                      {row.hname}
                      </InputLabel>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                    <InputLabel htmlFor="dname">
                      {row.dname}
                      </InputLabel>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                    <InputLabel htmlFor="ftime">
                      {row.ftime}
                      </InputLabel>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                    <InputLabel htmlFor="ttime">
                      {row.ttime}
                      </InputLabel>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                    <InputLabel htmlFor="did">
                        {row.did}
                      </InputLabel>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                    <InputLabel htmlFor="spcial">
                        {row.spcial}
                      </InputLabel>
                    </Grid>
                    <Grid className="top-spacing" item xs={12} sm={12}>
                      <Button variant="contained" onClick={handleCloseDeleteTable}>
                        Cancel
                        </Button>
                      <Button variant="contained" color="primary" onClick={handleCloseDeleteTable}>
                        Delete
                        </Button>
                    </Grid>
                  </Grid>
                </Modal.Body>
              </Modal>
              {/* End Delete Doctor Popup */}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>

  );
}