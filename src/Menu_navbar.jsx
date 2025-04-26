import React from 'react'
import { Link } from 'react-router-dom'

const Menu_navbar = () => {
  return (
  <ul className='menu-navber'>
    <li><Link to = "/starters" >Starters</Link></li>
    <li><Link to = "/pizza" >Pizza</Link></li>
    <li><Link to = "/burger" >Burger</Link></li>
    <li><Link to = "/sandwhich" >Sandwhich</Link></li>
    <li><Link to = "/momos" >Momos</Link></li>
    <li><Link to = "" >Paste</Link></li>
    <li><Link to = "" >Drinks</Link></li>
  </ul>
  )
}

export default Menu_navbar