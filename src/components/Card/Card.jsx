import './Card.css'
import React from 'react'

export default function Card({ question, answer }) {
  return (
    <Card className="Card">
      <h2 className="CardQuestion">{question}</h2>
      <p className="CardAnswer">{answer}</p>
    </Card>
  )
}
