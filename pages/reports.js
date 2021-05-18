import axios from 'axios';
import { json2csv } from 'json-2-csv';
import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { fetchAllSurveys } from '../redux/actions/reportActions';
import TableFromJSON from '../components/reports/TableFromJSON';
import SimpleSelect from '../components/reports/SimpleSelect';

const exportTable = (data) => {
  json2csv(data, (err, csv) => {
    if (err) alert('Problem exporting', err);
    else return csv;
  });
};

const Reports = () => {
  const dispatch = useDispatch();
  const [reportType, setReportType] = useState('');
  const [reportData, setReportData] = useState([]);
  const [reportCSV, setReportCSV] = useState();
  /* eslint-disable no-unused-expressions */

  useEffect(() => {
    switch (reportType) {
      case 'All Surveys':
        fetchAll();
        break;
      case 'Fish Summary':
        fetchAll();
        break;
      case 'Volunteer Summary':
        setReportData([]);
        break;
      default:
    }
  }, [reportType]);
  /* eslint-enable no-unused-expressions */

  const fetchAll = async () => {
    const result = await dispatch(fetchAllSurveys());
    if (result && result.payload) {
      setReportData(result.payload.data);
    }
  };

  const handleDropdownChange = (event) => {
    console.log(event.target.value);
    setReportType(event.target.value);
  };

  console.log('reportdata', reportData);

  return (
    <>
      <div>
        <h1>Welcome to the Go Fish reports.</h1>
      </div>
      <SimpleSelect handleChange={handleDropdownChange} itemValue={reportType} />
      <div>
        <TableFromJSON data={reportData} title={reportType} />
        <Button
          variant="contained"
          color="default"
          id="exportTable"
          onClick={() => {
            exportTable(reportData);
          }}
        >
          Export Table
        </Button>
      </div>
    </>
  );
};

export default Reports;
