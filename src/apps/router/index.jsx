import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import React from 'react'

import Home from './Home'
import Contact from './Contact'
import About from './About'

function RouterApp() {
  return (
    <div>
      <Router>
        <header style={{display: 'flex', justifyContent: 'space-around', width: '500px'}}>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  )
}

export default RouterApp
