import React from 'react';
import NetworkStateNotifier from 'react-network-status-notifier'
import './App.css';

function App() {
  return (
    <div className="App">
      <NetworkStateNotifier />
      <h1>Network Status Notifier</h1>
    </div>
  );
}

export default App;
