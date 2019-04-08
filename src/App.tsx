import React from "react";
import { BrowserRouter as Router, Route, NavLink, Link } from "react-router-dom";
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Media } from './pages/Media'
import { Contact } from './pages/Contact'
import './App.scss'

export const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/" className="App-home-link"><h3>St. John Peaster</h3></Link>
          <nav className="App-nav">
            {/* <NavLink to="/" className="App-link">Home</NavLink> */}
            <NavLink to="/about" className="App-link">About</NavLink>
            <NavLink to="/media" className="App-link">Media</NavLink>
            <NavLink to="/contact" className="App-link">Contact</NavLink>
          </nav>
        </header>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/media" component={Media} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}
