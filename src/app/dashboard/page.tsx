import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import UserDashboard from "@/components/UserDashBoard/UserDashboard";
import { ProfileUser } from '@/interfaces/UserInterface';

async function getUser(): Promise<ProfileUser | null> {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) {
    console.log('No token found, redirecting to login');
    return null;
  };

  try {
    // Construct the full URL
    const headersList = headers();
    const host = headersList.get('host') || 'localhost:3000';
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    const apiUrl = `${protocol}://${host}/api/user/profile`;

    const response = await fetch(apiUrl, {
      headers: {
        'Cookie': `token=${token}`,
      },
    });

    if (!response.ok) {
      console.error(`API response not ok. Status: ${response.status}`);
      const text = await response.text();
      console.error(`Response body: ${text}`);
      throw new Error(`Failed to fetch user data: ${response.statusText}`);
    }

    const data = await response.json();
    return data.user;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
}

export default async function DashboardPage() {
  const user = await getUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <>
      <h2 className='dashboard-header'>Welcome, {user.firstName}!</h2>
      <UserDashboard />
    </>
  );
};

// ? This effectively is a server component top level on page.