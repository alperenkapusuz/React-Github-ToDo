import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navi from './navi/Navi'
import Todo from './todo/Todo'

const Dashboard = () => {
    return (
        <BrowserRouter>
        <Navi/>
        <Switch>
            <Route path="/dashboard" exact component={Todo}/>
        </Switch>
      </BrowserRouter>
    )
}

export default Dashboard

