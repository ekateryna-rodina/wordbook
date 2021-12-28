import '@testing-library/jest-dom';
import { MobileMenu } from '..';
import { render, screen } from '../../../utils/test-utils';

describe('Menu', () => {
  it('Links are functional', async () => {
    render(<MobileMenu />);
    const dashboardLink = await screen.findByTestId('dashboard-link-testid');
    expect(dashboardLink).toBeInTheDocument();
    expect(dashboardLink).toHaveAttribute('href', '/');

    const libraryLink = await screen.findByTestId('library-link-testid');
    expect(libraryLink).toBeInTheDocument();
    expect(libraryLink).toHaveAttribute('href', '/library');

    const trainingLink = await screen.findByTestId('training-link-testid');
    expect(trainingLink).toBeInTheDocument();
    expect(trainingLink).toHaveAttribute('href', '/training');

    const settingsLink = await screen.findByTestId('settings-link-testid');
    expect(settingsLink).toBeInTheDocument();
    expect(settingsLink).toHaveAttribute('href', '/settings');
  });
});
