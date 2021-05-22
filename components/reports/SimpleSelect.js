import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const { handleChange, itemValue } = props;

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="report-label">Report Type</InputLabel>
        <Select labelId="report-label" id="report" value={itemValue} onChange={handleChange}>
          <MenuItem value="All Surveys">All Surveys</MenuItem>
          <MenuItem value="Fish Summary">Fish Summary</MenuItem>
          <MenuItem value="Volunteer Summary">Volunteer Summary</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
