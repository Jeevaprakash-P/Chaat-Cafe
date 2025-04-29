import React from 'react'
import { Link } from "react-router-dom"
const Navber = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light h6  text-center p-4 ">
      <div className="container-fluid row">
        <h6 className="  h5 col-6 col-lg-5 " href="#">CHAAT CAFE</h6>
        <button className="navbar-toggler col-3 col-md-1 bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse col-lg-8 row" id="navbarSupportedContent"  >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 row row-cols-5">
            <li className="nav-item"id='HomeButton'>
              <Link to="" className='nav-link'  >Home</Link>
            </li>
            <li className="nav-item dropdown">
          <p className="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </p>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to= "/starters" className='dropdown-item' >Starters</Link></li>
            <li><Link to= "/pizza" className='dropdown-item' >Pizza</Link></li>
            <li><Link to= "/burger" className='dropdown-item' >Burger</Link></li>
            <li><Link to= "/sandwhich" className='dropdown-item' >Sandwich</Link></li>
            <li><Link to= "/momos" className='dropdown-item' >Momos</Link></li>
            <li><Link to= "" className='dropdown-item' >Pasta</Link></li>
            <li><Link to= "" className='dropdown-item' >Drinks</Link></li>
          </ul>
        </li>
            <li className="nav-item">
              <Link to="Form" className='nav-link'>Login</Link>
            </li>
            <li className='nav-items'>
              <Link to="whislist" className='nav-link'>Whislist</Link>
            </li>
          </ul>

        </div>
      </div>

    </nav>
  )
}

export default Navber