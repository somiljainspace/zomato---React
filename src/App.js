import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';
import HomePage from './pages/home';

// Rendering file in APP.JS 
function App() {
  return (
    <>
    <HomePage />
      <Search />
    </>
  );
}

export default App;
