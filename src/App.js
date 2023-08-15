import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Bio from './components/Bio';

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Bio />
    </div>
  );
};

export default App;