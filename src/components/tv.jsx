import React from 'react'
import './tv.css'
import image1 from '../images/insignia-40-n10-series.jpeg'
import image2 from '../images/lg-55-4k-uhd.jpeg'
import image3 from '../images/Samsung-Neo-QN85B-65-4K-QLED.webp'
import image4 from '../images/sony-43-x85j.jpeg'
import image5 from '../images/TCL-40-3-Series-FHD-LED.webp'
import image6 from '../images/Vizio-M65Q6-J09-M-Series-Quantum-65-4K-HDR.jpeg'
import Card from './card'

const tv = () => {
  return (
    <div className='container tv_container'>
        <Card pic={image1} title='Insignia 40" n10 Series' price="$140.99"/>
        <Card pic={image2} title='LG 55" 4K UHD' price="$1099.99"/>
        <Card pic={image3} title='Samsung Neo 65" 4K OLED' price="$1799.99"/>
        <Card pic={image4} title='Sony 43"' price="$999.99"/>
        <Card pic={image5} title='TCL 40" 3 Series FHD LED' price="$289.99"/>
        <Card pic={image6} title='Vizio 65" M Series Quantum 4K HDR' price="499.99"/>
    </div>
  )
}

export default tv;