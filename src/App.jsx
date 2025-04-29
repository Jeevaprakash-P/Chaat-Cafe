import React from 'react'
import { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Navber"
import Home from './Home'
import Straters from './Straters'
import NewItems from './NewItems'
import Pizza from './Pizza'
import Whislist from './Whislist'
import Burger from './Burger'
import Sandwich from './SandWhich'
import Momos from './Momos'
import Login from './Login'
import Sign from './Sign'
import Form from './Form'
import Footer from './Fooder'



const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/starters' element={<Straters />} />
          <Route path='/pizza' element={<Pizza />} />
          <Route path='/whislist' element={<Whislist />} />
          <Route path='/burger' element={<Burger />} />
          <Route path='/sandwhich' element={<Sandwich />} />
          <Route path='/momos' element={<Momos />} />
          <Route path='/NewItems' element={<NewItems />} />
          <Route path='/Form' element={<Form />}>
            <Route index element={<Login />} />
            <Route path="sign" element={<Sign />} />
          </Route>
        </Routes>
        {/* <Footer/> */}
      </Router>
    </Fragment>
  )
}

export default App
