import { useState } from "react";
import { collection, addDoc, writeBatch, query, where, getDocs, documentId } from "firebase/firestore";
import { useCart } from "../../context/cartcontext";
import OrderForm from '../Orderform/OrderForm'; 
import { db } from "../../services/firebase/firebaseConfig";
import { useNotification } from "../../notification/NotificationService";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const { cart, total, clearCart } = useCart();
  const { showNotification } = useNotification();

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);
    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email
        },
        items: cart,
        total: total,
      };

      const batch = writeBatch(db);
      const outOfStock = [];

      const ids = cart.map((prod) => prod.id);
      const productsCollection = query(collection(db, "products"), where(documentId(), "in", ids));

      const querySnapshot = await getDocs(productsCollection);
      const { docs } = querySnapshot;

      docs.forEach((doc) => {
        const fields = doc.data();
        const stockDb = fields.stock;

        const productsAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productsAddedToCart.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...fields });
        }
      });

      if (outOfStock.length === 0) {
        batch.commit();

        const orderCollection = collection(db, "orders");
        const { id } = await addDoc(orderCollection, objOrder);

        setOrderId(id);

        clearCart();
      } else {
        showNotification("error", "Hay productos que no tienen stock disponible");
      }
    } catch (error) {
      showNotification("error", "Hubo un error al crear la orden");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Se esta generando su orden, aguarde por favor...</h1>;
  }

  if (orderId) {
    return <h1>El id de su compra es: {orderId}</h1>;
  }

  return (
    <>
      <h1>CHECKOUT</h1>
      <OrderForm onConfirm={createOrder} />
     
    </>
  );
};

export default Checkout;
