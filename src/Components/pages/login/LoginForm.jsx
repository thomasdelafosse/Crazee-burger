import React, { useState } from 'react'
import OrderPage from '../order/OrderPage';
import { Link } from 'react-router-dom';

export default function LoginForm() {
      // state
      const [prenom, setPrenom] = useState('');
     
      // comportements
      const handleSubmit = (event) => {
        event.preventDefault();
        setPrenom('');
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
            <Link to="/order"><button>Accéder à votre espace</button></Link>
        </form>
      </>
  )
}
