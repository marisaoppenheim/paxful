import React from "react"
import { Header } from "./Header"

export const SellSubHeader = ({ }) => {
  return (
    <div className="subHeaderSellContainer">
      <div className="row">
        <div className={window.location.pathname === "/sell/overview" ? "cell backgroundBlue" : "cell"} >
          <a className="sellSpacer" href="/sell/overview">Overview</a>
        </div>
        <div className={window.location.pathname.includes("/sell/trades") ? "cell backgroundBlue" : "cell"} >
          <a className="sellSpacer" href="/sell/trades/1">Trades</a>
        </div>
        <div className={window.location.pathname === "/sell/disputes" ? "cell backgroundBlue" : "cell"} >
          <a className="sellSpacer" href="/sell/disputes">Disputes</a>
        </div>
        <div className={window.location.pathname === "/sell/offers" ? "cell backgroundBlue" : "cell"} >
          <a className="sellSpacer" href="/sell/offers">Your offers</a>
        </div>
        <div className={window.location.pathname === "/sell/team" ? "cell backgroundBlue" : "cell"} >
          <a className="sellSpacer" href="/sell/team">My team</a>
        </div>
        <div className={window.location.pathname === "/sell/history" ? "cellBoth backgroundBlue" : "cellBoth"} >
          <a className="sellSpacer" href="/sell/history">Trade History</a>
        </div>
      </div>
    </div >
  )
}
