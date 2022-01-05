import React from 'react';
import styled from 'styled-components';

const ModalStyled = styled.div`
  width: 100%;
  height: 100%;
`;
const IconContainer = styled.div`
  margin: 0 0 auto auto;
`;
type ModalProps = {
  title: string;
};
const Modal: React.FC<ModalProps> = ({ children, title }) => {
  return (
    <ModalStyled>
      {children}
      <IconContainer>{/* <Icon iconType={Icons.Close} /> */}</IconContainer>
    </ModalStyled>
  );
};

export default Modal;
