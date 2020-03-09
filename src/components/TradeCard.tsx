import React from "react"
import { TradeStatus } from "../types/Trades"
import { Users } from "./utils"
import User from "../types/User"

interface TradeCardProps {
  buyerId: string;
  offerType: string;
  USD: number;
  offerStatus: TradeStatus;
  wasRead: boolean;
}

export const TradeCard = ({ buyerId, offerType, USD, offerStatus }: TradeCardProps) => {
  let chatUser: User = Users.filter((x: User) => x.id === buyerId)[0]
  return (
    <div className="cardContainer">
      <div>
        <div>
          {chatUser.name}
        </div>
        <div>

        </div>
        <div>

        </div>
      </div>
      <div>

      </div>
    </div>

  )
}
