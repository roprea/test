import { lazy, Suspense } from 'react';
import type { HTMLAttributes} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Dashboard = lazy(() => import('components/pages/Dashboard'));

function Content(props: Props) {
  return (
    <main {...props}>
      <Suspense
        fallback={
          <div>Loader</div>
        }
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </main>
  );
}

type Props = HTMLAttributes<HTMLElement>;

export default Content;
