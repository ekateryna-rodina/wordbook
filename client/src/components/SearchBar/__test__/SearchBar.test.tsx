import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { SearchBar } from '..';
import { render, screen } from '../../../utils/test-utils';

let input: any;
let filterButton: any;
let filterModal: any;
describe('search bar', () => {
  beforeEach(async () => {
    render(<SearchBar />);
    input = await screen.findByTestId('search-input-testid');
    filterButton = await screen.findByTestId('filter-button-testid');
    filterModal = await screen.findByTestId('filter-modal-testid');
  });
  describe('on initial load', () => {
    it('renders search input, button and modal', async () => {
      expect(input).toBeInTheDocument();
      expect(filterButton).toBeInTheDocument();
      expect(filterModal).toHaveStyle('display: none');
    });
  });
  describe('given the input is valid', () => {
    it('shows the search value', async () => {
      userEvent.type(input, 'word');
      expect(screen.getByDisplayValue('word')).toBeInTheDocument();
    });
    it('makes a call to the search api', async () => {});
  });
  describe('given the input is not valid', () => {
    it('does not make a call to the search api', async () => {});
  });
  describe('on filter toggled', () => {
    it('displays and hides the modal', () => {});
  });
});
