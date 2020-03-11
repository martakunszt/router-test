import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Img from "./deidamia.jpg";
import One from "./img2.jpg";
import Two from "./img3.jpg";



export default function BasicExample() {
  return(
    <Router>
      <div>
        <ul>
          <li>
            <Link className="text-link" to="/">Home</Link>
          </li>
          <li><Link className="text-link" to="/about">About</Link>
          </li>
          <li><Link className="text-link" to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Home(){
  return(
    <div>
      <h2>Home</h2>
      <div className="img">
        <img src={One} alt="deidami greek sculpture"></img>
      </div>
    </div>
  );
}

function About(){
  return(
    <div>
      <h2>About</h2>
      <div className="img">
        <img src={Two} alt="deidami greek sculpture"></img>
      </div>
    </div>
  );
}

function Dashboard(){
  return(
    <div>
      <h2>Dashboard</h2>
      <div className="img">
        <img src={Img} alt="deidamia greek sculpture"></img>
      </div>
    </div>
  );
}