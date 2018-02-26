import React from 'react';
import {DatePicker} from 'antd';
import logo from './logo.svg';
import './App.css';

const App = () => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-titl">Welcome to React</h1>
        </header>
        <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
            <DatePicker />
        </div>
    </div>
);

export default App;
