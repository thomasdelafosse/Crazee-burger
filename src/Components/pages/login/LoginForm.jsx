import React, { useState } from 'react'
import OrderPage from '../order/OrderPage';

export default function LoginForm() {
      // state
      const [prenom, setPrenom] = useState('');
     
      // comportements
      const handleSubmit = (event) => {
        event.preventDefault();
        setPrenom('');
      }
      
      const handleClick = (event) => {
        <OrderPage />
      }
      const handleChange = (event) => {
        setPrenom(event.target.value);
      }
      
      // render
  return (
    <>
        <form action ="submit" onSubmit={handleSubmit}>
          <h1>Bienvenue chez nous !</h1>
          <br />
          <h2>Connectez vous</h2>
            <input
              type="text" 
              placeholder ="Entrez votre prénom... "
              required
              value={prenom}
              onChange={handleChange}
            ></input>
          <button onClick={handleClick}>Accéder à votre espace</button>
        </form>
      </>
  )
}
