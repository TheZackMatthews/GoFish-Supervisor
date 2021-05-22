/* eslint-disable no-use-before-define */
import dynamic from 'next/dynamic';
import { json2csv } from 'json-2-csv';
import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { fetchAllSurveys } from '../redux/actions/reportActions';
import TableFromJSON from '../components/reports/TableFromJSON';
import SimpleSelect from '../components/reports/SimpleSelect';

const DataPointMap = dynamic(() => import('../components/maps/DataPointMap'), { ssr: false });
const exportTable = (data, title) => {
  json2csv(data, (err, csv) => {
    if (err) {
      // eslint-disable-next-line no-alert
      alert('Problem exporting');
      // eslint-disable-next-line no-console
      console.error(err);
    } else {
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
  const [showMap, setShowMap] = useState(false);
  const [mapButtonText, setMapButtonText] = useState('Show Map');

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
    setReportType(event.target.value);
  };

  const toggleMap = () => {
    setShowMap(!showMap);
    if (showMap) setMapButtonText('Show Map');
    else setMapButtonText('Hide Map');
  };

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
          id="exportTable"
          onClick={() => {
            exportTable(reportData, reportType);
          }}
        >
          Export Table
        </Button>
{' '}
        <Button
          variant="contained"
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
