import { DataGrid } from '@mui/x-data-grid';
import { connect, ConnectedProps } from 'react-redux';
import { columnNames } from '../constants';
import { appState } from '../types/appState';
import { Styles } from '../types/styles';

type Props = ConnectedProps<typeof connector>;

const Table = (props: Props) => {
  return (
    <div style={style.container}>
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

const style: Styles = {
  container: {
    marginTop: 20,
  },
};

const mapStateToProps = (state: appState) => ({
  apiData: state.apiData?.results ?? [],
  loading: state.loading,
});

const connector = connect(mapStateToProps);

const connected = connector(Table);

export { connected as Table };
