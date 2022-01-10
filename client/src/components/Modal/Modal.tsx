import React from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../app/hooks';
import { closeModal } from '../../features/modal/modal-slice';
import { Icons } from '../../utils/enums';
import Icon from '../Icon.style';

const ModalStyled = styled.div<{ show: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  transition: transform 0.5s ease-in-out 0.3s;
  transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(-100%)')};
  background: white;
  padding: 1.5rem 1rem 1rem 1rem;
  z-index: 200;
`;
const IconContainer = styled.div`
  margin: 0 0 auto auto;
`;

const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const CloseButton = styled.button`
  border: none;
  background: white;
`;
const Header = styled.div`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.primary};
`;
const Overlay = styled.div<{ show: boolean }>`
  position: absolute;
  inset: 0;
  background-color: ${(props) => `${props.theme.colors.highlight}87`};
  transition: opacity 0.5s ease;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition-delay: ${({ show }) => (show ? '0s' : '.5s')};
  pointer-events: none;
  z-index: 199;
`;
type ModalProps = {
  title: string;
  isOpened: boolean;
};
const Modal: React.FC<ModalProps> = ({ title, isOpened, children }) => {
  const dispatch = useAppDispatch();
  const closeModalHandler = () => {
    dispatch(closeModal());
  };
  return (
    <>
      <ModalStyled show={isOpened}>
        <HeaderRow>
          <Header>{title}</Header>
          <CloseButton onClick={closeModalHandler}>
            <Icon iconType={Icons.Close} />
          </CloseButton>
        </HeaderRow>
        {children}
      </ModalStyled>
      <Overlay show={isOpened} />
    </>
  );
};

export default Modal;
