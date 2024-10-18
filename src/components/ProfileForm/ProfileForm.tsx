'use client';

import { useForm, Controller } from 'react-hook-form';
import { FormValues } from '@/interfaces/FormInterface';
import classes from './ProfileForm.module.scss';
import ProfileField from './ProfileField/ProfileField';

const { profileSection } = classes;

const ProfileForm = ({ }) => {

    const { register, handleSubmit, control, formState: { errors }, reset } = useForm<FormValues>();

    return (
        <form className={profileSection}>
            <h3>General Settings</h3>
            <p>This is the place where you can change part of your profile.</p>
            <ProfileField />
        </form>
    );
};

export default ProfileForm;