'use client';

import { useEffect, useState } from 'react';
import UserDashboard from "@/components/UserDashBoard/UserDashboard";

export default function DashboardPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      const response = await fetch('/api/user');
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      }
    }
    fetchUserData();
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <>
      <h2>Welcome {user.firstName}</h2>
      <UserDashboard user={user} />
    </>
  );
}