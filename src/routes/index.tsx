import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { SellSubHeader } from "../components/SellSubHeader"
import { Header } from "../components/Header"
import { Trades } from "../components/Trades"

export const Root = ({ }) => {
  return (
    <Router>
      <Header />
      {window.location.pathname.includes("/sell") && <SellSubHeader />}
      <Switch>
        <Route path="/sell/trades">
          <Trades />
        </Route>
      </Switch>
    </Router>
  )
}
