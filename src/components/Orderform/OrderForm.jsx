import { useState } from 'react';
import "../Orderform/OrderForm.css";
import { useNotification } from '../../notification/NotificationService';

const OrderForm = ({ onConfirm }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const { showNotification } = useNotification();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim() || !phone.trim() || !email.trim()) {
      
      showNotification('error', 'Por favor, completa todos los campos del formulario.');
      return;
    }

    const userData = {
      name,
      phone,
      email,
    };

    
    setName('');
    setPhone('');
    setEmail('');

    
    showNotification('success', 'Formulario enviado correctamente.');

    
    onConfirm(userData);
  };

  return (
    <div className='Container'>
      <form onSubmit={handleSubmit} className='Form'>
        <label className='Label'>
          Name:
          <input className='Input' type="text" value={name} onChange={({ target }) => setName(target.value)} />
        </label>
        <br />
        <label className='Label'>
          Phone:
          <input className='Input' type="text" value={phone} onChange={({ target }) => setPhone(target.value)} />
        </label>
        <br />
        <label className='Label'>
          E-mail:
          <input className='Input' type="email" value={email} onChange={({ target }) => setEmail(target.value)} />
        </label>
        <br />
        <button className='custom-btn' type="submit">Generar orden</button>
      </form>
    </div>
  );
};

export default OrderForm;
