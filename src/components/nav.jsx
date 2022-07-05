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
            <ul className='adjacent_ul'>
              <li className='home_li'><NavLink className="menu_link" to="/SeeElectronics">Home</NavLink></li>
              <input type="checkbox" id='checkbox2' name='checkbox2'/>
              <li className='categories_li'><label htmlFor='checkbox2'><p>Categories</p></label>
                <ul className='mobile_categories'>
                  <li><NavLink className="mobile_link" to="/SeeElectronics/electricscooters">Electric Scooters</NavLink></li>
                  <li><NavLink className="mobile_link" to="/SeeElectronics/gaming">Gaming</NavLink></li>
                  <li><NavLink className="mobile_link" to="/SeeElectronics/laptops">Laptops</NavLink></li>
                  <li><NavLink className="mobile_link" to="/SeeElectronics/smartwatches">Smart Watches</NavLink></li>
                  <li><NavLink className="mobile_link" to="/SeeElectronics/tv">TV</NavLink></li>
                  <li><NavLink className="mobile_link" to="/SeeElectronics/wifi">WifI</NavLink></li>
                </ul>
              </li>
              
              <li><NavLink className= "menu_link" to="/contact">Contact</NavLink></li>
            </ul>
          </div>
          <div className='nav_title'>
          <NavLink className="navlink_title" to="/SeeElectronics">
                SeeElectronics
            </NavLink>
          </div>
          <div className="links">
            <div className='contact'>
              <NavLink className="contact_link" to="/contact">
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