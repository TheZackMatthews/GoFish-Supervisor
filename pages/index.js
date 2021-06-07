import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Container,
  Grid,
  Card,
} from '@material-ui/core';
import Pie from '../components/charts/pie';
import Percentage from '../components/charts/percentage';
import Total from '../components/charts/total';
import { fetchAllSurveys } from '../redux/actions/reportActions';

const Index = () => {
  const dispatch = useDispatch();
  const reports = useSelector((state) => state.reports.allSurveys);
  const [fishCount, setFishCount] = useState(0);

  useEffect(() => {
    if (!reports || !reports.length) {
      dispatch(fetchAllSurveys());
    }
  }, []);

  useEffect(() => {
    if (reports && reports.length) {
      let sum = 0;
      reports.forEach((one) => {
        sum += one.fish_count;
      });
      setFishCount(sum);
    }
  }, [reports]);

  return (
    <Box sx={{ minHeight: '100%', width: '100%' }}>
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={12} sm={12} xl={12} xs={12}>
            <Card style={{ height: '100%', padding: 20 }}>Navbar</Card>
          </Grid>
          <Grid item xl={3} lg={3} sm={3} xs={6}>
            <Card style={{ height: '100%', padding: 20 }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  height: '100%',
                }}
              >
                <Percentage circleColor="#89CFF0" label="Users" count={14} total={200} />
              </div>
            </Card>
          </Grid>
          <Grid item xl={3} lg={3} sm={3} xs={6}>
            <Card style={{ height: '100%', padding: 20 }}>
              <Total label="Fish" count={fishCount} comment="Total specimen reported" />
            </Card>
          </Grid>
          <Grid item xl={3} lg={3} sm={3} xs={6}>
            <Card style={{ height: '100%', padding: 20 }}>
              Small box
            </Card>
          </Grid>
          <Grid item xl={3} lg={3} sm={3} xs={6}>
            <Card style={{ height: '100%', padding: 20 }}>
              Small box
            </Card>
          </Grid>
          <Grid item xl={6} lg={6} sm={12} xs={12}>
            <Card style={{ height: '100%', padding: 20 }}>
              Medium box
            </Card>
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <Pie data="fish_status" count="fish_count" />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <Pie data="fish_species" count="fish_count" />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <Pie data="fish_species" count="fish_count" />
          </Grid>
          <Grid item xl={6} lg={6} sm={12} xs={12}>
            <Card style={{ height: '100%', padding: 20 }}>Medium box</Card>
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <Pie data="fish_species" count="fish_count" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Index;
