import React from "react"
import Trade, { TradeStatus } from "../types/Trades"
import User from "../types/User"

interface BuyerCardProps {
  chatUser: User;
  selectedTrade: Trade;
}

export const BuyerCard = ({ chatUser, selectedTrade }: BuyerCardProps) => {
  return (
    <div className="flexGrow1">
      <div className="center">
        <div>
          You are trading with {chatUser.name}
        </div>
        <div className="graySmallFont">
          Started {} ago
        </div>
        <button className="pill">
          Release bitcoins
        </button>
        <div className="gridWrapper">
          <div className="box">
            Fuck
          </div>
          <div className="boxNoRight">
            Fuck
          </div>
          <div className="box">
            Fuck
          </div>
          <div className="boxNoRight">
            Fuck
          </div>
          <div className="box">
            Fuck
          </div>
          <div className="boxNoRight">
            Fuck
          </div>
        </div>
      </div>
    </div>
  )
}
