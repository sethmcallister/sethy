import React from 'react'
import { Route, IndexRoute } from 'react-router'
import routeApp from './route.App'
import routeProjects from './route.Projects'
import routeHome from './route.Home'
import routeContact from './route.Contact'

module.exports = (
  <Route path='/' component={routeApp}>
    <IndexRoute component={routeHome} />
    <Route path='/projects' component={routeProjects} />
    <Route path='/contact' component={routeContact} />
  </Route>
)
