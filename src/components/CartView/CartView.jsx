import { Link } from "react-router-dom";
import { useCart } from "../../context/cartcontext";
import "../../components/CartView/CartView.css" 

const CartView = () => {
  const { cart, total, removeItem } = useCart();

  return (
    <div className="cart-container">
      <h1>CART</h1>
      <section className="products-container">
        {cart.map((prod) => (
          <div key={prod.id} className="product-item">
            <h3>{prod.name}</h3>
            <h4>Cantidad: {prod.quantity}</h4>
            <h4>Precio por unidad: ${prod.price}</h4>
            <h4>Subtotal: ${prod.quantity * prod.price}</h4>
            <button className="custom-btn" onClick={() => removeItem(prod.id)}>Remover</button>
          </div>
        ))}
      </section>
      <section className="total-container">
        <h1>Total: ${total}</h1>
        <Link  className="custom-btn" to="/checkout">Checkout</Link>
      </section>
    </div>
  );
};

export default CartView;
