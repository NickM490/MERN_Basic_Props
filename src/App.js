import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonCard from './Components/PersonCard';


function App() {
  return (
    <>
      <div>
        <PersonCard firstName = "Jane" lastName = "Doe" Age = {88} hairColor = "Brown" />
        <PersonCard firstName = "John" lastName = "Doe" Age = {22} hairColor = "Green" />
        <PersonCard firstName = "Billy" lastName = "Goat" Age = {3154} hairColor = "Teal" />
        <PersonCard firstName = "Jim" lastName = "Jones" Age = {55} hairColor = "432" />
      </div>,

      <button onClick = { ()=> alert("The alert button has been clicked")}>ALERT</button>
      <button onFocus = { ()=> alert("The Focus button has been clicked")}>FOCUS</button>
      <p onBlur = { ()=> alert("The Blur button has been clicked")}>BLUR</p>
      </>
  );
}

export default App;
