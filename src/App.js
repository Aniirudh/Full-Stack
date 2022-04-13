import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const[userInput,setInput]=useState({
    name:"",
    usn:"",
    age:"",
    uni:"",
    city:""
  });
  const[result,setResult]=useState("");
  

  const handleChange=(event)=>{
    const obj={
      name:event.target.value,
      
    }
    setInput(userInput.name)
  }


  return (
    <div className="App">
      Name:<input onChange={handleChange} value={userInput}></input>

      <button>{userInput}</button>
    </div>
  );
}

export default App;
