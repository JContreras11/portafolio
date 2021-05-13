import React, { useEffect, useRef } from 'react';
import { Grid, Header, Label } from "semantic-ui-react"
import { Writing } from './writing';


export const MessagesArea = ({messages, writing=false}) => {

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

    return (
      <div className="messages-area">
        {!!messages.length ? (
          messages.map(({ from, message, pre, link }, key) => {
            if (!!pre) {
              return (
                <React.Fragment key={`chat_${from}_${key}`}>
                  <pre className={`chat-box ${from == "user" ? "user" : ""}`}>
                    {message}
                  </pre>
                  {link && (
                    <Label color={"green"} as="a" href={link} target="_blank">
                      link to whatsapp
                    </Label>
                  )}
                </React.Fragment>
              )
            } else {
              return (
                <p
                  key={`chat_${from}_${key}`}
                  className={`chat-box ${from == "user" ? "user" : ""}`}
                >
                  {message}
                </p>
              )
            }
          })
        ) : (
          <Header
            as="h4"
            color="grey"
            content="Say Hi to talk with Isus Bot 🤖"
            textAlign="center"
          />
        )}
        {!!writing && (
          <p className="chat-box">
            <Writing />
          </p>
        )}
        <div ref={messagesEndRef} />
      </div>
    )
};