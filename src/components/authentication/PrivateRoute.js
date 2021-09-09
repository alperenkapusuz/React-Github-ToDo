import React from "react"
import { Route, Redirect } from "react-router-dom"
import { provider } from "../../firebase/Firebase"

export default function PrivateRoute({ component: Component, ...rest }) {

 const {currentUser } = provider
  return (
    <Route
      {...rest}
      render={props => {
        return  currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}