import React from 'react'
import { Link } from 'react-router-dom'
import './electric_scooters.css'
import image1 from '../images/apollo_city.jpeg'
import image2 from '../images/glion_dolly.jpeg'
import image3 from '../images/razer_e100.png'
import image4 from '../images/segway_ninebot_kickstarter_max.webp'
import image5 from '../images/swagtron_swagger_5_elite.jpeg'
import image6 from '../images/unagi_model_one.jpeg'
import Card from './card'


const electric_scooters = () => {
  return (
    
        <div className="container electricScooters_container">
    
          <Link to="/SeeElectronics/electricscooters/apollocity"><Card pic={image1} title = "Apollo City" price = "$949.99"/></Link>
          <Card pic={image2} title = "Glion Dolly" price = "$599.99"/>
          <Card pic={image3} title = "Razor e100" price = "$299.99"/>
          <Card pic={image4} title = "Segway Ninebot Kickstarter Max" price = "$999.99"/>
          <Card pic={image5} title = "Swagtron Swagger 5 Elite" price = "$399.99"/>
          <Card pic={image6} title = "Unagi Model One" price = "$499.99"/>
        
          
          
          
        
        

      
  
  </div>
    
  )
}

export default electric_scooters