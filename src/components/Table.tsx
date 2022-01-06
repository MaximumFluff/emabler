import { DataGrid } from '@mui/x-data-grid';
import { connect, ConnectedProps } from 'react-redux';
import { columnNames } from '../constants';
import { appState } from '../types/appState';

type Props = ConnectedProps<typeof connector>;

const Table = (props: Props) => {
  console.log(props.apiData);
  return (
    <div style={{ marginTop: 20 }}>
      <DataGrid
        autoHeight
        disableSelectionOnClick
        loading={props.loading}
        columns={columnNames.map((item) => ({
          field: item,
          headerName: item,
          sortable: true,
          width: 200,
        }))}
        rows={props.apiData.map((item, id) => ({
          id,
          ...item,
        }))}
      />
    </div>
  );
};

const mapStateToProps = (state: appState) => ({
  apiData: state.apiData?.results ?? [],
  loading: state.loading,
});

const connector = connect(mapStateToProps);

const connected = connector(Table);
export { connected as Table };
