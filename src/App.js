import React from 'react';
import './App.css';
import { Container, Typography, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';


function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>App</h1>
      <Container>
        <h3>Counter: {counter}</h3>
        <Button onClick={() => dispatch(increment())}> + </Button>
        <Button onClick={() => dispatch(decrement())}> - </Button>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </div>
  );
}

export default App;
