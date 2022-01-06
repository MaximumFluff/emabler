import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { KeyboardEvent, useState } from 'react';

type Props = {
  label: string;
  data: string[];
  setData: (arr: string[]) => void;
};

const InputList = (props: Props) => {
  const [text, setText] = useState('');
  const [error, setError] = useState(false);

  const onKeyPress = (e: KeyboardEvent) => {
    if (e.code === 'Enter') {
      validateText(text);
    }
  };

  const validateText = (text: string) => {
    if (props.data.find((item) => item === text)) {
      setError(true);
    } else {
      props.setData([...props.data, text]);
      setText('');
      setError(false);
    }
  };

  return (
    <div
      style={{
        border: '1px solid gray',
        borderRadius: 10,
        padding: 10,
      }}
    >
      <div
        style={{
          display: 'flex',
        }}
      >
        <TextField
          error={error}
          helperText={error && 'Incorrect entry'}
          value={text}
          label={props.label}
          variant='outlined'
          onChange={(input) => setText(input.target.value)}
          onKeyDown={onKeyPress}
        />
        <Button
          onClick={() => validateText(text)}
          style={{
            marginLeft: 5,
            justifyContent: 'center',
            alignSelf: 'center',
          }}
          endIcon={<SendIcon />}
        >
          Add
        </Button>
      </div>

      <List>
        {props.data.map((item) => (
          <ListItem
            key={item}
            secondaryAction={
              <IconButton
                edge='end'
                aria-label='delete'
                onClick={() =>
                  props.setData(props.data.filter((x) => x !== item))
                }
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText sx={{ color: 'white' }}>{item}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export { InputList };
