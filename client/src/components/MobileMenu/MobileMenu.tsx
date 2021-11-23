import React from 'react';
import styled from 'styled-components';
import { respondTo } from '../../utils/_respondTo';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  font-family: Lato, sans-serif;
  background: ${(props: any) => props.theme.dark};
  color: ${(props: any) => props.theme.light};
  ${respondTo.laptopAndDesktop`
    display: none;
`}
`;
const MobileMenu = () => {
  return (
    <Container>
      {/* <Search />
      <Favorites />
      <Create />
      <UserProfile /> */}
    </Container>
  );
};

export default MobileMenu;
