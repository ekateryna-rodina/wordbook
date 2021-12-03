import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { CreateRecord } from '..';
import { store } from '../../../app/store';
describe('Create record form', () => {
  it('Should render fields', () => {
    render(
      <Provider store={store}>
        <CreateRecord show={true} />
      </Provider>
    );
    const wordInput = screen.getByTestId('wordInputTestId');
    expect(wordInput).toBeInTheDocument();
  });
});
