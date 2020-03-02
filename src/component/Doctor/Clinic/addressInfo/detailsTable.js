// import React, { forwardRef } from 'react';
// import MaterialTable from 'material-table';
// import AddBox from '@material-ui/icons/AddBox';
// import ArrowDownward from '@material-ui/icons/ArrowDownward';
// import Check from '@material-ui/icons/Check';
// import ChevronLeft from '@material-ui/icons/ChevronLeft';
// import ChevronRight from '@material-ui/icons/ChevronRight';
// import Clear from '@material-ui/icons/Clear';
// import DeleteOutline from '@material-ui/icons/DeleteOutline';
// import Edit from '@material-ui/icons/Edit';
// import FirstPage from '@material-ui/icons/FirstPage';
// import LastPage from '@material-ui/icons/LastPage';
// import Remove from '@material-ui/icons/Remove';
// import Search from '@material-ui/icons/Search';
// import './addressInfo.css';


// const tableIcons = {
//     Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
//     Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
//     Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//     Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
//     Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
//     FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
//     LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
//     NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//     PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
//     ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//     Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
//     SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
//     ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
//   };

// export default function DetailsTable() {

//     const [state, setState] = React.useState({
//       columns: [
//         { title: 'Name', field: 'name' },
//         { title: 'Day', field: 'day' },
//         { title: 'Start', field: 'start' },
//         { title: 'End', field: 'end' },
//         { title: 'Fee', field: 'fee' },
//         { title: 'MRP', field: 'MRP' },
//         { title: 'Type', field: 'type' },
//         { title: 'COD Deal Price', field: 'CDPrice' },
//         { title: 'Customer Deal Price', field: 'CusDealPri' },
//         { title: 'Deal Price', field: 'dealPri' },

//       ],
//       data: [
//         { name: 'Sample 16', day: 'Apollo', start: '50%', end: 2001, fee: 550, MRP: 750, type: 'Fixed', CDPrice: 300, CusDealPri: 400, dealPri: 200 },
//         { name: 'Sample 17', day: 'Apollo 1', start: '65%', end: 2002, fee: 550, MRP: 750, type: 'Fixed', CDPrice: 300, CusDealPri: 400, dealPri: 200 },
//         { name: 'Sample 18', day: 'Apollo 2', start: '75%', end: 2003, fee: 550, MRP: 750, type: 'Fixed', CDPrice: 300, CusDealPri: 400, dealPri: 200 },
//         { name: 'Sample 19', day: 'Apollo 3', start: '85%', end: 2004, fee: 550, MRP: 750, type: 'Fixed', CDPrice: 300, CusDealPri: 400, dealPri: 200 },
//         { name: 'Sample 20', day: 'Apollo 4', start: '95%', end: 2005, fee: 550, MRP: 750, type: 'Fixed', CDPrice: 300, CusDealPri: 400, dealPri: 200 },
//         { name: 'Sample 1', day: 'Apollo 5', start: '60%', end: 2006, fee: 550, MRP: 750, type: 'Fixed', CDPrice: 300, CusDealPri: 400, dealPri: 200 },
//       ],
//     });

//     return (
//       <MaterialTable
//       title="Editable Example"
//         icons={tableIcons}
//         columns={state.columns}
//         data={state.data}
//         editable={{
//           onRowAdd: newData =>
//             new Promise(resolve => {
//               setTimeout(() => {
//                 resolve();
//                 setState(prevState => {
//                   const data = [...prevState.data];
//                   data.push(newData);
//                   return { ...prevState, data };
//                 });
//               }, 600);
//             }),
//           onRowUpdate: (newData, oldData) =>
//             new Promise(resolve => {
//               setTimeout(() => {
//                 resolve();
//                 if (oldData) {
//                   setState(prevState => {
//                     const data = [...prevState.data];
//                     data[data.indexOf(oldData)] = newData;
//                     return { ...prevState, data };
//                   });
//                 }
//               }, 600);
//             }),
//           onRowDelete: oldData =>
//             new Promise(resolve => {
//               setTimeout(() => {
//                 resolve();
//                 setState(prevState => {
//                   const data = [...prevState.data];
//                   data.splice(data.indexOf(oldData), 1);
//                   return { ...prevState, data };
//                 });
//               }, 600);
//             }),
//         }}
//       />
//     );
//   }

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



import './addressInfo.css';




function createData(name, day, start, end, fee, MRP, type, CDPrice, CusDealPri, dealPri) {
  return { name, day, start, end, fee, MRP, type, CDPrice, CusDealPri, dealPri };
}

const rows = [
  { name: 'Sample 16', day: 'Apollo', start: '10:30', end: '12:30', fee: 550, MRP: 750, type: 'Fixed', CDPrice: 300, CusDealPri: 400, dealPri: 200 },
  { name: 'Sample 17', day: 'Apollo 1', start: '13:30', end: '16:30', fee: 550, MRP: 750, type: 'Fixed', CDPrice: 300, CusDealPri: 400, dealPri: 200 },
  { name: 'Sample 18', day: 'Apollo 2', start: '18:00', end: '22:00', fee: 550, MRP: 750, type: 'Fixed', CDPrice: 300, CusDealPri: 400, dealPri: 200 },
  { name: 'Sample 19', day: 'Apollo 3', start: '11:00', end: "13:00", fee: 550, MRP: 750, type: 'Fixed', CDPrice: 300, CusDealPri: 400, dealPri: 200 },
  { name: 'Sample 20', day: 'Apollo 4', start: '16:00', end: '22:00', fee: 550, MRP: 750, type: 'Fixed', CDPrice: 300, CusDealPri: 400, dealPri: 200 },
  { name: 'Sample 1', day: 'Apollo 5', start: '14:00', end: '17:30', fee: 550, MRP: 750, type: 'Fixed', CDPrice: 300, CusDealPri: 400, dealPri: 200 },

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
          <TableCell>Name</TableCell>
          <TableCell align="right">Day</TableCell>
          <TableCell align="right">Start Time</TableCell>
          <TableCell align="right">End Time</TableCell>
          <TableCell align="right">Fee</TableCell>
          <TableCell align="right">MRP</TableCell>
          <TableCell align="right">Type</TableCell>
          <TableCell align="right">CD Price</TableCell>
          <TableCell align="right">Customer Deal Price</TableCell>
          <TableCell align="right">Deal Price</TableCell>
          <TableCell align="right">Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.day}</TableCell>
            <TableCell align="right">{row.start}</TableCell>
            <TableCell align="right">{row.end}</TableCell>
            <TableCell align="right">{row.fee}</TableCell>
            <TableCell align="right">{row.MRP}</TableCell>
            <TableCell align="right">{row.type}</TableCell>
            <TableCell align="right">{row.CDPrice}</TableCell>
            <TableCell align="right">{row.CusDealPri}</TableCell>
            <TableCell align="right">{row.dealPri}</TableCell>
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
                      <InputLabel htmlFor="name">
                        Name
                      </InputLabel>
                      <FormControl className={classes.formControl}>
                        <TextField
                          id="name"
                          name="name"
                          value={row.name}
                          fullWidth
                          autoComplete="oClinic"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <InputLabel htmlFor="day">
                        Day
                      </InputLabel>
                      <FormControl className={classes.formControl}>
                        <TextField
                          id="day"
                          name="day"
                          value={row.day}
                          fullWidth
                          autoComplete="oClinic"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <InputLabel htmlFor="start">
                        Start Time
                      </InputLabel>
                      <FormControl className={classes.formControl}>
                        <TextField
                          id="start"
                          name="start"
                          value={row.start}
                          fullWidth
                          autoComplete="oClinic"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <InputLabel htmlFor="end">
                        End Time
                      </InputLabel>
                      <FormControl className={classes.formControl}>
                        <TextField
                          id="end"
                          name="end"
                          value={row.end}
                          fullWidth
                          autoComplete="oClinic"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <InputLabel htmlFor="fee">
                        Fee
                      </InputLabel>
                      <FormControl className={classes.formControl}>
                        <TextField
                          id="fee"
                          name="fee"
                          value={row.fee}
                          fullWidth
                          autoComplete="oClinic"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <InputLabel htmlFor="MRP">
                        MRP
                      </InputLabel>
                      <FormControl className={classes.formControl}>
                        <TextField
                          id="MRP"
                          name="MRP"
                          value={row.MRP}
                          fullWidth
                          autoComplete="oClinic"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <InputLabel htmlFor="type">
                        Type
                      </InputLabel>
                      <FormControl className={classes.formControl}>
                        <TextField
                          id="type"
                          name="type"
                          value={row.type}
                          fullWidth
                          autoComplete="oClinic"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <InputLabel htmlFor="CDPrice">
                        CD Price
                      </InputLabel>
                      <FormControl className={classes.formControl}>
                        <TextField
                          id="CDPrice"
                          name="CDPrice"
                          value={row.CDPrice}
                          fullWidth
                          autoComplete="oClinic"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <InputLabel htmlFor="CusDealPri">
                        Customer Deal Price
                      </InputLabel>
                      <FormControl className={classes.formControl}>
                        <TextField
                          id="CusDealPri"
                          name="CusDealPri"
                          value={row.CusDealPri}
                          fullWidth
                          autoComplete="oClinic"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <InputLabel htmlFor="dealPri">
                        Deal Price
                      </InputLabel>
                      <FormControl className={classes.formControl}>
                        <TextField
                          id="dealPri"
                          name="dealPri"
                          value={row.dealPri}
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
                  <Button variant="contained" onClick={handleCloseDetailsTable}>
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
                      <InputLabel color="inherit">
                        Name
                      </InputLabel>
                      <InputLabel disabled color="textPrimary" htmlFor="name">
                        {row.name}
                      </InputLabel>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <InputLabel color="inherit">
                        Day
                    </InputLabel>
                      <InputLabel disabled htmlFor="day">
                        {row.day}
                      </InputLabel>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <InputLabel color="inherit">
                        Start Time
                      </InputLabel>
                      <InputLabel disabled htmlFor="start">
                        {row.start}
                      </InputLabel>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <InputLabel color="inherit">
                        End Time
                      </InputLabel>
                      <InputLabel disabled htmlFor="end">
                        {row.end}
                      </InputLabel>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <InputLabel color="inherit">
                        Fee
                      </InputLabel>
                      <InputLabel disabled htmlFor="fee">
                        {row.fee}
                      </InputLabel>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <InputLabel color="inherit">
                        MRP
                      </InputLabel>
                      <InputLabel disabled htmlFor="MRP">
                        {row.MRP}
                      </InputLabel>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <InputLabel color="inherit">
                        Type
                      </InputLabel>
                      <InputLabel disabled htmlFor="type">
                        {row.type}
                      </InputLabel>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <InputLabel color="inherit">
                        CDPrice
                      </InputLabel>
                      <InputLabel disabled htmlFor="CDPrice">
                        {row.CDPrice}
                      </InputLabel>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <InputLabel color="inherit">
                        CUstomer Deal Price
                      </InputLabel>
                      <InputLabel disabled htmlFor="CusDealPri">
                        {row.CusDealPri}
                      </InputLabel>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <InputLabel color="inherit">
                        Deal Price
                      </InputLabel>
                      <InputLabel disabled htmlFor="dealPri">
                        {row.dealPri}
                      </InputLabel>
                    </Grid>
                  </Grid>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="contained" onClick={handleCloseDeleteTable}>
                    Cancel
                  </Button>
                  <Button variant="contained" onClick={handleCloseDeleteTable}>
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
          <TableCell colSpan="11">
            <Grid className="top-spacing" item xs={12} sm={12}>
              <Pagination count={10} color="primary" />
            </Grid>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>

  );
}