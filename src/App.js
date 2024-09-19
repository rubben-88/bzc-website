import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Groepen from './Groepen';
import Lesuren from './Lesuren';
import Contact from './Contact';
import NotFound from './NotFound';
import Fotos from './Fotos';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar/>
        <div className="content-wrapper">
          <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/groepen">
              <Groepen />
            </Route>
            <Route exact path="/lesuren">
              <Lesuren />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/fotos">
              <Fotos />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App;
