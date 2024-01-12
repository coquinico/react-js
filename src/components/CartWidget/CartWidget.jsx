import cart from "./assets/cart.png"

const CartWidget = () => {

return(
    <div >
        <img src={cart} alt="cart-widget" />
        
        <span className="cart-count">0</span>
    </div>
)

}

export default CartWidget