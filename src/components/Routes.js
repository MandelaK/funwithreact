import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import NavBar from './Navbar';
import Beer from './Beer';
import Jokes from './Jokes';
import Users from './Users';
import Home from './Home';

const Routes = () => {
    return (
        <BrowserRouter>
          <div className="App container">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/beer" component={Beer} />
          <Route exact path="/jokes" component={Jokes} />
          <Route exact path="/users" component={Users} />
          </div>
        </BrowserRouter>
    )
}

export default Routes;