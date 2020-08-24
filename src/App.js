import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import { Container } from '@material-ui/core';
import DotaTeams from './components/DotaTeams/DotaTeams';
import appStore from './store';

class App extends Component {
  render() {
    return (
      <Provider store={appStore}>
        <div>
          <h1>App</h1>
          <Container>
            <DotaTeams/>
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
