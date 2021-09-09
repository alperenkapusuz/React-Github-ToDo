import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './authentication/Login'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App

