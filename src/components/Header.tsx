import React from "react"
import { Link } from "react-router-dom";

export const Header = ({ }) => {

  return (
    <div className="headerContainer">
      <div className="companyName">
        Paxful
      </div>
      <div className="linkContainer">
        <a className={window.location.pathname === "/buy" ? "tagSpacer underline" : "tagSpacer"} href="/buy">
          Buy bitcoins
        </a>
        <a className={window.location.pathname === "/sell" ? "tagSpacer underline" : "tagSpacer"} href="/sell">
          Sell bitcoins
        </a>
        <a className={window.location.pathname === "/wallet" ? "tagSpacer underline" : "tagSpacer"} href="/wallet">
          Wallet
        </a>
        <a className={window.location.pathname === "/support" ? "tagSpacer underline" : "tagSpacer"} href="/support">
          Support
        </a>
        <a className={window.location.pathname === "/account" ? "tagSpacer underline" : "tagSpacer"} href="/account">
          Your Account
        </a>
      </div>
    </div >
  )
}
