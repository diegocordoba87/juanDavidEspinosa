import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "./components/NavBar"
import Home from "./containers/Home"

function App() {
  return (
    <Router>
      <NavBar/>
      <Route exact path= "/" component={Home}/>
    
    </Router>

    
  );
}

export default App;
