import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button.style';

const Container = styled.div`
  --margin: 2rem;
  --padding: var(--margin);
  width: 100%;
  height: 100%;
  transition: background 0.3s ease;
  background: ${(props) => props.theme.dark};
  position: relative;
`;

const BackButtonContainer = styled.div`
  position: absolute;
  left: var(--margin);
  top: calc(var(--margin) * 2);
`;
const Form = styled.form`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 80%;
  background: ${(props) => props.theme.dark};
  padding: var(--margin) var(--margin);
  background: transparent;
`;
const Header = styled.h2`
  color: ${(props) => props.theme.light};
  font-size: 4vh;
`;
const FormElement = styled.div``;
const Input = styled.input.attrs((props: { autocomplete: string }) => ({
  autocomplete: props.autocomplete,
}))`
  width: 100%;
  height: 5vh;
  border: ${(props) => `1px solid ${props.theme.light}`};
  background: ${(props) => props.theme.dark};
  margin-bottom: 1rem;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    background-color: ${(props) => props.theme.dark} !important;
  }
`;
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
    <>
      <Container>
        <BackButtonContainer>
          <Button
            background={'light'}
            padding={[1.2, 1.2]}
            color={'dark'}
            borderRadius="50%"
          ></Button>
        </BackButtonContainer>
        <Form onSubmit={loginHandler}>
          <Header>Log In into your account</Header>
          <FormElement>
            <Input
              type="email"
              data-lpignore="true"
              placeholder="Email"
            ></Input>
          </FormElement>
          <FormElement>
            <Input
              type="password"
              data-lpignore="true"
              placeholder="Password"
              autocomplete="off"
            ></Input>
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
    </>
  );
};

export default Login;
