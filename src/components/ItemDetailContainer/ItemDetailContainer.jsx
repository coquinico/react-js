import { useState, useEffect } from 'react';
/* import { getProductsById } from '../../asyncMock'; */
import ItemDetail from '../ItemDetail/ItemDetail';
import "./ItemDetailContainer.css"
import { useParams } from 'react-router-dom';
import { useNotification } from '../../notification/NotificationService';
import { db } from '../../services/firebase/firebaseConfig';
import { getDoc, doc, QueryDocumentSnapshot } from 'firebase/firestore';
const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const { productId } = useParams()


    useEffect(() => {

        
       const productDocument = doc( db, 'products', productId)
        getDoc(productDocument)
        .then(queryDocumentSnapshot => {
            console.log(queryDocumentSnapshot)
            const fields = queryDocumentSnapshot.data()
            const productAdapted = { id: queryDocumentSnapshot.id, ...fields}
            setProduct(productAdapted)
        })
    }, [productId])
/*         getProductsById(productId)
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, []); */

    if(!product) {
        return <h1>Producto Inexistente</h1>
    }

    return (
        <div>
            <h1>Detalle</h1>
            <ItemDetail {...product}  />
        </div>
    );
};

export default ItemDetailContainer;
