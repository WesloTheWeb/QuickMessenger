'use client';
import { useState, useEffect } from 'react';
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

const { profileSection, userSection } = classes;

const ProfileForm = ({ userData }: ProfileFormProps) => {
    const dispatch = useAppDispatch();

    const [userInformation, setUserInformation] = useState<ProfileUser | null>(null);
    const { register, handleSubmit, control, formState: { errors }, reset } = useForm<FormValues>();

    useEffect(() => {
        if (userData) {
            dispatch(setUser(userData));
            setUserInformation(userData);
            // reset(userData);
        };

    }, [userData, dispatch, reset]);

    const profileData = userInformation ? Object.entries(userInformation)?.slice(1) : [];

    return (
        <form className={profileSection}>
            <h3>General Settings</h3>
            <p>This is the place where you can change part of your profile.</p>
            <section className={userSection}>
                {profileData.map(([fieldName, val]) => {
                    return (
                        <ProfileField
                            key={fieldName}
                            fieldName={fieldName}
                            fieldValue={String(val)}
                        />
                    )
                })}
            </section>
        </form>
    );
};

export default ProfileForm;
