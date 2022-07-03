import React from 'react'
import './smartwatches.css'
import image1 from '../images/fossil-gen-6.jpeg'
import image2 from '../images/Mobvoi-TicWatch-Pro-3-Ultra.webp'
import image3 from '../images/samsung-galaxy-watch-4.webp'
import image4 from '../images/Skagen-Falster-Gen-6.webp'
import image5 from '../images/tag-heuer-calibre-e4.jpeg'
import image6 from '../images/apple-watch-series-7.jpg'
import Card from './card'

const smartwatches = () => {
  return (
    <div className='container smartWatches_container'>
        <Card pic={image1} title="Fossil Gen 6" price="$299.99"/>
        <Card pic={image2} title="Mobvoi TicWatch Pro 3 Ultra" price="$245.99"/>
        <Card pic={image3} title="Samsung Galaxy Watch4" price="$219.99"/>
        <Card pic={image4} title="Skagen Falster Gen 6" price="$295.00"/>
        <Card pic={image5} title="Tag Heuer Connected Calibre e4" price="$1900.00"/>
        <Card pic={image6} title="Apple Watch Series 7" price="$699.99"/>
    </div>
  )
}

export default smartwatches