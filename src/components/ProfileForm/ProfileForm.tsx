'use client';

import { useForm, Controller } from 'react-hook-form';
import { FormValues } from '@/interfaces/FormInterface';
import classes from './ProfileForm.module.scss';

const { profileSection } = classes;

const ProfileForm = ({ }) => {

    const { register, handleSubmit, control, formState: { errors }, reset } = useForm<FormValues>();

    return (
        <form className={profileSection}>
            <h2>General Settings</h2>
            <p>This is the place where you can change part of your profile.</p>
        </form>
    );
};

export default ProfileForm;