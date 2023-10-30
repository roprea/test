import { cloneElement } from 'react';
import { axe } from 'jest-axe';
import { render, waitFor } from '../testing-library';
import type { RenderResult } from '../testing-library';
import type { GetOptions, Suite, TestRunner, TestSuiteOptions } from './types';

// Randomize test values
export const randomStringValue = () => Math.random().toString(36).slice(2);

const possiblyWait = (result: RenderResult, getOptions?: GetOptions): Promise<unknown> => {
  if (getOptions) {
    const options = getOptions();
    if (options.waitForReady) {
      return waitFor(options.waitForReady(result));
    }
  }

  return Promise.resolve(null);
};

const testSnapshot: TestRunner = (element, getOptions, renderOptions) => {
  it('should match snapshot', async () => {
    const result = render(element, renderOptions);
    await possiblyWait(result, getOptions);
    expect(result.container).toMatchSnapshot();
  });
};

const testClassName: TestRunner = (element, getOptions, renderOptions) => {
  it('should merge custom classNames to the targeted element', async () => {
    const className = randomStringValue();

    const result = render(cloneElement(element, { className }), renderOptions);
    await possiblyWait(result, getOptions);
    const component = result.container.firstChild;

    expect(component).toHaveClass(className);
  });
};

const testSpreadProps: TestRunner = (element, getOptions, renderOptions) => {
  it('should spread properties to the targeted element', async () => {
    const testProp = 'data-t-props-spread';
    const value = randomStringValue();

    const result = render(cloneElement(element, { [testProp]: value }), renderOptions);
    await possiblyWait(result, getOptions);
    const component = result.container.firstChild;

    expect(component).toHaveAttribute(testProp, value);
  });
};

const testAccessibility: TestRunner = (element, getOptions, renderOptions) => {
  it('should not have basic accessibility issues', async () => {
    const result = render(element, renderOptions);
    await possiblyWait(result, getOptions);

    const results = await axe(result.container);
    expect(results).toHaveNoViolations();
  });
};

const testSuite: Suite = {
  snapshot: testSnapshot,
  mergeClassName: testClassName,
  spreadProps: testSpreadProps,
  accessibility: testAccessibility,
};

const basicTestRunner: TestRunner = (element, getOptions, renderOptions) => {
  const suiteKeys = Object.keys(testSuite) as TestSuiteOptions[];
  const { only = suiteKeys, skip = [] } = getOptions?.() || {};

  describe('Basic component behaviour', () => {
    suiteKeys
      .filter((testKey) => only.indexOf(testKey) !== -1 && skip.indexOf(testKey) === -1)
      .forEach((testKey) => {
        const test = testSuite[testKey];
        test(element, getOptions, renderOptions);
      });
  });
};

export default basicTestRunner;
