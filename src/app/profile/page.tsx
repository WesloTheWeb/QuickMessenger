import Menu from "@/components/UserDashBoard/Menu/Menu";
import UserProfile from "@/components/UserDashBoard/UserProfile/UserProfile";

const ProfilePage = () => {
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
