import React, {useState, useContext} from 'react';
import { Header } from '../components';
import styled from 'styled-components';
import colors from '../constants/colors';
import Button from '../components/Button';
import {Link, useHistory} from 'react-router-dom';
import StoreContext from '../Providers/store/Context';

import Data from '../data/date';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 25px;
  align-items: center;
  height: 85vh;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.h1`
  color: ${colors.black};
  margin: 0px;
`;

const Description = styled.p`
  color: ${colors.black};
  text-align: center;
`;

const Input = styled.input`
  padding: 15px 25px;
  border-radius: 25px;
  background: ${colors.grey};
  border: none;
  width: 300px;
`;

const Label = styled.span`
  font-weight: 600;
  margin: 10px 15px;
  text-align: left;
`;

const RegisterLink = styled(Link)`
    color: ${colors.cyan};
    font-weight: 600;
    text-decoration: none;
`;



const seeArray = (value, email, pass)=>{
  return (value.email === email && value.senha == pass)
}


const inicializar = () =>{
  return {email: '', pass: ''}
}

const checkLogin = ({email, pass}) =>{
  const usuarioEncontrado = Data.User.filter(load => seeArray(load, email, pass));
  if (usuarioEncontrado.length === 1){
    return {token: usuarioEncontrado}
  }else{
    return { error: "Usuário ou senha inválidos!"}
  }

} 


const Login = () => {

  const[dadosLogin, setDadosLogin] = useState(inicializar);
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();


  const handleSubmit = (event)=>{
    event.preventDefault();

    const {token, error} = checkLogin(dadosLogin);
    
  
    if (token) {
      console.log(token)
      setToken(token);
      return history.push('/');
    }

    setError(error);
    setDadosLogin(inicializar);
  }

  const hadleInputChange = (event) =>{
    const {name, value} = event.target;
    setDadosLogin({
      ...dadosLogin,
      [name]: value
    })

  }
  
  return (
    <Container>
      <Header></Header>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Bem vindo ao ECOPlix</Title>
        <Description>Entre para acessar sua conta</Description>
        <Label>Email</Label>
        <Input
          placeholder="Digite seu email..."
          onChange={hadleInputChange}
          value={dadosLogin.email}
          name="email"
        ></Input>
        <Label>Senha</Label>
        <Input
          placeholder="Digite sua senha..."
          type="password"
          onChange={hadleInputChange}
          value={dadosLogin.pass}
          name="pass"
          />
        <Button color={colors.blue}>Entrar</Button>

        <p>Ainda não tem conta?</p>
        <RegisterLink to="register">Cadastre-se</RegisterLink>

        {error}
      </LoginForm>
    </Container>
  );
};

export default Login;
