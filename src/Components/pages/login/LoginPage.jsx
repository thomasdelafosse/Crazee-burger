import LoginForm from './LoginForm';
import styled from 'styled-components';
import Logo from '../../reusable-ui/Logo';


export default function LoginPage() {
  return (
  <LoginPageStyled>
    <Logo />
    <LoginForm />
  </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url("images/burger-background.jpg");
  background-size: cover;
  background-position: center;
  background-blend-mode: darken;
`