import User from "../types/User";
import Trades, { TradeStatus } from "../types/Trades";

export const Users: User[] = [
  {
    id: "1",
    name: "Chanaar",
  },
  {
    id: "2",
    name: "Marisa"
  },
  {
    id: "3",
    name: "Tom"
  }
]

export const TradeOptions: Trades[] = [{
  id: "1",
  buyerId: "1",
  offerType: "Amazon Gift Card",
  USD: 75,
  offerStatus: TradeStatus.PAID,
  messages: []
},
{
  id: "2",
  buyerId: "1",
  offerType: "Itunes Gift Card",
  USD: 30,
  offerStatus: TradeStatus.NOT_PAID,
  messages: []
},
{
  id: "3",
  buyerId: "1",
  offerType: "Itunes Gift Card",
  USD: 45,
  offerStatus: TradeStatus.PAID,
  messages: []
},
{
  id: "4",
  buyerId: "1",
  offerType: "PayPal",
  USD: 12,
  offerStatus: TradeStatus.NOT_PAID,
  messages: []
},
]
