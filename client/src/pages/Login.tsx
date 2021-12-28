import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled, { css, useTheme } from 'styled-components';
import { object, string, TypeOf } from 'zod';
import Icon from '../components/Icon.style';
import { useCreateSessionMutation } from '../services/api';
import { Icons } from '../utils/enums';
import { respondTo } from '../utils/_respondTo';

const buttonStyle = css`
  width: 100%;
  padding: 1rem 0;
  border-radius: 0.2rem;
  border: none;
  outline: none;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: clamp(1rem, 1vh, 2rem);
`;
const Container = styled.div`
  --margin: 2rem;
  --padding: var(--margin);
  width: 100vw;
  height: 100vh;
  transition: background 0.3s ease;
  background: ${(props) => props.theme.colors.white};
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  padding: 3rem 0;
  margin: 0 auto;

  ${respondTo.tablet`
  max-width: 50vw;
  `}
  ${respondTo.laptopAndDesktop`
  max-width: 30vw;
  `}
`;

const Form = styled.form`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 92%;
  background: ${(props) => props.theme.colors.dark};
  padding: var(--margin);
  background: transparent;
`;
const Header = styled.h2`
  color: ${(props) => props.theme.colors.dark};
  font-size: clamp(2rem, 2vh, 3rem);
  padding: 0.5rem 0;
  margin: 0 0 2vh 0;
  box-sizing: border-box;
`;
const FormElement = styled.div``;
const Input = styled.input.attrs((props: { autocomplete: string }) => ({
  autocomplete: props.autocomplete,
}))`
  width: 100%;
  padding: 1rem;
  border: ${(props) => `1px solid ${props.theme.colors.light}`};
  background-color: transparent;
  margin-bottom: 1rem;
  border-radius: 0.2rem;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    border: ${(props) => `1px solid ${props.theme.colors.primary}`};
    -webkit-text-fill-color: ${(props) => props.theme.colors.dark};
    -webkit-box-shadow: ${(props) =>
      `0 0 0px 1000px ${props.theme.colors.white} inset`};
    transition: background-color 0.2s ease-in-out 0s;
    outline: none;
  }

  &:hover,
  &:focus {
    border: ${(props) => `1px solid ${props.theme.colors.primary}`};
    color: ${(props) => props.theme.colors.dark};
    box-shadow: ${(props) =>
      `0 0 0px 1000px  ${props.theme.colors.white} inset`};
    transition: background-color 0.2s ease-in-out 0s;
    outline: none;
  }
  &:focus-visible {
    outline: none;
    box-shadow: ${(props) => `0 0 0 2px ${props.theme.colors.primary} inset`};
  }
`;
const Sub = styled.sub``;
const Paragraph = styled.p`
  position: absolute;
  bottom: 2rem;
  & span {
    color: ${(props) => props.theme.colors.primary};
  }
`;
const ActionButton = styled.input`
  ${buttonStyle};
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
`;
const GoogleButton = styled.button`
  ${buttonStyle};
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primary};
  border: ${(props) => `1px solid ${props.theme.colors.primary}`};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & div {
    margin-right: 0.5rem;
  }
`;
const PrivatePolicyContainer = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Checkbox = styled.input`
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  float: left;
  outline: 0;
  appearance: none;
  background: transparent;
  height: 1.2rem;
  width: 1.2rem;
  border-radius: 3px;
  border: ${(props) => `1px solid ${props.theme.colors.primary}`};
  margin-left: 0;
  &:hover {
    filter: brightness(110%);
  }
  &:checked {
    background: ${(props) => props.theme.colors.primary};
    border: none;
  }
  &:after {
    content: '';
    position: relative;
    left: 35%;
    top: 10%;
    width: 30%;
    height: 55%;
    transform: rotate(45deg);
    display: none;
    border: solid white;
    border-width: 0 1px 1px 0;
  }
  &:checked:after {
    display: block;
  }
`;
const CheckboxLabel = styled.label`
  float: left;
  padding-left: 0.75rem;
  line-height: 1.2rem;
  span {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
  }
`;

export const createSessionSchema = object({
  email: string().nonempty({ message: 'Email is required' }),
  password: string().nonempty({ message: 'Password is required' }),
});
export type CreateSessionSchema = TypeOf<typeof createSessionSchema>;
const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CreateSessionSchema>({
    resolver: zodResolver(createSessionSchema),
  });
  const [signIn, { isLoading, data, error }] = useCreateSessionMutation();

  const logInHandler = (values: CreateSessionSchema) => {
    signIn(values);
  };

  const theme = useTheme();
  return (
    <>
      <Container>
        <Link className="back-btn" to="/welcome">
          <Icon
            iconType={Icons.Back}
            color={(theme as any).primary}
            size={22}
          />
        </Link>
        <Form onSubmit={handleSubmit(logInHandler)}>
          <Header>Log In into your account</Header>
          <span>{(error as any)?.message}</span>
          <FormElement>
            <Input
              {...register('email')}
              type="email"
              data-lpignore="true"
              placeholder="Email"
              autocomplete="new-password"
            ></Input>
            <span>{errors.email?.message}</span>
          </FormElement>
          <FormElement>
            <Input
              {...register('password')}
              type="password"
              data-lpignore="true"
              placeholder="Password"
              autocomplete="new-password"
            ></Input>
            <span>{errors.password?.message}</span>
            <Sub>
              <Link to="/forgetPassword"></Link>
            </Sub>
          </FormElement>
          <PrivatePolicyContainer>
            <Checkbox type="checkbox" id="policy-check" />
            <CheckboxLabel htmlFor="policy-check">
              I agree to the{' '}
              <Link to="#">
                <span>Terms</span>
              </Link>{' '}
              and{' '}
              <Link to="#">
                <span>Private Policy</span>
              </Link>
            </CheckboxLabel>
          </PrivatePolicyContainer>
          <ActionButton type="submit" value="Log In" />
          <GoogleButton>
            <Icon iconType={Icons.Google} />
            Log In with Google
          </GoogleButton>
          <Paragraph>
            Don't have an account?{' '}
            <Link to="/register">
              <span>Sign Up</span>
            </Link>
          </Paragraph>
        </Form>
      </Container>
    </>
  );
};

export default Login;
