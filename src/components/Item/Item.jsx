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
  const cardStyle = {
    background: 'rgba(239, 239, 239, 0.25)',
    boxShadow: '0 8px 32px 0 rgba(135, 31, 31, 0.37)',
    backdropFilter: 'blur(4px)',
    WebkitBackdropFilter: 'blur(4px)',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.18)',
  };


  return (
    <div className="col-lg-3 col-md-6 mb-3 mt-3 mx-auto">
      <div className="card custom-card" style={cardStyle}>
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
