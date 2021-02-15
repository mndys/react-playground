import Card from './Card'
import React from 'react'

export default {
  title: 'Card',
  component: Card,
}

export const withoutAnswer = () => <Card question="?" answer="!" />
export const withAnswer = () => <Card question="?" answer="!" showAnswer />
