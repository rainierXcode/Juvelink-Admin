'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('🔴 Global Error:', {
      message: error.message,
      digest: error.digest,
    });
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 text-red-800 p-6">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold mb-2">Something went wrong</h1>
        <p className="text-sm mb-4">
          We encountered a problem while loading the app. Please try again.
        </p>

        <button
          onClick={reset}
          className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
