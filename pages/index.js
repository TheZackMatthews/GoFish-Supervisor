import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pie from '../components/charts/pie';
import Percentage from '../components/charts/percentage';
import Total from '../components/charts/total';
import { fetchAllSurveys } from '../redux/actions/reportActions';

const Index = () => {
  const dispatch = useDispatch();
  const reports = useSelector((state) => state.reports.allSurveys);

  React.useEffect(() => {
    if (!reports || !reports.length) {
      dispatch(fetchAllSurveys());
    }
  }, []);

  console.log(reports);
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Dashboard</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Percentage label="Users" count={100} total={200} />
        <Total label="Total fish" />
      </div>
      <div style={{ display: 'flex' }}>
        <Pie data="fish_species" count="fish_count" />
        <Pie data="fish_status" count="fish_count" />
      </div>
    </div>
  );
};

export default Index;
