import { useState } from 'react';
import './App.css';
import FlexibleInput from './FlexibleInput';

function App() {
  const [inputValue, setInputValue]= useState('');

  const handleInputChange =(value) => {
    setInputValue(value);
  }
  return (
    <div className="App">
     <h1> Parent Component</h1> 
    <FlexibleInput 
      inputType="text"
      inputTitle="Username"
      required={true}
      customChangeFuntion={(handleInputChange)}
      value={inputValue}
      holder="username of holder"
      labelStyle={{ fontWeight: 'bold'}}
      errorMessage="username is compulsory"
      error={!inputValue}
    />
    </div>
  );
}

export default App;
