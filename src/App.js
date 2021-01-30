import React from 'react';
import Navbar from './comps/Navbar';
import Main from './comps/containers/Main';
import Home from './comps/Home';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Main container="container" id="main">
        <Home/>
      </Main>

      
    </React.Fragment>
  )
}

export default App;