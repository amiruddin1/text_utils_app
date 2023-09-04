import React, { useState } from 'react'
import { BrowserRouter, Link } from 'react-router-dom';

export default function Navbar(props) {
    const [Theme, SetTheme] = useState("light");

    const changeTheme = () => {
        if(Theme==="light"){
            SetTheme("dark")
        }
        else{
            SetTheme("light")
        } 
    }
  return (
    <nav className={`navbar navbar-expand-lg bg-${Theme} navbar-${Theme==="light"?"light":"dark"} text-${Theme==="light"?"dark":"light"}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link to='/home' className='nav-link'>Home</Link>  
              </li>
              <li className="nav-item">
                <Link to='/about' className='nav-link'>About Us</Link>   
              </li>
            </ul>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" onClick={changeTheme}/>
            <label className="form-check-label">{Theme==="dark"?"Dark":"Light"} Mode</label>
          </div>
        </div>
      </nav>
  )
}
