'use client';

import { useProtectedRoute } from "@/hooks/useProtectedRoute";
import Menu from "@/components/UserDashBoard/Menu/Menu";
import UserProfile from "@/components/UserDashBoard/UserProfile/UserProfile";

const ProfilePage = () => {
    const isLoggedIn = useProtectedRoute();

    if (!isLoggedIn) return null;

    return (
        <>
            <section className="profile-layout">
                <Menu />
                <UserProfile />
            </section>
        </>
    );
};

export default ProfilePage;
