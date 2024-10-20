'use client';

import { useProtectedRoute } from "@/hooks/useProtectedRoute";
import Menu from "@/components/UserDashBoard/Menu/Menu";
import UserProfile from "@/components/UserDashBoard/UserProfile/UserProfile";
import StoreProvider from "@/components/StoreProvider";

const ProfilePage = () => {
    const { isLoggedIn, userData } = useProtectedRoute(true);

    if (!isLoggedIn || !userData) return null;

    return (
        <StoreProvider>
            <section className="profile-layout">
                <Menu />
                <UserProfile userData={userData} />
            </section>
        </StoreProvider>
    );
};

export default ProfilePage;