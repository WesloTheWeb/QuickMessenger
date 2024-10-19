'use client';
import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FormValues } from '@/interfaces/FormInterface';
import classes from './ProfileForm.module.scss';
import ProfileField from './ProfileField/ProfileField';

const { profileSection } = classes;

const ProfileForm = ({ }) => {

    const { register, handleSubmit, control, formState: { errors }, reset } = useForm<FormValues>();

    // useEffect(() => {

    //     async function fetchUserData() {
    //         const response = await fetch('/api/user');

    //         if (response.ok) {
    //             const data = await response.json();
    //             console.log(data);
    //         };
    //     }

    //     fetchUserData();
    // }, []);

    // TODO: Repeated fetch code maybe simplify?
    // TODO: Iterate data over Profile Field read only .

    return (
        <form className={profileSection}>
            <h3>General Settings</h3>
            <p>This is the place where you can change part of your profile.</p>
            <ProfileField />
        </form>
    );
};

export default ProfileForm;
