import React from "react"
import { TradeCard } from "./TradeCard"
import { TradeStatus } from "../types/Trades"


export const Trades = () => {
  return (
    <div className="rowNoPad">
      <div className="flex1">
        <TradeCard buyerId="1"
          offerType="Amazon Gift Card"
          USD={75}
          offerStatus={TradeStatus.PAID}
          wasRead={true}
        />
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
