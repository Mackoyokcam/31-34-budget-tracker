import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Dashboard from '../dashboard'
import Landing from '../landing'

class App extends React.Component {
  render(){
    return (
      <div className='app'>
        <h1> Budget Tracker </h1>
        <BrowserRouter>
          <div>
            <nav>
              <ul>
                <li><Link to='/'> home </Link> </li>
                <li><Link to='/dashboard'> dashboard </Link></li>
              </ul>
            </nav>
            <Route exact path='/' component={Landing} />
            <Route exact path='/dashboard' component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
