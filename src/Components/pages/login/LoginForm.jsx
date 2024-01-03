import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import TextInput from '../../reusable-ui/TextInput';
import PrimaryButton from './PrimaryButton';

export default function LoginForm() {
      const [InputValue, setInputValue] = useState('');
      const navigate = useNavigate()

      const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`order/${InputValue}`)
        setInputValue('');
      }
      
      const handleChange = (event) => {
        setInputValue(event.target.value);
      }
      
  return (
    <LoginFormStyled action ="submit" onSubmit={handleSubmit}>
      <div>
        <h1>Bienvenue chez nous !</h1>
        <hr />
        <h2>Connectez-vous</h2>
      </div>
      <div>
        <TextInput
          value={InputValue}
          onChange={handleChange}
          type="text"
          placeholder ="Entrez votre prénom"
          required
          Icon={<BsPersonCircle className="icon"/>}
        />
        <PrimaryButton 
          label={"Accéder à mon espace"}
          Icon={<IoChevronForward className="icon"/>}
        />
      </div> 
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid #f56a2c;
    margin-bottom: 40px;
  } 

  h1 {
    color : white;
    font-size: 48px;
  }

  h2 {
    color: #8e8b8b;
    margin: 20px 10px 10px;
    color: white;
    font-size: 36px;
  }
  .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      margin-left: 10px;
      }
`

  