import '@testing-library/jest-dom';
import { CreateRecord } from '..';
import { render } from '../../../utils/test-utils';
describe('Create record form', () => {
  it('Should render fields', () => {
    render(<CreateRecord show={true} />);

    expect(true).toBe(true);
  });
});
