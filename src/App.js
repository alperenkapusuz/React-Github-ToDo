import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './components/authentication/Login'
import Dashboard from './components/menu/Dashboard'

const App = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/dashboard" component={Dashboard}/>
        </Switch>
      </BrowserRouter>
  )
}

export default App

