import axios from 'axios';
import { json2csv } from 'json-2-csv';
import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { fetchAllSurveys } from '../redux/actions/reportActions';
import TableFromJSON from '../components/reports/TableFromJSON';
import SimpleSelect from '../components/reports/SimpleSelect';

const exportTable = (data, title) => {
  // handles all errors in the block
  json2csv(data, (err, csv) => {
    if (err) {
      alert('Problem exporting');
      console.log(err);
    } else {
      console.log(csv);
      const csvBlob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const objectURL = URL.createObjectURL(csvBlob);
      const anchor = document.createElement('a');
      anchor.href = objectURL;
      anchor.target = '_blank';
      anchor.download = `${title}.csv`;
      anchor.click();
      URL.revokeObjectURL(objectURL);
    }
  });
};

const FieldWorkers = () => {
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
      setReportData(result.payload.data.map((elem) => {
        const createDate = new Intl.DateTimeFormat('en-US').format(new Date(elem.created_at));
        const updateDate = new Intl.DateTimeFormat('en-US').format(new Date(elem.updated_at));
        return { ...elem, created_at: createDate, updated_at: updateDate };
      }));
    }
  };

  const handleDropdownChange = (event) => {
    console.log(event.target.value);
    setReportType(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };

  console.log('reportdata', reportData);

  return (
    <>
      <div>
        <h1>Welcome to the Go Fish reports.</h1>
      </div>
      <SimpleSelect handleChange={handleDropdownChange} itemValue={reportType} />
      <form>
        <input id="name" type="text" autoComplete="name" handleChange={handleSearch} />
        <button type="submit">Search</button>
      </form>
      <div>
        <TableFromJSON data={reportData} title={reportType} />
        <Button
          variant="contained"
          color="default"
          id="exportTable"
          onClick={() => {
            const reportTitle = JSON.stringify(reportType);
            exportTable(reportData, reportType);
          }}
        >
          Export Table
        </Button>
      </div>
    </>
  );
};

export default FieldWorkers;
