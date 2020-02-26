import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles({
 
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('ECG', 1500, 1400, 1000, "OPD"),
  createData('Sample', 2300, 2100, 1800, "IPD"),
  createData('Sample 1', 2600, 2300, 1200, "IPD"),
  createData('Sample 2', 3000, 2800, 1400, "IPD"),
  createData('Sample 3', 3500, 3100, 2900, "OPD"),
];

export default function Medical() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedB: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Procedure name</TableCell>
            <TableCell align="right">MRP</TableCell>
            <TableCell align="right">Agreed prize</TableCell>
            <TableCell align="right">Deal prize</TableCell>
            <TableCell align="right">OPD / IPD</TableCell>
            <TableCell align="right">Enable / disable</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right"> 
              <Switch
                    checked={state.checkedB}
                    onChange={handleChange('checkedB')}
                    value="checkedB"
                    color="primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  );
}