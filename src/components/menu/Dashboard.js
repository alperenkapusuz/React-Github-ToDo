import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navi from './navi/Navi'
import Todo from './todo/Todo'
import Profile from './profile/Profile'
import Users from './users/Users'

const Dashboard = () => {
    return (
        <BrowserRouter>
        <Navi/>
        <Switch>
            <Route path="/dashboard" exact component={Profile}/>
            <Route path="/dashboard/todo" exact component={Todo}/>
            <Route path="/dashboard/users" exact component={Users}/>
        </Switch>
      </BrowserRouter>
    )
}

export default Dashboard

