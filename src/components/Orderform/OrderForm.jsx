import { useState } from 'react';
import "../Orderform/OrderForm.css"

const OrderForm = ({ onConfirm }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      name,
      phone,
      email,
    };

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
