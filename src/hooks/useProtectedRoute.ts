'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export function useProtectedRoute() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await fetch('/api/check-auth');
        const data = await response.json();
        setIsLoggedIn(data.isLoggedIn);

        if (!data.isLoggedIn) {
          router.push('/login');
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        router.push('/login');
      };
    };

    checkAuth();
  }, [router]);

  return isLoggedIn;
};
