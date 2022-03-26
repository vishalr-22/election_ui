import React from 'react';
import './App.css';
import Navbar from './components/Navbar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/admin/home';
import Candidates from './pages/admin/Candidates';
import Verifyvoter from './pages/admin/Verifyvoter';
import Addcandidates from './pages/admin/Addcandidates';
import Phase from './pages/admin/Phase';
import Results from './pages/admin/Results';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/candidates' component={Candidates} />
        <Route path='/verify-voter' component={Verifyvoter} />
        <Route path='/add-candidate' component={Addcandidates} />
        <Route path='/results' component={Results} />
        <Route path='/phase' component={Phase} />
      </Switch>
    </Router>
  );
}

export default App;
