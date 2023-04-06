import React from 'react'
import "./App.css"
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/page/HomePage";
const ReduxApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact={true} element={<HomePage/>}/>
      </Routes>
    </>
  )
}

export default ReduxApp
