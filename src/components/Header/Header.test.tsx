import { basicTestRunner } from 'test-utils/basic-test-runner';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  basicTestRunner(<Header />, () => ({}), { wrapper: BrowserRouter });
});
