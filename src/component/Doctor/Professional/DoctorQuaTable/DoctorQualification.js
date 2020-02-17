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
import './DoctorQualification.css';


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

export default function DoctorQualification() {
    const [state, setState] = React.useState({
      columns: [
        { title: 'Qualification', field: 'qualification' },
        { title: 'Specialization', field: 'specialization' },
        { title: 'University', field: 'university' },
        { title: 'Achievements', field: 'achievements' },
      ],
      data: [
        { qualification: 'Sample 16', specialization: 'Apollo', university: '50%', achievements: 2001 },
        { qualification: 'Sample 17', specialization: 'Apollo 1', university: '65%', achievements: 2002 },
        { qualification: 'Sample 18', specialization: 'Apollo 2', university: '75%', achievements: 2003 },
        { qualification: 'Sample 19', specialization: 'Apollo 3', university: '85%', achievements: 2004 },
        { qualification: 'Sample 20', specialization: 'Apollo 4', university: '95%', achievements: 2005 },
        { qualification: 'Sample 1', specialization: 'Apollo 5', university: '60%', achievements: 2006 },
        { qualification: 'Sample 2', specialization: 'Manipal Hospital 1', university: '33%', achievements: 2007 },
        { qualification: 'Sample 3', specialization: 'Manipal Hospital 2', university: '80%', achievements: 2008 },
        { qualification: 'Sample 4', specialization: 'Manipal Hospital 3', university: '90%', achievements: 2009 },
        { qualification: 'Sample 5', specialization: 'Manipal Hospital 4', university: '75%', achievements: 2010 },
        { qualification: 'Sample 6', specialization: 'Manipal Hospital 5', university: '90%', achievements: 2011 },
        { qualification: 'Sample 7', specialization: 'Fortis Hospital 1', university: '95%', achievements: 2012 },
        { qualification: 'Sample 8', specialization: 'Fortis Hospital 2', university: '96%', achievements: 2013 },
        { qualification: 'Sample 9', specialization: 'Fortis Hospital 3', university: '95%', achievements: 2014 },
        { qualification: 'Sample 10', specialization: 'Fortis Hospital 4', university: '98%', achievements: 2015 },
        { qualification: 'Sample 11', specialization: 'Fortis Hospital 5', university: '93%', achievements: 2016 },
        { qualification: 'Sample 12', specialization: 'Columbia Hospital 1', university: '88%', achievements: 2017 },
        { qualification: 'Sample 13', specialization: 'Columbia Hospital 2', university: '85%', achievements: 2018 },
        { qualification: 'Sample 14', specialization: 'Columbia Hospital 3', university: '44%', achievements: 2019 },
        { qualification: 'Sample 15', specialization: 'Columbia Hospital 4', university: '45%', achievements: 2020 },
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