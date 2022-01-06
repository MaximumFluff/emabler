import { DateTimePicker } from '@mui/lab';
import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { appState } from '../types/appState';
import { setStartTime, setEndTime } from '../actions/appState';

type Props = ConnectedProps<typeof connector>;

const DatePickers = (props: Props) => {
  const [endDateDisabled, setEndDateDisabled] = useState(false);
  return (
    <>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label='Start Date'
        value={props.startTime}
        onChange={(newValue) => {
          props.setStartTime({ startTime: newValue });
        }}
      ></DateTimePicker>
      <div
        style={{
          display: 'inherit',
          flexDirection: 'column',
          marginTop: 20,
        }}
      >
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label='End Date'
          value={props.endTime}
          disabled={!endDateDisabled}
          onChange={(newValue) => {
            props.setEndTime({ endTime: newValue });
          }}
        ></DateTimePicker>
        <FormControlLabel
          sx={{
            typography: {
              color: 'white',
            },
          }}
          control={
            <Checkbox
              value={endDateDisabled}
              onChange={() => setEndDateDisabled(!endDateDisabled)}
            />
          }
          label='Enable End Date'
        />
      </div>
    </>
  );
};

const connector = connect(
  (state: appState) => ({
    startTime: state.startTime,
    endTime: state.endTime,
  }),
  {
    setStartTime,
    setEndTime,
  }
);

const connected = connector(DatePickers);

export { connected as DatePickers };
