import React, { useState } from 'react'
import LoginPage from '../Login/LoginPage';

export default function OrderPage() {
  const [prenom, setPrenom] = useState('');

  const deconnexion = (event) => {
    <LoginPage />
  }
  return (
    <div>
      
        <h1>Bonjour {prenom}</h1>
        <button onClick={deconnexion}>déconnexion</button>
    </div>
  )
}
