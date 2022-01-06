import './InputRow.css';
import { Button } from '@mui/material';
import { connect, ConnectedProps } from 'react-redux';
import { appState } from '../types/appState';
import * as actions from '../actions/appState';
import { formatISO } from 'date-fns';
import { callApi } from '../api';
import { TextInputs } from './TextInputs';
import { DatePickers } from './DatePickers';

type Props = ConnectedProps<typeof connector>;

const InputRow = (props: Props) => {
  return (
    <div id='InputRow'>
      <DatePickers />
      <TextInputs />
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
  chargerIDs: state.chargerIDs,
});

const mapDispatchToProps = {
  setStartTime: actions.setStartTime,
  setEndTime: actions.setEndTime,
  setEndDateDisabled: actions.toggleEndStateDisabled,
  setApiData: actions.setApiData,
  setLoading: actions.setLoading,
  setChargerIDs: actions.setChargerIDs,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

const connected = connector(InputRow);

export { connected as InputRow };
