import React from 'react';
import Container from './Container';
import logo from './logo.svg';

const App = () => (
  <Container>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-titl">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  </Container>
);

export default App;
