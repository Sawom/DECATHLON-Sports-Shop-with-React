import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
const Product = (props) => {
    const{name,img,color,madein,price,stock} = props.product;
    // console.log(props.product)
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='cardStyles' >
            <h3 className='textColor' > {name} </h3>
            <img  src={img} alt="" />
            <h4> Color: {color} </h4>
            <h4>Made in: {madein} </h4>
            <h4>Price: {price} Taka </h4>
            <h4>Only {stock} products remain </h4>
            <button onClick={()=> props.addtocart(props.product) } className='btn'  > {element} add to cart</button>
        </div>
    );
};

export default Product;