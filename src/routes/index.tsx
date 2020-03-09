import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Main } from "../components/Main"
import { Header } from "../components/Header"

export const Root = ({ }) => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  )
}
