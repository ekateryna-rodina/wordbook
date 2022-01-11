import React from 'react';
import styled from 'styled-components';
import { theme } from '../../globalStyles';
import { Icons } from '../../utils/enums';
import { respondTo } from '../../utils/_respondTo';
import Icon from '../Icon.style';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0.5rem;

  & p {
    margin: 0 0.5rem;
    color: ${(props) => props.theme.colors.red};
    font-size: 0.7rem;
  }

  & p.attention__touch {
    ${respondTo.laptopAndDesktop`
      display: none;
    `}
  }
  & p.attention__mouse {
    display: none;
    ${respondTo.laptopAndDesktop`
      display: inline-block;
    `}
  }
`;

const Attention = () => {
  return (
    <Container>
      <Icon iconType={Icons.Attention} color={theme.colors.red} size={15} />
      <p className="attention__touch">
        Long tap on a single word to fetch details from vocabularies
      </p>
      <p className="attention__mouse">
        Double click on a single word to fetch details from vocabularies
      </p>
    </Container>
  );
};

export default Attention;
