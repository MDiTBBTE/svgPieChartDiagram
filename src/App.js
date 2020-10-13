import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Diagram } from './pages/Diagram';
import { Home } from './pages/Home';

export const App = () => {
  const [ sections, setSections ] = useState([]);

   const handleAddSection = (name, amount, hexColor, prevAmount) => {
    setSections([...sections, ...[{name, amount, hexColor, prevAmount}]]);
   };

  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/">
              <Home handleAddSection={handleAddSection} />
            </Route>
            <Route exact path="/diagram">
              <Diagram sections={sections}/>
            </Route>
          </Switch>
      </Router>
    </div>
  )
}
