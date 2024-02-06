  

  import React from 'react'
import { Link } from 'react-router-dom'
import style from'./Navbar.module.css'
  
  
  export default function Navbar() {
    return <>
    
    <nav className={` ${style.color} ${style.text} navbar navbar-expand-lg p-4`} >
  <div className="container">
    <Link className="navbar-brand" to={'/'}>START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 ms-auto ">
        <li className="nav-item ">
          <Link className="nav-link active" aria-current="page" to={'About'}>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'Portfolio'}>Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'CONTACT'}>CONTACT</Link>
        </li>
      
      </ul>
     
    </div>
  </div>
</nav>

    </>
     
    
    }
  