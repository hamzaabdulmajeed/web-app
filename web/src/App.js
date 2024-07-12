import {useState, useEffect} from 'react'
import Router from './config/router'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Router />
      </header>
    </div>
  );
}

export default App;
