import './InputRow.css';
import { DateTimePicker } from '@mui/lab';
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import { connect, ConnectedProps } from 'react-redux';
import { appState } from '../types/appState';
import * as actions from '../actions/appState';
import { formatISO } from 'date-fns';
import { callApi } from '../api';

type Props = ConnectedProps<typeof connector>;

const InputRow = (props: Props) => {
  return (
    <div id='InputRow'>
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
        }}
      >
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label='End Date'
          value={props.endTime}
          disabled={!props.endDateDisabled}
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
              value={props.endDateDisabled}
              onChange={props.setEndDateDisabled}
            />
          }
          label='Enable End Date'
        />
      </div>
      <Button
        variant='outlined'
        style={{
          height: 70,
        }}
        onClick={async () => {
          if (props.startTime && props.endTime) {
            props.setLoading(true);
            props.setApiData({
              apiData: await callApi({
                startTime: formatISO(props.startTime),
                endTime: props.endDateDisabled
                  ? undefined
                  : formatISO(props.endTime),
              }),
            });
            props.setLoading(false);
          }
        }}
      >
        Fetch
      </Button>
    </div>
  );
};

const mapStateToProps = (state: appState) => ({
  startTime: state.startTime,
  endTime: state.endTime,
  endDateDisabled: state.endTimeDisabled,
});

const mapDispatchToProps = {
  setStartTime: actions.setStartTime,
  setEndTime: actions.setEndTime,
  setEndDateDisabled: actions.toggleEndStateDisabled,
  setApiData: actions.setApiData,
  setLoading: actions.setLoading,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

const connected = connector(InputRow);

export { connected as InputRow };
