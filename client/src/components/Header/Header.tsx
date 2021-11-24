import React from 'react';
import styled from 'styled-components';
import { respondTo } from '../../utils/_respondTo';
import { Logo } from '../Logo';

const Container = styled.nav`
  display: none;
  ${respondTo.laptopAndDesktop`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  font-family: Lato, sans-serif;
  background: ${(props: any) => props.theme.dark};
  color: ${(props: any) => props.theme.light};
`}
`;
const Header = () => {
  return (
    <Container>
      <Logo color="light" iconOnly={false} />
      {/* <Search />
      <NavigationLinks></NavigationLinks>
      <UserProfile /> */}
    </Container>
  );
};

export default Header;
