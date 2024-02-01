/* import cartImage from "./assets/cart.png";
import { useCart } from '../../context/cartcontext';

const CartWidget = () => {



    return (
        <div>
            <img src={cartImage} alt="Cart" />
            {0}
        </div>
    );
}

export default CartWidget;
 */


import React from 'react';
import { Link } from 'react-router-dom';
import cartImage from "./assets/cart.png";
import { useCart } from '../../context/cartcontext';

const CartWidget = () => {
    const { totalQuantity } = useCart();

    const numberStyle = {
        color: 'white'
    };

    return (
        <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div>
                <img src={cartImage} alt="Cart" />
                <span style={numberStyle}>{totalQuantity}</span>
            </div>
        </Link>
    );
}

export default CartWidget;
