import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './containers/home'
import Organize from './containers/Organize'
import Purchase from './containers/Purchase'
import ViewEvent from './containers/ViewEvent'
import AddEvent from './containers/AddEvent'
import EditEvent from './containers/EditEvent'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const App = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/organize' component={Organize} />
      <Route exact path='/purchase' component={Purchase} />
      <Route exact path='/viewEvent/:id' component={ViewEvent} />
      <Route exact path='/editEvent/:id' component={EditEvent} />
      <Route exact path='/addEvent' component={AddEvent} />
    </Switch>
  </main>
)

export default App
