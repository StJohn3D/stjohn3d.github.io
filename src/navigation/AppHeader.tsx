import React from 'react'
import { withRouter, NavLink, Link } from 'react-router-dom'
import classNames from 'classnames'

export const AppHeader = withRouter(props => {
  const isHome = props.location.pathname === "/"
  return (
    <header className={classNames({ "App-header": true, "home": isHome })}>
      <img className="selfie" alt="Picture of St. John" src="https://www.gravatar.com/avatar/845122333bf6c244096538e0df542248?s=200" />
      <Link to="/" className="App-home-link"><h3>StJohn3D</h3></Link>
      {/* <nav className="App-nav">
        <NavLink to="/blog" className="App-link">blog</NavLink>
        <NavLink to="/media" className="App-link">Media</NavLink>
        <NavLink to="/contact" className="App-link">Contact</NavLink>
      </nav> */}
    </header>
  )
})
