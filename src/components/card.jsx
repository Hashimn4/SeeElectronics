import React from 'react'
import './card.css'

const card = (props) => {
    let id = Math.floor(Math.random() * 10);
  return (
    <>
    {
        <div className="card">
          <div className="card_image">
            <img src={props.pic} alt={props.title} />
          </div>
          <div className="scooter_title">
            {props.title}
          </div>
          <div className="scooter_price">
            {props.price}
          </div>
          <button className='buy-button snipcart-add-item'
            data-item-id= {id}
            data-item-image={props.pic}
            data-item-name={props.title}
            data-item-price={props.price.replace('$', '')}
            data-item-url="/SeeElectronics/electricscooters/apollocity"

          >
            Add to cart
            </button>
        </div>
}
    </>
  )
}

export default card