'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ProfileUser } from '@/interfaces/UserInterface';

export function useProtectedRoute(fetchProfile = false) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<ProfileUser | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      try {
        const authResponse = await fetch('/api/check-auth');
        const authData = await authResponse.json();

        if (authData.isLoggedIn) {
          setIsLoggedIn(true);
          setUserData(authData.user);

          if (fetchProfile) {
            const profileResponse = await fetch('/api/user/profile');
            const profileData = await profileResponse.json();
            setUserData(prevData => ({ ...prevData, ...profileData.user }));
          }
        } else {
          router.push('/login');
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        router.push('/login');
      }
    }

    checkAuth();
  }, [router, fetchProfile]);

  return { isLoggedIn, userData };
};

// This hook should not use any redux hooks because application isn't wrapped in redux store provider