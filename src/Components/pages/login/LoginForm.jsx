import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function LoginForm() {
      // state
      const [inputValue, setInputValue] = useState('');
      const navigate = useNavigate()

      // comportements
      const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`order/${inputValue}`)
        setInputValue('');
      }
      
      const handleChange = (event) => {
        setInputValue(event.target.value);
      }
      
      // render
  return (
    <>
        <LoginFormStyled action ="submit" onSubmit={handleSubmit}>
          <div><h1>Bienvenue chez nous !</h1>
          <br />
          <h2>Connectez vous</h2>
          </div>
            <input
              value={inputValue}
              onChange={handleChange}
              type="text"
              placeholder ="Entrez votre prénom... "
              required
            ></input>
            <Link to="/order"></Link>
            <button>Accéder à mon espace </button>
        </LoginFormStyled>
      </>
  )
}

const LoginFormStyled = styled.div`
background: #6060fa;
display: flex;
flex-direction: column;
`;
