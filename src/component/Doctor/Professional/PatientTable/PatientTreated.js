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
import './PatientTreated.css';


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

export default function PatientTreated() {
  
    const [state, setState] = React.useState({
      columns: [
        { title: 'Disease', field: 'disease' },
        { title: 'Treated by referral', field: 'Patientstreated' },
        { title: 'Success rate', field: 'Successrate' },
        { title: 'Year', field: 'Year' },
      ],
      data: [
        { disease: 'Sample 16', Patientstreated: 'Apollo', Successrate: '50%', Year: 2001 },
        { disease: 'Sample 17', Patientstreated: 'Apollo 1', Successrate: '65%', Year: 2002 },
        { disease: 'Sample 18', Patientstreated: 'Apollo 2', Successrate: '75%', Year: 2003 },
        { disease: 'Sample 19', Patientstreated: 'Apollo 3', Successrate: '85%', Year: 2004 },
        { disease: 'Sample 20', Patientstreated: 'Apollo 4', Successrate: '95%', Year: 2005 },
        { disease: 'Sample 1', Patientstreated: 'Apollo 5', Successrate: '60%', Year: 2006 },
        { disease: 'Sample 2', Patientstreated: 'Manipal Hospital 1', Successrate: '33%', Year: 2007 },
        { disease: 'Sample 3', Patientstreated: 'Manipal Hospital 2', Successrate: '80%', Year: 2008 },
        { disease: 'Sample 4', Patientstreated: 'Manipal Hospital 3', Successrate: '90%', Year: 2009 },
        { disease: 'Sample 5', Patientstreated: 'Manipal Hospital 4', Successrate: '75%', Year: 2010 },
        { disease: 'Sample 6', Patientstreated: 'Manipal Hospital 5', Successrate: '90%', Year: 2011 },
        { disease: 'Sample 7', Patientstreated: 'Fortis Hospital 1', Successrate: '95%', Year: 2012 },
        { disease: 'Sample 8', Patientstreated: 'Fortis Hospital 2', Successrate: '96%', Year: 2013 },
        { disease: 'Sample 9', Patientstreated: 'Fortis Hospital 3', Successrate: '95%', Year: 2014 },
        { disease: 'Sample 10', Patientstreated: 'Fortis Hospital 4', Successrate: '98%', Year: 2015 },
        { disease: 'Sample 11', Patientstreated: 'Fortis Hospital 5', Successrate: '93%', Year: 2016 },
        { disease: 'Sample 12', Patientstreated: 'Columbia Hospital 1', Successrate: '88%', Year: 2017 },
        { disease: 'Sample 13', Patientstreated: 'Columbia Hospital 2', Successrate: '85%', Year: 2018 },
        { disease: 'Sample 14', Patientstreated: 'Columbia Hospital 3', Successrate: '44%', Year: 2019 },
        { disease: 'Sample 15', Patientstreated: 'Columbia Hospital 4', Successrate: '45%', Year: 2020 },
      ],
    });
  
    return (
      <MaterialTable
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