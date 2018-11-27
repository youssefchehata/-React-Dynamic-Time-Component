import React, { Component } from 'react';
import Dynamictimer from './Dynamic.js';
import Time from './Time.js'
import './App.css';


const data=[
  {
  button:"START"
},
{
  button:"RESET"
}
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dynamictimer input={data}/>
        <Time ms={5000} />
        
        
      </div>
    );
  }
}

export default App;
