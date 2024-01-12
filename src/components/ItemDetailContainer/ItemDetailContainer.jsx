import { useState, useEffect } from 'react';
import { getProductsById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import "./ItemDetailContainer.css"
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const { productId } = useParams()
 

    useEffect(() => {
        
        getProductsById(productId)
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    if(!product) {
        return <h1>Producto Inexistente</h1>
    }

    return (
        <div>
            <h1>Detalle</h1>
            <ItemDetail {...product} />
        </div>
    );
};

export default ItemDetailContainer;
