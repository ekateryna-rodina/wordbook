import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('');
  background-color: ${(props) => props.theme.dark};
`;
const Form = styled.form`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 70vh;
  background: ${(props) => props.theme.white};
  border-radius: 3rem 3rem 0 0;
  padding: 2rem 1rem;
  color: ${(props) => props.theme.dark};
`;
const Header = styled.h2``;
const FormElement = styled.div``;
const Input = styled.input``;
const Sub = styled.sub``;
const Paragraph = styled.p``;
const Border = styled.span``;
const SocialLoginLabel = styled.span``;
const SocialLinksContainer = styled.div``;
const RoundedButton = styled.button``;
const ActionButton = styled.button``;
const Login = () => {
  const loginHandler = () => {
    console.log('login');
  };
  return (
    <Container>
      <Form onSubmit={loginHandler}>
        <Header>Log-in</Header>
        <FormElement>
          <Input type="email" placeholder="Email"></Input>
        </FormElement>
        <FormElement>
          <Input type="password" placeholder="Password"></Input>
          <Sub>
            <Link to="/forgetPassword"></Link>
          </Sub>
        </FormElement>
        <ActionButton type="submit" />
        <Paragraph>
          Don't have an account? <Link to="/register">Sign-up</Link>
        </Paragraph>
        <Border />
        <SocialLoginLabel>or login with</SocialLoginLabel>
        <SocialLinksContainer>
          <RoundedButton>G</RoundedButton>
          <RoundedButton>T</RoundedButton>
        </SocialLinksContainer>
      </Form>
    </Container>
  );
};

export default Login;
