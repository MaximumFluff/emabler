import { DateTimePicker } from '@mui/lab';
import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import { connect, ConnectedProps } from 'react-redux';
import { appState } from '../types/appState';
import {
  setStartTime,
  setEndTime,
  toggleEndStateDisabled,
} from '../actions/appState';
import { Styles } from '../types/styles';

type Props = ConnectedProps<typeof connector>;

const DatePickers = (props: Props) => {
  return (
    <div style={styles.container}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label='Start Date'
        value={props.startTime}
        onChange={(newValue) => {
          props.setStartTime(newValue);
        }}
      ></DateTimePicker>
      <div style={styles.endDateContainer}>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label='End Date'
          value={props.endTime}
          disabled={!props.endTimeDisabled}
          onChange={(newValue) => {
            props.setEndTime(newValue);
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
              value={props.endTimeDisabled}
              onChange={() => props.toggleEndStateDisabled()}
            />
          }
          label='Enable End Date'
        />
      </div>
    </div>
  );
};

const styles: Styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  endDateContainer: {
    display: 'inherit',
    flexDirection: 'column',
    marginTop: 20,
  },
};

const connector = connect(
  (state: appState) => ({
    startTime: state.startTime,
    endTime: state.endTime,
    endTimeDisabled: state.endTimeDisabled,
  }),
  {
    setStartTime,
    setEndTime,
    toggleEndStateDisabled,
  }
);

const connected = connector(DatePickers);

export { connected as DatePickers };
