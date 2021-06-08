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
import Histogram from '../components/charts/histogram';
import { fetchAllSurveys, getAllDaily } from '../redux/actions/reportActions';
import { getPhotos } from '../redux/actions/photoActions';

const Index = () => {
  const dispatch = useDispatch();
  const reports = useSelector((state) => state.reports.allSurveys);
  const photos = useSelector((state) => state.photos);
  const [fishCount, setFishCount] = useState(0);
  const [picCount, setPicCount] = useState(0);

  useEffect(() => {
    if (!reports || !reports.length) {
      dispatch(fetchAllSurveys());
    }
    dispatch(getPhotos());
    dispatch(getAllDaily());
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

  useEffect(() => {
    if (photos && photos.length) {
      setPicCount(photos.length);
    }
  }, [photos]);

  return (
    <Box sx={{ minHeight: '100%', width: '100%' }}>
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={12} sm={12} xl={12} xs={12}>
            <Card style={{ height: '100%', paddingBottom: 10, paddingTop: 10 }}>
              <div style={{ textAlign: 'center' }}>
                <h1>Dashboard</h1>
              </div>
            </Card>
          </Grid>
          <Grid item xl={3} lg={3} sm={3} xs={6}>
            <Card style={{ height: '100%', padding: 20 }}>
              <Percentage circleColor="#89CFF0" label="Users" count={14} total={200} suffix="registered" />
            </Card>
          </Grid>
          <Grid item xl={3} lg={3} sm={3} xs={6}>
            <Card style={{ height: '100%', padding: 20 }}>
              <Total label="Fish" count={fishCount} comment="Total specimen reported" circleColor="#21B6A8" />
            </Card>
          </Grid>
          <Grid item xl={3} lg={3} sm={3} xs={6}>
            <Card style={{ height: '100%', padding: 20 }}>
              <Percentage circleColor="#75E6DA" label="Days remaining" count={176} total={200} suffix="in the season" />
            </Card>
          </Grid>
          <Grid item xl={3} lg={3} sm={3} xs={6}>
            <Card style={{ height: '100%', padding: 20 }}>
              <Total label="Photos" count={picCount} comment="Total photos submitted" circleColor="#189AB4" />
            </Card>
          </Grid>
          <Grid item xl={6} lg={6} sm={12} xs={12}>
            <Card style={{ height: '100%', padding: 20 }}>
              <Histogram label="Creeks Visited" data="creek_name" colorArray={['#18A558']} />
            </Card>
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <Card style={{ height: '100%', padding: 20 }}>
              <Pie label="Fish Status" data="fish_status" count="fish_count" />
            </Card>
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <Card style={{ height: '100%', padding: 20 }}>
              <Pie label="Fish Species" data="fish_species" count="fish_count" />
            </Card>
          </Grid>
          {/* <Grid item xl={3} lg={3} sm={6} xs={12}>
          </Grid>
          <Grid item xl={6} lg={6} sm={12} xs={12}>
            <Card style={{ height: '100%', padding: 20 }}>Medium box</Card>
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
};

export default Index;
