import React, { forwardRef } from 'react';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import Search from '@material-ui/icons/Search';
import './addressInfo.css';


const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  };

export default function DetailsTable() {
  
    const [state, setState] = React.useState({
      columns: [
        { title: 'Name', field: 'name' },
        { title: 'Day', field: 'day' },
        { title: 'Start', field: 'start' },
        { title: 'End', field: 'end' },
        { title: 'Fee', field: 'fee' },
        { title: 'MRP', field: 'MRP' },
        { title: 'Type', field: 'type' },
        { title: 'COD Deal Price', field: 'CDPrice' },
        { title: 'Customer Deal Price', field: 'CusDealPri' },
        { title: 'Deal Price', field: 'dealPri' },

      ],
      data: [
        { name: 'Sample 16', day: 'Apollo', start: '50%', end: 2001, fee: 550, MRP: 750, type: 'Fixed', CDPrice: 300, CusDealPri: 400, dealPri: 200 },
        { name: 'Sample 17', day: 'Apollo 1', start: '65%', end: 2002, fee: 550, MRP: 750, type: 'Fixed', CDPrice: 300, CusDealPri: 400, dealPri: 200 },
        { name: 'Sample 18', day: 'Apollo 2', start: '75%', end: 2003, fee: 550, MRP: 750, type: 'Fixed', CDPrice: 300, CusDealPri: 400, dealPri: 200 },
        { name: 'Sample 19', day: 'Apollo 3', start: '85%', end: 2004, fee: 550, MRP: 750, type: 'Fixed', CDPrice: 300, CusDealPri: 400, dealPri: 200 },
        { name: 'Sample 20', day: 'Apollo 4', start: '95%', end: 2005, fee: 550, MRP: 750, type: 'Fixed', CDPrice: 300, CusDealPri: 400, dealPri: 200 },
        { name: 'Sample 1', day: 'Apollo 5', start: '60%', end: 2006, fee: 550, MRP: 750, type: 'Fixed', CDPrice: 300, CusDealPri: 400, dealPri: 200 },
      ],
    });
  
    return (
      <MaterialTable
      title="Editable Example"
        icons={tableIcons}
        columns={state.columns}
        data={state.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState(prevState => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
      />
    );
  }