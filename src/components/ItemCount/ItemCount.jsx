
import { useState } from "react"
import '../ItemCount/ItemCount.css'
const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }
    const decrement = () =>{
        if (quantity>1) {
            setQuantity(quantity-1)
        }
    }
    return(
        <div className="item-count-container">
        <div className="item-count-controls">
                <button className="custom-btn" onClick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className="custom-btn" onClick={increment}>+</button>
            </div>
            <div>
               <button className="custom-btn" onClick={() => onAdd(quantity)} disabled={!stock}> Agregar al Carrito</button>  
            </div>
        </div>
    )
}
 export default ItemCount