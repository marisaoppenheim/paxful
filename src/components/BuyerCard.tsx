import React from "react"
import { TradeStatus } from "../types/Trades"
import User from "../types/User"

interface BuyerCardProps {
  chatUser: User;
  offerStatus: TradeStatus;
  positiveReview: number;
  negativeReview: number;
  numberOfTrades: number;
  tradeHash: string;
  USD: number;
}

export const BuyerCard = ({ chatUser, offerStatus, positiveReview, negativeReview, numberOfTrades, tradeHash, USD }: BuyerCardProps) => {
  return (
    <div>
      <div>
        <div>
          You are trading with {chatUser.name}
        </div>
        <div>
          Started {} ago
        </div>
        <button>
          Release bitcoins
        </button>
      </div>
    </div>
  )
}
