import React from 'react'
import { Switch } from 'react-router-dom'
import AppliedRoute from '../components/appliedRoutes/appliedRoutes'
import Login from '../components/login/login'

// eslint-disable-next-line react/prop-types
export default function Routes ({ appProps }) {
  return (
        <Switch>
        <AppliedRoute exact path="/" component={Login} appProps={appProps}/>
    </Switch>
  )
}
