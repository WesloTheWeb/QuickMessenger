'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import UserDashboard from "@/components/UserDashBoard/UserDashboard";

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch('/api/user');
        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        } else {
          router.push('/login');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        router.push('/login');
      } finally {
        setLoading(false);
      }
    }
    fetchUserData();
  }, [router]);

  if (loading) return <div>Loading...</div>;
  if (!user) return null;

  return (
    <>
      <h2>Welcome {user.firstName}</h2>
      <UserDashboard user={user} />
    </>
  );
}