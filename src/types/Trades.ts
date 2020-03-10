export default interface Trade {
  id: string;
  buyerId: string;
  offerType: string;
  USD: number;
  offerStatus: TradeStatus;
  messages: Message[];
  tradeHash: string;
}

export enum TradeStatus {
  PAID = "PAID",
  NOT_PAID = "NOT PAID",
}

export interface Message {
  id: string;
  speakerId: string;
  time: string;
  wasRead: boolean;
}
