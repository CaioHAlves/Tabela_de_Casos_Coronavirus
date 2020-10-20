import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PDF from './PDF/pdf'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={PDF}></Route>
    </Switch>
  </BrowserRouter>
)

export default Routes