// components/ErrorBoundary.tsx
'use client';

import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="p-4 text-red-500">
      <p>Something went wrong:</p>
      <pre className="whitespace-pre-wrap">{error.message}</pre>
    </div>
  );
}

export default function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return <ReactErrorBoundary FallbackComponent={ErrorFallback}>{children}</ReactErrorBoundary>;
}