import React from "react"
import { TradeCard } from "./TradeCard"
import Trade, { TradeStatus } from "../types/Trades"
import { TradeOptions, Users } from "./utils"
import { RouteComponentProps } from "react-router"
import User from "../types/User"
import { BuyerCard } from "./BuyerCard";
import { Messages } from "./Messages"


interface TradeProps extends RouteComponentProps<{ id: string }> { }

export const Trades = ({ match }: TradeProps) => {
  const tradeId = match.params.id
  const selectedTrade = TradeOptions.filter((x: Trade) => x.id === tradeId)[0]
  const buyerForTrade = Users.filter((x: User) => x.id === selectedTrade.buyerId)[0]
  return (
    <div className="rowNoPad">
      <div className="flex1">
        <div className="column">
          {TradeOptions.map((x: Trade) => <TradeCard id={x.id} buyerId={x.buyerId} offerType={x.offerType} USD={x.USD} offerStatus={x.offerStatus} />)}
        </div>
      </div>
      <div className="flex2">
        <Messages selectedTrade={selectedTrade} buyer={buyerForTrade} />
      </div>
      <div className="flex1"><BuyerCard chatUser={buyerForTrade} selectedTrade={selectedTrade} /></div>
    </div >
  )
}
