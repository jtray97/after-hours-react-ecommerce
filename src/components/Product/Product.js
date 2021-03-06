import React from 'react'
import './Product.css'

const Product = (props) => {
    let product = {
        id: props.id,
        name: props.name,
        image: props.image,
        price: props.price
    }

    return (
        <div className='product-container'>
            <img src={ props.image } alt={props.name} />
            <h4> {props.name} </h4>
            <h4> {props.price} </h4>
            <button onClick={ () => props.buy(product) }>Buy</button>
        </div>
    )
}

export default Product
