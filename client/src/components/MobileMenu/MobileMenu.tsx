import React from 'react';
import { Link } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import { Icons } from '../../utils/enums';
import { respondTo } from '../../utils/_respondTo';
import Icon from '../Icon.style';

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
  const theme = useTheme();
  return (
    <Container>
      {/* <Search />
      <Favorites />
      <Create /> */}

      <Link to="/login">
        <Icon iconType={Icons.User} color={(theme as any).light}></Icon>
      </Link>
    </Container>
  );
};

export default MobileMenu;
