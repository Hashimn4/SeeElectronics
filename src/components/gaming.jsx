import React from 'react'
import Card from './card'
import image1 from '../images/Playstation5.webp'
import image2 from '../images/PS4-Pro.webp'
import image3 from '../images/ps4-slim.jpeg'
import image4 from '../images/Xbox-Series-X.jpeg'
import image5 from '../images/xbox-one-s.jpeg'
import image6 from '../images/nintendo-switch-oled.jpeg'
import './gaming.css'

const gaming = () => {
  return (
    <div className='container gaming_container'>
      <Card pic={image1} title = "Playstation 5" price = "$499.99"/>
      <Card pic={image2} title = "Playstation 4 Pro" price = "$399.99"/>
      <Card pic={image3} title = "Playstation 4 Slim" price = "$299.99"/>
      <Card pic={image4} title = "Xbox Series X" price = "$499.99"/>
      <Card pic={image5} title = "Xbox Series S" price = "$299.99"/>
      <Card pic={image6} title = "Nintendo Switch OLED" price = "$349.99"/>
    </div>
  )
}

export default gaming