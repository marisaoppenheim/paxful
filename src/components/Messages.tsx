import React from "react"
import Trade, { Message } from "../types/Trades"
import User from "../types/User"
import { SingleMessage } from "./SingleMessage"

interface MessagesProps {
  selectedTrade: Trade;
  buyer: User
}

export const Messages = ({ selectedTrade, buyer }: MessagesProps) => {
  return (
    <div className="flex2grow">
      <div className="flex2Column">
        <div className="height50 rowNoFill">
          <div className="height50border">
            <button className="biggerGrayDot" />
            <div className="asCenter">
              <div>
                {selectedTrade.offerType}
              </div>
              <div className="rowFlex">
                <div className="grayPaddingRight">
                  {buyer.name}
                </div>
                <div className="green">
                  {`+${buyer.positiveReview}`}
                </div>
                <div className="smallText">
                  /
                </div>
                <div className="red">
                  {`-${buyer.negativeReview}`}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="padding40s">
            {selectedTrade.messages.map((x: Message) => <SingleMessage message={x} buyer={buyer} />)}
          </div>
        </div>
      </div>
    </div>
  )
}
