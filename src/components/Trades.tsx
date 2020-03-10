import React from "react"
import { TradeCard } from "./TradeCard"
import Trade, { TradeStatus } from "../types/Trades"
import { TradeOptions } from "./utils"

export const Trades = () => {
  return (
    <div className="rowNoPad">
      <div className="flex1">
        <div className="column">
          {TradeOptions.map((x: Trade) => <TradeCard buyerId={x.buyerId} offerType={x.offerType} USD={x.USD} offerStatus={x.offerStatus} />)}
        </div>
      </div>
      <div className="flex2">
        <div>
          <div>
            Hi
        </div>
          <div>
            Hi
        </div>
          <div>
            Hi
        </div>
          <div>
            Hi
        </div>
        </div>
      </div>
      <div className="flex1">Meh</div>
    </div >
  )
}
