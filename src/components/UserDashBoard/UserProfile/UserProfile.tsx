import ProfileForm from '@/components/ProfileForm/ProfileForm';
import classes from './UserProfile.module.scss';

const { UserProfileContainer } = classes;


const UserProfile = ({ }) => {

    return (
        <section className={UserProfileContainer}>
            <h2>User Settings</h2>
            <ProfileForm />
        </section>
    );
};

export default UserProfile;