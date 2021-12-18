import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from '../pages/HomePage'

export default function AllRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" component={HomePage}></Route>
        </Routes>
      </Router>
    </>
  )

}