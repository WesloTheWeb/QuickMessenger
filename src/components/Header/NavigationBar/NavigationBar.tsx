'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import LoginModal from "@/components/Modals/LoginModal";
import { NavigationItem } from "@/interfaces/NavigationInterface";
import { logout, setAuthState } from "@/redux/slices/authSlice";

import classes from '../Header.module.scss';

interface NavigationBarProps {
    navigation: NavigationItem[];
};

const { navigationContainer } = classes;

const NavigationBar = ({ navigation }: NavigationBarProps) => {
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
    const dispatch = useAppDispatch();

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        async function checkAuthStatus() {
            try {
                const response = await fetch('/api/check-auth');
                const data = await response.json();

                if (data.isLoggedIn) {
                    dispatch(setAuthState({
                        isLoggedIn: true,
                        user: data.user
                    }));
                }
            } catch (error) {
                console.error('Error checking auth status:', error);
            }
        };

        checkAuthStatus();
    }, [dispatch]);

    const toggleLoginModal = () => {
        setIsLoginModalOpen(!isLoginModalOpen);
    };

    const handleLogout = async () => {
        const response = await fetch('/api/logout', { method: 'POST' });

        if (response.ok) {
            document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            dispatch(logout());
            router.push('/');
        };
    };

    const handleLoginSuccess = () => {
        setIsLoginModalOpen(false);
    };

    return (
        <>
            <nav className={navigationContainer}>
                {navigation.map((link, index) => (
                    <Link key={index} href={link.path}>{link.text}</Link>
                ))}
                {isLoggedIn ? (
                    <>
                        <Link href="/dashboard">Dashboard</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <button onClick={toggleLoginModal}>Sign in</button>
                )}
            </nav>
            {isLoginModalOpen && <LoginModal onClose={toggleLoginModal} onLoginSuccess={handleLoginSuccess} />}
        </>
    );
};

export default NavigationBar;
/* Note
There was common typescript pitfall when I did not define link and index.
Just make another interface, NavigationItem that it is an array of strings.
That is what fixed the issue.
*/