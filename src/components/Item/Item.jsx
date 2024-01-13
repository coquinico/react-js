import React from 'react';
import { getProductsById } from '../../asyncMock';
import './Item.module.css';
import { Link } from "react-router-dom"
 
const Item = ({ id, name, img, price, stock }) => {
  const handleVerDetalles = async () => {
    try {
      const productDetails = await getProductsById(id);
      console.log('Detalles del producto:', productDetails);
    } catch (error) {
      console.error('Error al obtener detalles del producto:', error);
    }
  };

  return (
    <div className="col-lg-3 col-md-6 my- mx-auto">
      <div className="card custom-card">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Precio: ${price}</p>
          <p className="card-text">Stock Disponible: {stock}</p>
          <Link className="custom-btn" to={`/item/${id}`}  onClick={handleVerDetalles}>
            Ver Detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
