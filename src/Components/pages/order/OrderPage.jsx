import React, { useState } from 'react'
import LoginForm from '../login/LoginForm'

export default function OrderPage() {

    const [prenom, setPrenom] = useState('');

    const handleClick = (event) => {
        <LoginForm/>
    }
  return (
    <div>OrderPage
        <h1>Bonjour ${prenom}</h1>
        <button onClick={handleClick}>deconnexion</button>
    </div>
  )
}
