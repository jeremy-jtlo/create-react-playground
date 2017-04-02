import React, { Component } from 'react';
// import logo from './logo.svg';
import './styles/App.css';
import './styles/my-layout.css';
import DataArea from './components/data-area';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

class App extends Component {
  render() {
    return (
      <div>
        <Layout fixedHeader>
          <Header title={<span><span style={{ color: '#ddd' }}>Weeping Jeremiah / </span><strong>Resume</strong></span>}>
          </Header>
          <Drawer title="Sections">
            <Navigation>
              <a href="#">Work</a>
              <a href="#">Projects</a>
              <a href="#">About</a>
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
