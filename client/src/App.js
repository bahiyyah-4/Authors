import React from 'react';
import './App.css';
import New from './views/New';
import Main from './views/Main';
import Edit from './views/Edit';
import { Router } from '@reach/router';
import Unrecognized from './views/Unrecognized';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Edit path="/edit/:id" />
        <New path="/new" />
        <Unrecognized path="/:id/404" />
      </Router>
    </div>
  );
}

export default App;