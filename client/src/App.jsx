// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { UserRouter } from "./router"

export default function App() {

  return (
    <BrowserRouter>
    <UserRouter/>
    </BrowserRouter>
  )
}

