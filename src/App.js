import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'


function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return (
    <FormControlLabel 
      control = { <Checkbox 
          checked ={checked}
          onChange = {(e) => setChecked(e.target.checked)} /> 
      } 
      label = 'Testing stuff'
    />
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextField variant = 'outlined' type = 'date'/>
        <CheckboxExample />
        <ButtonGroup size="large" variant='contained' >
          <Button 
                endIcon = {<SaveIcon />}
                color='secondary'>
            Grupo Elba
          </Button>
          <Button 
                endIcon = {<SaveIcon />}
                color='primary'>
            Grupo Elba
          </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
