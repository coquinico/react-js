import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"

const ItemDetail = ({ name, img, description,category, price, stock }) => {
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
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
            </footer>
        </article>
    )
}

export default ItemDetail