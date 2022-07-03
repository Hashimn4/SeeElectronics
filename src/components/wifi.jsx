import React from 'react'
import image1 from '../images/Asus-AC1200-Dual-Band-WiFi-Router.webp'
import image2 from '../images/TP-Link - Wireless-AX1500-Dual-Band-Wi-Fi 6-Router.webp'
import image3 from '../images/Netgear-AC1200-Dual-Band-WiFi-Router.webp'
import image4 from '../images/Arris-SURFboard-SB6190-Docsis-3.0-Cable-Modem.webp'
import image5 from '../images/Motorola-MB7621-24x8-Cable-Modem .webp'
import image6 from '../images/NETGEAR - 32-x-8-DOCSIS-3.1-Cable-Modem.webp'
import Card from './card'
import './wifi.css'

const wifi = () => {
  return (
    <div className='container wifi_container'>
        <Card pic={image1} title="Asus AC1200 Dual Band WiFi Router" price="$59.99"/>
        <Card pic={image2} title="TP-Link Wireless Ax1500 Dual Band WiFi 6 Router" price="$69.99"/>
        <Card pic={image3} title="Netgear AC1200 Dual Band WiFi Router" price="$79.99"/>
        <Card pic={image4} title="Arris SURFboard SB6190 Docsis 3.0 Cable Modem" price="$149.99"/>
        <Card pic={image5} title="Motorola MB7621 24x8 Cable Modem" price="$99.99"/>
        <Card pic={image6} title="Netgear 32x8 Docsis 3.1 Cable Modem" price="$129.99"/>
    </div>
  )
}

export default wifi