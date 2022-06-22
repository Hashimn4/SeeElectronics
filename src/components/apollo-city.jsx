import React from 'react'
import image1 from '../images/apollo_city.jpeg'
const title1 = "Apollo City";
const apollo_city = () => {
  return (
    <>
    <div className="scooter_image">
            <img src={image1} alt={title1} />
          </div>
          <div className="scooter_title">
            {title1}
          </div>

          <button className='buy-button snipcart-add-item'
            data-item-id="1"
            data-item-image={image1}
            data-item-name={title1}
            data-item-price="79.99"
            data-item-url="/SeeElectonicsEcommerce/electricscooters/apollo_city"
          >
            Add
            </button>
    </>
    
  )
}

export default apollo_city