'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import MobileNavigationBar from './MobileNavigationBar';
import { NavigationItem } from '@/interfaces/NavigationInterface';

interface MobileNavigationWrapperProps {
  navigation: NavigationItem[];
}

const MobileNavigationWrapper = ({ navigation }: MobileNavigationWrapperProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const checkLoginStatus = () => {
      const isTokenPresent = document.cookie.includes('token=');
      setIsLoggedIn(isTokenPresent);
    };

    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    checkLoginStatus();
    handleResize();

    window.addEventListener('login', checkLoginStatus);
    window.addEventListener('logout', checkLoginStatus);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('login', checkLoginStatus);
      window.removeEventListener('logout', checkLoginStatus);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLogout = async () => {
    const response = await fetch('/api/logout', { method: 'POST' });
    if (response.ok) {
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      setIsLoggedIn(false);
      router.push('/');
    }
  };

  const handleLoginClick = () => {
    // TODO Implement login logic or open login modal For now, just redirect to a login page. Have modal component
    router.push('/login');
  };

  return (
    <MobileNavigationBar
      navigation={navigation}
      isLoggedIn={isLoggedIn}
      onLogout={handleLogout}
      onLoginClick={handleLoginClick}
      isMobileView={isMobileView}
    />
  );
};

export default MobileNavigationWrapper;