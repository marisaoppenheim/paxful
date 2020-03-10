import User from "../types/User";
import Trades, { TradeStatus } from "../types/Trades";

export const Users: User[] = [
  {
    id: "1",
    name: "Chanaar",
    numberOfTrades: 4,
    positiveReview: 37,
    negativeReview: 1,
  },
  {
    id: "2",
    name: "Marisa",
    numberOfTrades: 8,
    positiveReview: 8,
    negativeReview: 0,
  },
  {
    id: "3",
    name: "Tom",
    numberOfTrades: 14,
    positiveReview: 10,
    negativeReview: 4,
  }
]

export const TradeOptions: Trades[] = [{
  id: "1",
  buyerId: "1",
  offerType: "Amazon Gift Card",
  USD: 75,
  offerStatus: TradeStatus.PAID,
  messages: [],
  tradeHash: "45aFD3Rr"
},
{
  id: "2",
  buyerId: "1",
  offerType: "Itunes Gift Card",
  USD: 30,
  offerStatus: TradeStatus.NOT_PAID,
  messages: [],
  tradeHash: "46aFD3Rr"
},
{
  id: "3",
  buyerId: "1",
  offerType: "Itunes Gift Card",
  USD: 45,
  offerStatus: TradeStatus.PAID,
  messages: [],
  tradeHash: "47aFD3Rr"
},
{
  id: "4",
  buyerId: "1",
  offerType: "PayPal",
  USD: 12,
  offerStatus: TradeStatus.NOT_PAID,
  messages: [],
  tradeHash: "48aFD3Rr"
},
]
