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
  messages: [{
    id: "1",
    speakerId: "1",
    time: "Tue Mar 10 2020 05:35:32 EST+0530 (Eastern Standard Time)",
    message: "That said, there is a solution, but it relies on using the CSS content property for element replacement, which is a fairly recent technology that's apparently still not supported in Microsoft Edge. The following CSS code is the gist of it and worked for me in testing in Firefox 68:"
  },
  {
    id: "2",
    speakerId: "2",
    time: "Tue Mar 10 2020 05:40:32 EST+0530 (Eastern Standard Time)",
    message: "Lorem Ipsum"
  },],
  tradeHash: "45aFD3Rr"
},
{
  id: "2",
  buyerId: "1",
  offerType: "Itunes Gift Card",
  USD: 30,
  offerStatus: TradeStatus.NOT_PAID,
  messages: [
    {
      id: "1",
      speakerId: "1",
      time: "Tue Mar 10 2020 05:35:32 EST+0530 (Eastern Standard Time)",
      message: "a distinct section of a piece of writing, usually dealing with a single theme and indicated by a new line, indentation, or numbering"
    },
    {
      id: "2",
      speakerId: "2",
      time: "Tue Mar 10 2020 05:40:32 EST+0530 (Eastern Standard Time)",
      message: "Lorem Ipsum"
    },
  ],
  tradeHash: "46aFD3Rr"
},
{
  id: "3",
  buyerId: "1",
  offerType: "Itunes Gift Card",
  USD: 45,
  offerStatus: TradeStatus.PAID,
  messages: [{
    id: "1",
    speakerId: "1",
    time: "Tue Mar 10 2020 05:35:32 EST+0530 (Eastern Standard Time)",
    message: "I cant make up messages but I tried"
  },
  {
    id: "2",
    speakerId: "2",
    time: "Tue Mar 10 2020 05:40:32 EST+0530 (Eastern Standard Time)",
    message: "Lorem Ipsum"
  },],
  tradeHash: "47aFD3Rr"
},
{
  id: "4",
  buyerId: "1",
  offerType: "PayPal",
  USD: 12,
  offerStatus: TradeStatus.NOT_PAID,
  messages: [
    {
      id: "1",
      speakerId: "1",
      time: "Tue Mar 10 2020 05:35:32 EST+0530 (Eastern Standard Time)",
      message: "E Pluribus Unum"
    },
    {
      id: "2",
      speakerId: "2",
      time: "Tue Mar 10 2020 05:40:32 EST+0530 (Eastern Standard Time)",
      message: "Lorem Ipsum"
    },
  ],
  tradeHash: "48aFD3Rr"
},
]
