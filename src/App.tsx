import React from "react";
import { BrowserRouter as Router, Route, NavLink, Link } from "react-router-dom";
import { AppHeader } from './navigation'
import { Home } from './pages/Home'
import { Blog } from './pages/Blog'
import { Media } from './pages/Media'
import { Contact } from './pages/Contact'
import './App.scss'



export const App = () => {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/media" component={Media} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}
