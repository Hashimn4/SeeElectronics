import React from 'react'
import './laptops.css'
import image1 from '../images/hp-pavilion-x360.jpeg'
import image2 from '../images/acer-swift-3-amd.jpeg'
import image3 from '../images/apple-m1-air.jpeg'
import image4 from '../images/dell-inspiron-2in1.jpeg'
import image5 from '../images/lenovo-thinkpad-t14s-gen2.webp'
import image6 from '../images/microsoft-surface-laptop-go.jpeg'
import Card from './card'

const laptops = () => {
  return (
    <div className='container laptops_container'>
        <Card pic={image1} title="HP Pavilion x360" price="$829.99"/>
        <Card pic={image2} title="Acer Swift 3 AMD" price="$699.99"/>
        <Card pic={image3} title="Macbook Air M1" price="$999.99"/>
        <Card pic={image4} title="Dell Inspiron 2-in-1" price="$649.99"/>
        <Card pic={image5} title="Lenovo ThinkPad t14s Gen2" price="$1444.50"/>
        <Card pic={image6} title="Microsoft Surface Laptop Go" price="$899.99"/>
    </div>
  )
}

export default laptops