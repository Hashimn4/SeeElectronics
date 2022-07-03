import React from 'react'
import { ReactDOM } from 'react-dom'
import { NavLink } from 'react-router-dom'
import '../components/nav.css'
import {BsCart} from 'react-icons/bs' 
import {GiHamburgerMenu} from 'react-icons/gi'

const nav = () => {
  return (
    <>
        <nav>
          <input type="checkbox" id="check-box" name='check-box'/>
          <label htmlFor="check-box" id='hamburger-icon'><GiHamburgerMenu /></label>
          <div className='mobile-menu'>
            <ul>
              <li><NavLink className="s" to="/SeeElectronics">Home</NavLink></li>
              <li><NavLink className="s" to="/SeeElectronics">Categories</NavLink></li>
              <li ><NavLink className= "s" to="/contact">Contact</NavLink></li>
            </ul>
          </div>
          <div className='title'>
          <NavLink to="/SeeElectronics">
                SeeElectronics
            </NavLink>
          </div>
          <div className="links">
            <div className='contact'>
              <NavLink to="/contact">
                Contact
              </NavLink>
            </div>
            
           
            <button className='cart snipcart-checkout'><BsCart />
            <span className="snipcart-items-count">0</span>
            </button>
            
            
          </div>
          
          
           
        </nav>

        
        
    </>
  )
}

export default nav