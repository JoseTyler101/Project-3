import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SquadForm from './components/SquadForm'
import SquadList from './components/SquadList'
import GameplayForm from './components/GameplayForm'
import GameplayList from './components/GameplayList'

// import './App.css';

function App() {

  return (
    <Router>
        <div>
          navbar
          <Switch>
            <Route exact path="/" component={SquadForm}/>
            <Route exact path="/squads" component={SquadList}/>
            <Route exact path="/game" component={GameplayForm}/>
            <Route exact path="/gameplay" component={GameplayList}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
