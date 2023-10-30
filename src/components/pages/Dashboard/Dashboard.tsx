import { memo } from 'react';
import type { HTMLAttributes } from 'react';

function Dashboard(props: Props) {
  return <div {...props}>Dashboard Content</div>;
}

type Props = HTMLAttributes<HTMLElement>;

export default memo(Dashboard);
