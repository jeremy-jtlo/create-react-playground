import React, { Component } from 'react';
// import logo from './logo.svg';
import './styles/App.css';
import './styles/my-layout.css';
import DataArea from './components/data-area';
import SiteHeader from './components/site-header';
import { Content } from 'react-mdl';

class App extends Component {
  render() {
    return (
      // Add a component row for name/credentials
      <div>
        
        <SiteHeader/>
        <Content>
          <DataArea />
        </Content>
      </div>
      // Currently content needs to be hacked to 80% width to simulate margins. Fix?
    );
  }
}

export default App;
