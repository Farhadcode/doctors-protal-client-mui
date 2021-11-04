import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Home from "./Pages/Home/Home/Home";
import NaveBar from "./Pages/Shared/Navigation/NaveBar";
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NaveBar />
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route exact path="*">

          </Route>
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
