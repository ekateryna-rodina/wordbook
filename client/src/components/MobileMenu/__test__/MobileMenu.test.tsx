import '@testing-library/jest-dom';
import { MobileMenu } from '..';
import { render, screen } from '../../../utils/test-utils';

describe('Menu', () => {
  it('Links are functional', async () => {
    render(<MobileMenu />);
    const dashboardLink = await screen.findByTestId('dashboard-link-testid');
    expect(dashboardLink).toBeInTheDocument();
    expect(dashboardLink.closest('a')).toHaveAttribute('href', '/');
  });
});
