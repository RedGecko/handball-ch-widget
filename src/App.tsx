import React from 'react';
import './App.scss';
import Verein from './containers/verein';
import Team from './containers/team';
import Help from './components/help';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Help />} />
        <Route path="/verein/:id" element={<Verein />} />
        <Route path="/team/:id" element={<Team />} />
      </Routes>
    </Router>

  );
}

export default App;
