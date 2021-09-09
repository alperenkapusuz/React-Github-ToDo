import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './components/authentication/Login'
import MainMenu from './components/menu/MainMenu'
import PrivateRoute from './components/authentication/PrivateRoute'

const App = () => {
  return (
   
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/mainmenu" component={MainMenu}/>
        </Switch>
      </BrowserRouter>
    
  )
}

export default App

