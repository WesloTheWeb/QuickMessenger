'use client';
import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useAppDispatch } from '@/redux/hooks';
import { setUser } from '@/redux/slices/userSlice';
import { FormValues } from '@/interfaces/FormInterface';
import { ProfileUser } from '@/interfaces/UserInterface';
import ProfileField from './ProfileField/ProfileField';

import classes from './ProfileForm.module.scss';

interface ProfileFormProps {
    userData: ProfileUser;
};

const { profileSection } = classes;

const ProfileForm = ({ userData }: ProfileFormProps) => {
    const dispatch = useAppDispatch();
    const { register, handleSubmit, control, formState: { errors }, reset } = useForm<FormValues>();

    useEffect(() => {
        if (userData) {
            dispatch(setUser(userData));
            // reset(userData);
        }
    }, [userData, dispatch, reset]);

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
