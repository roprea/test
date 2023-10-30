import type { ReactElement } from 'react';
import { RenderResult } from '@testing-library/react';
import { RenderOptions } from '../testing-library';

export type TestSuiteOptions = 'snapshot' | 'mergeClassName' | 'spreadProps' | 'accessibility';

export type Suite = { [key in TestSuiteOptions]: TestRunner };

export type TestRunner = (
  element: ReactElement,
  getOptions?: GetOptions,
  renderOptions?: Omit<RenderOptions, 'queries'>
) => void;

export type ReturnOptions = {
  only?: TestSuiteOptions[];
  skip?: TestSuiteOptions[];
  waitForReady?: (render: RenderResult) => () => unknown | Promise<unknown>;
};

export type GetOptions = () => ReturnOptions;
