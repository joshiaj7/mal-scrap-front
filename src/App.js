import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import { Container } from '@material-ui/core';
import Posts from './components/Posts/Posts';
import appStore from './store';

class App extends Component {
  render() {
    return (
      <Provider store={appStore}>
        <div>
          <h1>App</h1>
          <Container>
            <Posts />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
