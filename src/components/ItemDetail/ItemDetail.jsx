import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"
import {  useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/cartcontext'
import { useNotification } from '../../notification/NotificationService'


const ItemDetail = ({ id,name, img, description,category, price, stock }) => {
    const[quantityAdded, setQuantityAdded] = useState(0)
 

    const { addItem } = useCart()
    const { showNotification } = useNotification()





    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, price, quantity
        }
        addItem(objProductToAdd)
        showNotification('success', `Se agregaron correctamente ${quantity} ${name}`)
        setQuantityAdded(quantity)
    }
    return (

        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
                <img src={img} alt={name} className='ItemImg' />
            <section>
                <p className='Info'>
                    Descripción: {description}
                </p>
                <p className='Info'>
                    Categoria: {category}
                </p>
                <p className='Info'>
                    Precio: {price}
                </p>
                <p className='Info'>
                    Stock: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
            {quantityAdded > 0 ? (
                <Link to='/cart' className='custom-btn'>Terminar Compra</Link>
            ):(
                
                <ItemCount initial={1} stock={stock} onAdd  ={handleOnAdd} />)}
            </footer>
        </article>
    )
}

export default ItemDetail