import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const SetSelector = () => {
  return (
    <Container>
      <select data-testid="set-selector-testid"></select>
    </Container>
  );
};

export default SetSelector;
