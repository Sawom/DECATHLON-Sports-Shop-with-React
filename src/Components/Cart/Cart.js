import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    const tax = total*.02;
    const delivery = total*.04;
    const grand = total+tax+delivery; 
    return (
        <div>
            <h3 className='textColor' > <u>Order Summary:</u> </h3>
            <h4>Total product: {props.cart.length} </h4>
            <h4>Product price: {total} Taka </h4>
            <h4>Tax (2%): {tax} Taka </h4>
            <h4> Delivery charge (4%) : {delivery} Taka </h4>
            <h4> Grand Total : {grand} Taka </h4>
        </div>
    );
};

export default Cart;