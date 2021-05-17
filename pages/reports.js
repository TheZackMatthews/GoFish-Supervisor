import axios from 'axios';
import { json2csv } from 'json-2-csv';
import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { fetchAllSurveys } from '../redux/actions/reportActions';
import TableFromJSON from '../components/TableFromJSON';

const exportTable = (data) => {
  const out = json2csv(data, (err, csv) => {
    if (err) alert('Problem exporting', err);
    else return console.log(csv);
  });
};

const Reports = () => {
  const dispatch = useDispatch();
  const [reportData, setReportData] = useState({ allSurveys: [] });
  /* eslint-disable no-unused-expressions */
  useEffect(() => {
    if (!reportData.allSurveys.length) fetchAll();
  }),
  [reportData];
  /* eslint-enable no-unused-expressions */

  const fetchAll = async () => {
    const result = await dispatch(fetchAllSurveys());
    if (result && result.payload) {
      setReportData({ allSurveys: result.payload.data.data });
    }
  };

  console.log('reportdata', reportData);

  return reportData.allSurveys.length ? (
    <>
      <div>
        <h1>Welcome to the Go Fish reports.</h1>
      </div>
      <TableFromJSON data={reportData.allSurveys} />
      <Button
        variant="contained"
        color="default"
        id="exportTable"
        onClick={() => {
          exportTable(reportData.allSurveys);
        }}
      >
        Export Table
      </Button>
    </>
  ) : (
    <div>Loading...</div>
  );
};

export default Reports;
