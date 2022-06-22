import React from 'react'
import { Link } from 'react-router-dom'
import './electric_scooters.css'
import image1 from '../images/apollo_city.jpeg'
import image2 from '../images/glion_dolly.jpeg'
import image3 from '../images/razer_e100.png'
import image4 from '../images/segway_ninebot_kickstarter_max.webp'
import image5 from '../images/swagtron_swagger_5_elite.jpeg'
import image6 from '../images/unagi_model_one.jpeg'
import ApolloCity from './apollo-city'

const title1 = "Apollo City", title2 = "Glion Dolly", title3 = "Razor e100",
title4 = "Segway Ninebot Kickstarter Max", title5 = "Swagtron Swagger 5 Elite", title6 = "Unagi Model One";

const electric_scooters = () => {
  return (
    
        <div className="container electricScooters_container">
    
        
        
          
          
          
        <Link to="/SeeElectronics/electricscooters/apollo_city">
        <div className="scooter">
          <div className="scooter_image">
            <img src={image1} alt={title1} />
          </div>
          <div className="scooter_title">
            {title1}
          </div>
        </div>
        </Link>
        
        
        
      
      
      
        <div className="scooter">
          <div className="scooter_image">
            <img src={image2} alt={title2} />
          </div>
          <div className="scooter_title">
            {title2}
          </div>
          <button className='buy-button snipcart-add-item'
            data-item-id="2"
            data-item-image={image2}
            data-item-name={title2}
            data-item-price="69.99"

          >
            Add
            </button>
        </div>
      

      
        <div className="scooter">
          <div className="scooter_image">
            <img src={image3} alt={title3} />
          </div>
          <div className="scooter_title">
            {title3}
          </div>
        </div>
      

      
        <div className="scooter">
          <div className="scooter_image">
            <img src={image4} alt={title4} />
          </div>
          <div className="scooter_title">
            {title4}
          </div>
        </div>
      

      
        <div className="scooter">
          <div className="scooter_image">
            <img src={image5} alt={title5} />
          </div>
          <div className="scooter_title">
            {title5}
          </div>
        </div>
      

      
        <div className="scooter">
          <div className="scooter_image">
            <img src={image6} alt={title6} />
          </div>
          <div className="scooter_title">
            {title6}
          </div>
        </div>
      

      
  
  </div>
    
  )
}

export default electric_scooters