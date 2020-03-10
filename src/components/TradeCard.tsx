import React from "react"
import { TradeStatus } from "../types/Trades"
import { Users } from "./utils"
import User from "../types/User"

interface TradeCardProps {
  buyerId: string;
  offerType: string;
  USD: number;
  offerStatus: TradeStatus;
}

export const TradeCard = ({ buyerId, offerType, USD, offerStatus }: TradeCardProps) => {
  let chatUser: User = Users.filter((x: User) => x.id === buyerId)[0]
  return (
    <a className="cardContainer">
      <div className="rowNoFill spaceBetween">
        <div>
          <div className="rowNoFill paddingBottom">
            <div className="paddingTop">
              <div className={offerStatus === TradeStatus.NOT_PAID ? "grayDot" : "greenDot"} />
            </div>
            <div className="paddingLeft">
              {chatUser.name} is buying
        </div>
          </div>
          <div className="paddingRightSmall">
            {offerType}
          </div>
          <div className="smallGray">
            {`${USD} USD (${USD / 7874.59})BTC`}
          </div>
        </div>
        <div className="centerDots">
          <div className="biggerGrayDot" />
          <div className={offerStatus === TradeStatus.PAID ? "paddingTop4G" : "paddingTop4Gray"}>
            {offerStatus}
          </div>
        </div>
      </div>
    </a >


  )
}
