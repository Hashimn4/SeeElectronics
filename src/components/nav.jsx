import React from 'react'
import { ReactDOM } from 'react-dom'
import { NavLink } from 'react-router-dom'
import '../components/nav.css'

const nav = () => {
  return (
    <>
        <nav>
            <NavLink to="/SeeElectronics">
                SeeElectronics
            </NavLink>
            <NavLink to="/contact">
                Contact
            </NavLink>

            <button className='snipcart-checkout'>Cart
            <span className='snipcart-total-price'>$0.00</span>
            <span class="snipcart-items-count">0</span></button>
        </nav>
    </>
  )
}

export default nav