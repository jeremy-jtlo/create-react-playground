import React, { Component } from 'react';
// import logo from './logo.svg';
import './styles/App.css';
import './styles/my-layout.css';
import DataArea from './components/data-area';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

class App extends Component {
  render() {
    return (
      <div style={{height: '300px', position: 'relative'}}>
        <Layout fixedHeader>
          <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>My Frame App</strong></span>}>
          </Header>
          <Drawer title="Frame Data">
            <Navigation>
              <a href="#">Ryu</a>
              <a href="#">Ken</a>
              <a href="#">Chun Li</a>
              <a href="#">Sagat</a>
            </Navigation>
          </Drawer>
        </Layout>

        <Content>
          <DataArea />
        </Content>
      </div>
      // Currently content needs to be hacked to 80% width to simulate margins. Fix?
    );
  }
}

export default App;
