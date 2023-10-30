import type { ComponentType, ReactElement, ReactNode } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18n';

export const TestProviders: ComponentType<{ children: ReactNode }> = ({ children }) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

type Render = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) => RenderResult;

const customRender: Render = (ui, options) => render(ui, { wrapper: TestProviders, ...options });

// re-export everything
export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';

// override render method
export { customRender as render };
