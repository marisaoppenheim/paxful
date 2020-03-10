import React from "react"
import Trade, { TradeStatus } from "../types/Trades"
import User from "../types/User"

interface BuyerCardProps {
  chatUser: User;
  selectedTrade: Trade;
}

export const BuyerCard = ({ chatUser, selectedTrade }: BuyerCardProps) => {
  return (
    <div className="flexGrow1">
      <div className="center">
        <div>
          You are trading with {chatUser.name}
        </div>
        <div className="graySmallFont">
          Started {} ago
        </div>
        <button className="pill">
          Release bitcoins
        </button>
        <div className="gridWrapper">
          <div className="box">
            <div className="centerThings">
              <div className="biggerGrayDot" />
              <div className="rows">
                <div className="green">
                  {`+${chatUser.positiveReview}`}
                </div>
                <div className="smallText">
                  /
                </div>
                <div className="red">
                  {`-${chatUser.negativeReview}`}
                </div>
              </div>
            </div>
          </div>
          <div className="boxNoRight">
            <div className="centerThings">
              <div className="smallTextBold">
                # OF TRADES
            </div>
              <div className="smallTextAlignSelf">
                {chatUser.numberOfTrades}
              </div>
            </div>
          </div>
          <div className="box">
            <div className="centerThings">
              <div className="smallTextBold">
                TRADE STATUS
            </div>
              <div className="smallTextAlignSelf">
                {selectedTrade.offerStatus}
              </div>
            </div>
          </div>
          <div className="boxNoRight">
            <div className="centerThings">
              <div className="smallTextBold">
                TRADE HASH
            </div>
              <div className="smallTextAlignSelf">
                {selectedTrade.tradeHash}
              </div>
            </div>
          </div>
          <div className="box">
            <div className="centerThings">
              <div className="smallTextBold">
                AMOUNT USD
            </div>
              <div className="smallTextAlignSelf">
                {selectedTrade.USD}
              </div>
            </div>
          </div>
          <div className="boxNoRight">
            <div className="centerThings">
              <div className="smallTextBold">
                AMOUNT BTC
            </div>
              <div className="smallTextAlignSelf">
                {selectedTrade.USD / 7874.59}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
