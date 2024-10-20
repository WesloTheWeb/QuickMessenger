import ProfileForm from '@/components/ProfileForm/ProfileForm';
import { ProfileUser } from '@/interfaces/UserInterface';
import classes from './UserProfile.module.scss';

const { UserProfileContainer } = classes;

interface UserProfileProps {
    userData: ProfileUser
};

const UserProfile = ({ userData }: UserProfileProps) => {

    return (
        <section className={UserProfileContainer}>
            <h2>User Settings for {userData.username}</h2>
            <ProfileForm userData={userData} />
        </section>
    );
};

export default UserProfile;