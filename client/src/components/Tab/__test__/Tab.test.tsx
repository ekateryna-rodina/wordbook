// @ts-nocheck
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import 'jest-styled-components';
import { render, screen } from '../../../utils/test-utils';
import { Tabs } from '../../Tabs';

describe('tab', () => {
  beforeEach(() => {
    // const mockOnClick = jest.fn();
    render(<Tabs />);
  });
  describe('on init', () => {
    it('renders correctly', async () => {
      const tab = await screen.findByText('Stats');
      expect(tab).toBeInTheDocument();
    });
  });
  describe('given on click', () => {
    it('becomes active', async () => {
      const tabs = ['Challenge', 'Stats', 'Recent'];
      let active;
      for (let i = 0; i < 10; i++) {
        active = tabs[Math.floor(Math.random() * 3)];
        let nonActive = tabs
          .filter((t) => t !== active)
          .map((t) => screen.getByText(t));
        let activeTab = screen.getByText(active);

        userEvent.click(activeTab);
        expect(activeTab).toHaveStyleRule('border-width', '1px 1px 0 1px');
        nonActive.forEach((matcher) => {
          expect(matcher).toHaveStyleRule('border-width', '0 0 1px 0');
        });
      }
    });
  });
});
