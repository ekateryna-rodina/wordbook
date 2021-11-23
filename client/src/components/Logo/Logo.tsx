import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
`;
const LogoStyled = styled.div`
  font-family: Quicksand, sans-serif;
  position: relative;
  color: ${(props) => props.theme.light};
  height: 18px;
  width: 18px;
`;

const U = styled.div`
  position: absolute;
  top: -12px;
  left: -5px;
  bottom: 0;
  font-size: 36px;
  display: block;
  margin: 0;
  padding: 0;
`;
const Y = styled.span`
  position: absolute;
  top: -5px;
  left: 3px;
  font-size: 16px;
`;
const W = styled.span`
  position: absolute;
  top: 0;
  left: 1px;
  font-size: 18px;
`;
const Label = styled.span`
  display: block;
  margin-left: 4px;
  margin-top: 2px;
  color: ${(props) => props.theme.light};
  font-size: 14px;
  line-height: 14px;
`;
const Spaced = styled.span`
  letter-spacing: 3px;
  font-size: inherit;
`;
const Logo = () => {
  return (
    <Container>
      <LogoStyled>
        <Y>Y</Y>
        <W>w</W>
        <U>U</U>
      </LogoStyled>

      <Label>
        Use Your <br />
        <Spaced>Words</Spaced>
      </Label>
    </Container>
  );
};

export default Logo;
