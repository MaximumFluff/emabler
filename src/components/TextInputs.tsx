import { connect, ConnectedProps } from 'react-redux';
import { appState } from '../types/appState';
import { InputList } from './InputList';
import {
  setChargerIDs,
  setUserIDs,
  setGroupIDs,
  setRfidTags,
} from '../actions/appState';

type Props = ConnectedProps<typeof connector>;

const TextInputs = (props: Props) => {
  return (
    <div
      style={{
        display: 'inherit',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        flexWrap: 'wrap',
      }}
    >
      <InputList
        label={'Add Charger ID'}
        data={props.chargerIDs}
        setData={props.setChargerIDs}
      />
      <InputList
        label={'Add User ID'}
        data={props.userIDs}
        setData={props.setUserIDs}
      />
      <InputList
        label={'Add Group ID'}
        data={props.groupIDs}
        setData={props.setGroupIDs}
      />
      <InputList
        label={'Add RFID Tag'}
        data={props.rfidTags}
        setData={props.setRfidTags}
      />
    </div>
  );
};

const connector = connect(
  (state: appState) => ({
    chargerIDs: state.chargerIDs,
    userIDs: state.userIDs,
    groupIDs: state.groupIDs,
    rfidTags: state.rfidTags,
  }),
  {
    setChargerIDs,
    setUserIDs,
    setGroupIDs,
    setRfidTags,
  }
);

const connected = connector(TextInputs);

export { connected as TextInputs };
