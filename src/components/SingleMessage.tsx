import React from "react"
import { Message } from "../types/Trades"
import User from "../types/User"

interface SingleMessageProps {
  message: Message;
  buyer: User
}

export const SingleMessage = ({ message, buyer }: SingleMessageProps) => {
  return (
    <div className="paddingTop20">
      <div className={buyer.id === message.speakerId ? "rowNoFillFlexEnd" : "rowNoFillFlexStart"}>
        <div className={buyer.id === message.speakerId ? "" : "biggerGrayDot"} />
        <div className={buyer.id === message.speakerId ? "paddingRight25" : "paddingLeft25"}>
          {message.message}
        </div>
        <div className={buyer.id === message.speakerId ? "biggerGrayDot" : ""} />
      </div>
    </div>
  )
}
