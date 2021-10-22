import React from 'react';
import { Header } from '../components';
import styled from 'styled-components';
import colors from '../constants/colors';
import Button from '../components/Button';
import {Link} from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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

const LoginLink = styled(Link)`
    color: ${colors.cyan};
    font-weight: 600;
    text-decoration: none;
`;

const Register = () => {
  return (
    <Container>
      <Header></Header>
      <LoginForm>
        <Title>Faça seu cadastro</Title>
        <Description>Preencha os campos abaixo</Description>
        <Label>Email</Label>
        <Input placeholder="Digite seu email..."></Input>
        <Label>Senha</Label>
        <Input placeholder="Digite sua senha..." type="password" />
        <Button color={colors.blue}>Cadastrar</Button>
        <p>Já possui conta?</p>
        <LoginLink to="/login">Entre</LoginLink>
      </LoginForm>
    </Container>
  );
};

export default Register;
