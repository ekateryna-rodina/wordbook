import React from 'react';
import styled from 'styled-components';
import { respondTo } from '../../utils/_respondTo';
import { Logo } from '../Logo';

const Top = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  font-family: Lato, sans-serif;
  background: ${(props: any) => props.theme.dark};
  color: ${(props: any) => props.theme.light};

  //   display: none;
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
const Bottom = styled.div``;

const Menu = () => {
  return (
    <>
      <Top>
        <Logo />
      </Top>
      <Bottom></Bottom>
    </>
  );
};

export default Menu;
