import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header'
import Main from './containers/Main'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Main}/>
    </BrowserRouter>
  );
}

export default App;
