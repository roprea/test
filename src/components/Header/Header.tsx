import { memo } from 'react';
import type { HTMLAttributes } from 'react';

function Header(props: Props) {
  return <header {...props}>App Header</header>;
}

type Props = HTMLAttributes<HTMLElement>;

export default memo(Header);
