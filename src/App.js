import React, { Component } from 'react';
// import logo from './logo.svg';
import './styles/App.css';
import {Grid, Cell} from 'react-mdl';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <div style={{width: '80%', margin: 'auto'}}>
        <Grid>
          <Cell col={4}>NO WAY</Cell>
          <Cell col={4}>IT</Cell>
          <Cell col={4}>ACTUALLY WORKED</Cell>
        </Grid>
      </div>
    );
  }
}

export default App;
