import React from 'react';
import Chart from 'react-google-charts';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllSurveys } from '../../redux/actions/reportActions';

const Pie = ({ data, count, label }) => {
  const reports = useSelector((state) => state.reports.allSurveys);
  const dispatch = useDispatch();
  const [dataMap, setDataMap] = React.useState([[data, 'Total']]);

  React.useEffect(() => {
    if (!reports || !reports.length) dispatch(fetchAllSurveys());
    setDataMap([[data, 'Total']]);
  }, []);

  React.useEffect(() => {
    if (reports && reports.length) {
      const dataObj = {};
      const tempMap = [[data, 'Total']];
      reports.forEach((each) => {
        if (dataObj[each[data]]) {
          dataObj[each[data]] += each[count];
        } else {
          dataObj[each[data]] = each[count];
        }
      });
      for (let i = 0; i < Object.keys(dataObj).length; i += 1) {
        tempMap.push([Object.keys(dataObj)[i], Object.values(dataObj)[i]]);
      }
      setDataMap(tempMap);
    }
  }, [reports]);

  return (
    <div>
      <Chart
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={dataMap}
        options={{
          title: label,
          slices: {
            0: { color: '#89CFF0' },
            1: { color: '#75E6DA' },
            2: { color: '#189AB4' },
            3: { color: '#05445E' },
            4: { color: '#21B6A8' },
            5: { color: '#116530' },
            6: { color: '#18A558' },
            7: { color: '#A3EBB1' },
          },
          legend: { position: 'bottom' },
        }}
        width="100%"
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  );
};

Pie.propTypes = {
  data: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Pie;
