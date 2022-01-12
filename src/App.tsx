import { DatePickers } from './components/DatePickers';
import { InputRow } from './components/InputRow';
import { Table } from './components/Table';
import { TextInputs } from './components/TextInputs';
import { Styles } from './types/styles';

function App() {
  return (
    <div style={styles.container}>
      <DatePickers />
      <TextInputs />
      <InputRow />
      <Table />
    </div>
  );
}

const styles: Styles = {
  container: {
    padding: 100,
  },
};

export default App;
