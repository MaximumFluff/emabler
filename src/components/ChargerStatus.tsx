import { useEffect, useState } from 'react';
import { callChargerApi } from '../api';
import { ChargerData } from '../types/api';
import { Styles } from '../types/styles';

type Props = {
  chargerId: string;
};

const ChargerStatus = (props: Props) => {
  const [chargerData, setChargerData] = useState<ChargerData>();

  useEffect(() => {
    async function fetchData() {
      const data = await callChargerApi(props.chargerId);
      console.log(data);
      setChargerData(data);
    }
    fetchData();
  }, [props.chargerId]);

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.circle,
          backgroundColor: chargerData?.activeConnection ? 'green' : 'red',
        }}
      />
      <div>
        <p style={styles.text}>Charger ID: {props.chargerId}</p>
        <p style={styles.text}>Status: {chargerData?.chargerStatus}</p>
      </div>
    </div>
  );
};

const styles: Styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 250,
    marginTop: 50,
    border: '1px solid gray',
    borderRadius: 10,
  },
  circle: {
    borderRadius: 25,
    width: 25,
    height: 25,
  },
  text: {
    color: 'white',
  },
};

export { ChargerStatus };
