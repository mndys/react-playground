import Header from './components/Header'
import Card from './components/Card'
import ReactDOM from 'react-dom'
import React from 'react'

export default function App() {
  ReactDOM.render(
    <>
      <Header title="Hello world" />
      <Card question="?" answer="!" />
    </>,
    document.querySelector('#root')
  )
}
