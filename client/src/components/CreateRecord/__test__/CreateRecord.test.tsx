import '@testing-library/jest-dom';
import { CreateRecord } from '..';
import { render, screen } from '../../../utils/test-utils';
describe('Create record form', () => {
  it('Should render fields', () => {
    render(<CreateRecord show={true} />);
    const wordInput = screen.getByTestId('wordInputTestId');
    expect(wordInput).toBeInTheDocument();

    // const examplesInput = screen.getByTestId('examplesInputTestId');
    // expect(examplesInput).toBeInTheDocument();

    // const hintInput = screen.getByTestId('hintInputTestId');
    // expect(hintInput).toBeInTheDocument();

    // const setDropdown = screen.getByTestId('setDropdownnTestId');
    // expect(setDropdown).toBeInTheDocument();

    // const tagsAutocomplete = screen.getByTestId('tagsAutocompleteTestId');
    // expect(tagsAutocomplete).toBeInTheDocument();

    // const transcriptionInput = screen.getByTestId('transcriptionTestId');
    // expect(transcriptionInput).toBeInTheDocument();

    // const speechPartInput = screen.getByTestId('speechPartInputTestId');
    // expect(speechPartInput).toBeInTheDocument();
  });
});
