import { Button } from '@mui/material';
import { connect, ConnectedProps } from 'react-redux';
import { appState } from '../types/appState';
import { callTransactionsApi } from '../api';
import { createApiBody } from '../selectors/appState';
import { setApiData, setLoading } from '../actions/appState';
import { Styles } from '../types/styles';

type Props = ConnectedProps<typeof connector>;

const SubmitButton = (props: Props) => {
  return (
    <div style={styles.container}>
      <Button
        variant='outlined'
        style={styles.buttonHeight}
        onClick={async () => {
          if (props.startTime && props.endTime) {
            props.setLoading(true);
            props.setApiData({
              apiData: await callTransactionsApi(props.requestBody),
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

const styles: Styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  buttonHeight: {
    height: 70,
  },
};

const mapStateToProps = (state: appState) => ({
  startTime: state.startTime,
  endTime: state.endTime,
  requestBody: createApiBody(state),
});

const mapDispatchToProps = {
  setApiData,
  setLoading,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

const connected = connector(SubmitButton);

export { connected as SubmitButton };
