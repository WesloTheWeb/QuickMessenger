import ProfileForm from '@/components/ProfileForm/ProfileForm';
import classes from './UserProfile.module.scss';

const { UserProfileContainer } = classes;


const UserProfile = ({ }) => {

    return (
        <section className={UserProfileContainer}>
            <h1>User Settings</h1>
            <ProfileForm />
        </section>
    );
};

export default UserProfile;