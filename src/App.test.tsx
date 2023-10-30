import type { ReactNode } from 'react';
import { basicTestRunner } from 'test-utils/basic-test-runner';
import { render, screen } from 'test-utils/testing-library';
import App from './App';

jest.mock('@azure/msal-react', () => {
  const actual = jest.requireActual('@azure/msal-react');

  return {
    ...actual,
    MsalAuthenticationTemplate: ({ children }: { children: ReactNode }) => <>{children}</>,
    MsalProvider: ({ children }: { children: ReactNode }) => <>{children}</>,
  };
});
jest.mock('components/Header', () => ({
  __esModule: true,
  default: () => <div>Application header</div>,
}));
jest.mock('components/Content', () => ({
  __esModule: true,
  default: () => <div>Application content</div>,
}));

describe('App', () => {
  basicTestRunner(<App />, () => ({ only: ['snapshot', 'accessibility'] }));

  it('render application header', () => {
    render(<App />);
    expect(screen.getByText('Application header')).toBeInTheDocument();
  });

  it('render application content', () => {
    render(<App />);
    expect(screen.getByText('Application content')).toBeInTheDocument();
  });
});
