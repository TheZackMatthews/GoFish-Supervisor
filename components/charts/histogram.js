import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllSurveys, getAllDaily } from '../../redux/actions/reportActions';

const Histogram = ({ data, label, colorArray }) => {
  const reports = useSelector((state) => state.reports.allSurveys);
  const daily = useSelector((state) => state.reports.dailyReports);
  const dispatch = useDispatch();
  const [dataMap, setDataMap] = useState([]);

  useEffect(() => {
    if (!reports) dispatch(fetchAllSurveys());
    if (!daily) dispatch(getAllDaily());
    setDataMap([[label, 'Total']]);
  }, []);

  useEffect(() => {
    if (daily && daily.length) {
      const dataObj = {};
      const tempMap = [[label, 'Total']];
      daily.forEach((each) => {
        if (dataObj[each[data]]) dataObj[each[data]] += 1;
        else dataObj[each[data]] = 1;
      });
      for (let i = 0; i < Object.keys(dataObj).length; i += 1) {
        tempMap.push([Object.keys(dataObj)[i], Object.values(dataObj)[i]]);
      }

      tempMap.sort((a, b) => a[1] - b[1]);
      setDataMap(tempMap);
    }
  }, [reports]);

  return (
    <div>
      {dataMap && (
      <Chart
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={dataMap}
        options={{
          title: label,
          hAxis: {
            title: 'Times visited',
          },
          colors: colorArray,
          legend: { position: 'none' },
        }}
        width="100%"
        rootProps={{ 'data-testid': '1' }}
      />
      )}
    </div>
  );
};

Histogram.propTypes = {
  data: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  colorArray: PropTypes.arrayOf(PropTypes.string),
};

Histogram.defaultProps = {
  colorArray: ['#000000'],
};

export default Histogram;
