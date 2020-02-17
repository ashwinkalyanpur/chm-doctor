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
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import './DoctorExperience.css';


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

export default function DoctorExperience() {
    const [state, setState] = React.useState({
      columns: [
        { title: 'Hospital', field: 'hospital' },
        { title: 'Designation', field: 'Designation' },
        { title: 'Joined Date', field: 'joinedDate' },
        { title: 'Relived Date', field: 'relivedDate' },
        { title: 'Location', field: 'location' },
      ],
      data: [
        { Designation: 'Sample 16', hospital: 'Apollo', joinedDate: 1995, relivedDate: 2001, location: 'Malleshwaram' },
        { Designation: 'Sample 17', hospital: 'Apollo 1', joinedDate: 1999, relivedDate: 2002, location: 'MG Road' },
        { Designation: 'Sample 18', hospital: 'Apollo 2', joinedDate: 1996, relivedDate: 2003, location: 'Gandhi bazaar' },
        { Designation: 'Sample 19', hospital: 'Apollo 3', joinedDate: 1984, relivedDate: 2004, location: 'BTM Layout' },
        { Designation: 'Sample 20', hospital: 'Apollo 4', joinedDate: 2001, relivedDate: 2005, location: 'HSR Layout' },
        { Designation: 'Sample 1', hospital: 'Apollo 5', joinedDate: 2000, relivedDate: 2006, location: 'JP Nagar' },
        { Designation: 'Sample 2', hospital: 'Manipal Hospital 1', joinedDate: 2003, relivedDate: 2007, location: 'Rajajinagar' },
        { Designation: 'Sample 3', hospital: 'Manipal Hospital 2', joinedDate: 2001, relivedDate: 2008, location: 'RV Road' },
        { Designation: 'Sample 4', hospital: 'Manipal Hospital 3', joinedDate: 1993, relivedDate: 2009, location: 'Malleshwaram' },
        { Designation: 'Sample 5', hospital: 'Manipal Hospital 4', joinedDate: 1996, relivedDate: 2010, location: 'MG Road' },
        { Designation: 'Sample 6', hospital: 'Manipal Hospital 5', joinedDate: 1995, relivedDate: 2011, location: 'Gandhi bazaar' },
        { Designation: 'Sample 7', hospital: 'Fortis Hospital 1', joinedDate: 1996, relivedDate: 2012, location: 'BTM Layout' },
        { Designation: 'Sample 8', hospital: 'Fortis Hospital 2', joinedDate: 2003, relivedDate: 2013, location: 'HSR Layout' },
        { Designation: 'Sample 9', hospital: 'Fortis Hospital 3', joinedDate: 2008, relivedDate: 2014, location: 'JP Nagar' },
        { Designation: 'Sample 10', hospital: 'Fortis Hospital 4', joinedDate: 2006, relivedDate: 2015, location: 'Rajajinagar' },
        { Designation: 'Sample 11', hospital: 'Fortis Hospital 5', joinedDate: 2001, relivedDate: 2016, location: 'RV Road' },
        { Designation: 'Sample 12', hospital: 'Columbia Hospital 1', joinedDate: 2005, relivedDate: 2017, location: 'Malleshwaram' },
        { Designation: 'Sample 13', hospital: 'Columbia Hospital 2', joinedDate: 1996, relivedDate: 2018, location: 'MG Road' },
        { Designation: 'Sample 14', hospital: 'Columbia Hospital 3', joinedDate: 2003, relivedDate: 2019, location: 'JP Nagar' },
        { Designation: 'Sample 15', hospital: 'Columbia Hospital 4', joinedDate: 1984, relivedDate: 2020, location: 'Rajajinagar' },
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