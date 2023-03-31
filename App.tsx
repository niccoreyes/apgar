import * as React from 'react';
import './style.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import MenuIcon from '@mui/icons-material/Menu';

export default function App() {
  return (
    <div>
      <Scaffold />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <ButtonOne />
    </div>
  );
}

function Scaffold() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
interface formList {
  name: string;
  label: string;
}
function ButtonOne() {
  const initialList: formList[] = [
    { name: 'keyboard', label: './images/image001.png' },
    {
      name: 'headphones',
      label: './images/image002.png',
    },
    {
      name: 'mouse',
      label: './images/image003.png',
    },
  ];
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        row={true}
      >
        {initialList.map((item) => {
          return (
            <FormControlLabel
              value={item.name}
              control={<Radio />}
              label={item.name.toUpperCase()}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}
