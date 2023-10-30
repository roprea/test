import { basicTestRunner } from 'test-utils/basic-test-runner';
import { act, renderHook, render, screen, waitFor } from 'test-utils/testing-library';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import Content from './Content';

jest.mock('components/pages/Dashboard', () => ({
  __esModule: true,
  default: () => <div>Dashboard Page</div>,
}));

describe('Content', () => {
  basicTestRunner(
    <Content />,
    () => ({ waitForReady: () => () => screen.getByText('Dashboard Page') }),
    {
      wrapper: BrowserRouter,
    }
  );

  it('render dashboard page for root path', async () => {
    const { result } = renderHook(() => useNavigate(), { wrapper: BrowserRouter });
    act(() => result.current('/'));
    render(<Content />, { wrapper: BrowserRouter });
    await waitFor(() => {
      expect(screen.getByText('Dashboard Page')).toBeInTheDocument();
    });
  });
});
