import { useState, useEffect } from 'react';
import './ItemListContainer.css';
import { getProducts, getProductsByCategory } from '../../asyncMock.jsx';
import ItemList from '../ItemList/ItemList.jsx';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunction = categoryId ? getProductsByCategory : getProducts;

    asyncFunction(categoryId)
      .then(response => {
        setProducts(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, [categoryId]);

  console.log(products);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
