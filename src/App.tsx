import { ChargerStatus } from './components/ChargerStatus';
import { DatePickers } from './components/DatePickers';
import { SubmitButton } from './components/SubmitButton';
import { Table } from './components/Table';
import { TextInputs } from './components/TextInputs';

function App() {
  return (
    <div>
      <DatePickers />
      <TextInputs />
      <SubmitButton />
      <Table />
      <ChargerStatus chargerId='eMabler_Test1' />
    </div>
  );
}

export default App;
