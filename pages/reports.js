import dynamic from 'next/dynamic';
import { json2csv } from 'json-2-csv';
import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { fetchAllSurveys } from '../redux/actions/reportActions';
import TableFromJSON from '../components/reports/TableFromJSON';
import SimpleSelect from '../components/reports/SimpleSelect';

// map needs window object before nextjs compiles
const DataPointMap = dynamic(() => import('../components/maps/DataPointMap'), { ssr: false });
console.log(typeof DataPointMap);
const exportTable = (data, title) => {
  // handles all errors in the block
  json2csv(data, (err, csv) => {
    if (err) {
      alert('Problem exporting');
      console.log(err);
    } else {
      console.log(typeof csv);
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

const Reports = () => {
  const dispatch = useDispatch();
  const [reportType, setReportType] = useState('');
  const [reportData, setReportData] = useState([]);
  const [reportCSV, setReportCSV] = useState();
  const [showMap, setShowMap] = useState(false);
  const [mapButtonText, setMapButtonText] = useState('Show Map');
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

  const toggleMap = () => {
    setShowMap(!showMap);
    if (showMap) setMapButtonText('Show Map');
    else setMapButtonText('Hide Map');
  };
  console.log(mapButtonText);

  return (
    <>
      <div>
        <h1>Welcome to the Go Fish reports.</h1>
      </div>
      <div className="top">
        <SimpleSelect handleChange={handleDropdownChange} itemValue={reportType} />
        <form>
          <input id="name" type="text" autoComplete="name" />
          <button type="submit">Search</button>
        </form>
      </div>
      <div>
        <Button
          variant="contained"
          // color= "var(--dark)"
          id="exportTable"
          onClick={() => {
            exportTable(reportData, reportType);
          }}
        >
          Export Table
        </Button>
        {'  '}
        <Button
          variant="contained"
          // color= "var(--dark)"
          id="mapData"
          onClick={() => toggleMap()}
        >
          {mapButtonText}
        </Button>
        <div
          style={{
            position: 'absolute',
            width: '70%',
            height: '600px',
          }}
        >
          <DataPointMap data={reportData} show={showMap} />
          <TableFromJSON data={reportData} title={reportType} show={showMap} />
        </div>
      </div>
    </>
  );
};

export default Reports;
