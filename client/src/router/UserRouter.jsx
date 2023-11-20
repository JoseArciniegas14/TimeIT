// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Routes, Route} from "react-router-dom"
import { UserHome } from "../pages/web"
import { UserLayout } from '../layouts'


export function UserRouter() {

  const loadLayout = (Layout, Page)=>{
    return(
      <Layout>
        <Page/>
      </Layout>
    )
  }
  return (
    <Routes>
      <Route path="/" element={loadLayout (UserLayout, UserHome)}/>
    </Routes>
  )
}

 