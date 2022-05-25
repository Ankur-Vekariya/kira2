import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
      <header>
        
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarExample01"
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarExample01">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item active">
                 <Link to="/Home"> <a class="nav-link" aria-current="page" >Home</a></Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Profiles</a>
                </li>
                <li class="nav-item">
                  <Link to="/Contact"><a class="nav-link" >Contact Us</a></Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        

        
        <div class="p-5 text-center bg-light">
          <h1 class="mb-3">Kira intrilogy</h1>
          
          <a class="btn btn-primary" href="" role="button">Call to action</a>
        </div>
        
      </header>
    </div>
  )
}

