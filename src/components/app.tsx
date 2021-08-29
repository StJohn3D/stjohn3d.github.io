import { FunctionalComponent, h } from 'preact'
import { Route, Router } from 'preact-router'

import Header from './header'
import Home from '../routes/home'
import Profile from '../routes/profile'
import NotFoundPage from '../routes/notfound'

// THIS FILE MUST EXIST IN src/components/app for preact to work
export const App: FunctionalComponent = () => {
  return (
    <div id='preact_root'>
      <Header />
      <Router>
        <Route path='/' component={Home} />
        <Route path='/profile/' component={Profile} user='me' />
        <Route path='/profile/:user' component={Profile} />
        <NotFoundPage default />
      </Router>
    </div>
  )
}
