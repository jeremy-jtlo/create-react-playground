import React, { Component } from 'react';
// import logo from './logo.svg';
import './styles/App.css';
import {Grid, Cell, Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

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
      <div style={{height: '300px', position: 'relative'}}>
        <Layout fixedHeader>
          <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>My Frame App</strong></span>}>
            <Navigation>
              <a href="#">USFIV</a>
              <a href="#">SFV</a>
              <a href="#">Blazblue CF</a>
            </Navigation>
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
          <Grid className="demo-grid-1">
            <Cell col={4}>First column</Cell>
            <Cell col={4}>Second column</Cell>
            <Cell col={4}>Third column, I guess</Cell>
          </Grid>
        </Content>
      </div>
      // Currently content needs to be hacked to 80% width to simulate margins. Fix?
    );
  }
}

export default App;
