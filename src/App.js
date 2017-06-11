import React, { Component } from 'react';
import DataArea from './components/data-area';

class App extends Component {
  render() {
    return (
      // Add a component row for name/credentials
      <div>
        <DataArea />
      </div>
      // Currently content needs to be hacked to 80% width to simulate margins. Fix?
    );
  }
}

export default App;
