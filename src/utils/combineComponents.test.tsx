import { render, screen } from 'test-utils/testing-library';
import combineComponents from './combineComponents';

describe('combineComponents', () => {
  it('combine components and render the content as child of both combined components', () => {
    const CombinedComponents = combineComponents([
      ({ children }) => <>comp1{children}</>,
      ({ children }) => <>comp2{children}</>,
    ]);
    render(<CombinedComponents>content</CombinedComponents>);
    expect(screen.getByText('comp1comp2content')).toBeInTheDocument();
  });
});
