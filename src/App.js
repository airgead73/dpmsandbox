import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './comps/Navbar';
import Main from './comps/containers/Main';
import Home from './comps/Home';
import Videos from './comps/Videos';
import Hyperlinks from './comps/Hyperlinks';
import Activities from './comps/Activities';
import Figures from './comps/Figures';

function App() {
  return (
    <Router>
      <Navbar/>
      <Main container="container" id="main">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/links">
            <Hyperlinks/>
          </Route>  
          <Route exact path="/activities">
            <Activities/>
          </Route> 
          <Route exact path="/videos">
            <Videos/>
          </Route>  
          <Route exact path="/figures">
            <Figures/>
          </Route>                                    
        </Switch>
      </Main>      
    </Router>
  )
}

export default App;