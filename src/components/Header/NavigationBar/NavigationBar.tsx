'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import LoginModal from "@/components/Modals/LoginModal";
import { NavigationItem } from "@/interfaces/NavigationInterface";
import classes from '../Header.module.scss';

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { increment, decrement } from "@/redux/slices/counterSlice";

interface NavigationBarProps {
    navigation: NavigationItem[];
};

const { navigationContainer } = classes;

const NavigationBar = ({ navigation }: NavigationBarProps) => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const checkLoginStatus = () => {
            const isTokenPresent = document.cookie.includes('token=');
            setIsLoggedIn(isTokenPresent);
        };

        checkLoginStatus();

        // Listen for custom login/logout events
        window.addEventListener('login', checkLoginStatus);
        window.addEventListener('logout', checkLoginStatus);

        return () => {
            window.removeEventListener('login', checkLoginStatus);
            window.removeEventListener('logout', checkLoginStatus);
        };
    }, []);
    const toggleLoginModal = () => {
        setIsLoginModalOpen(!isLoginModalOpen);
    };

    const handleLogout = async () => {
        const response = await fetch('/api/logout', { method: 'POST' });
        if (response.ok) {
            document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            setIsLoggedIn(false);
            router.push('/');
        };
    };

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        setIsLoginModalOpen(false);
    };

    return (
        <>
            <nav className={navigationContainer}>
                {navigation.map((link, index) => (
                    <Link key={index} href={link.path}>{link.text}</Link>
                ))}
                {isLoggedIn ? (
                    <Link href="/dashboard">Dashboard</Link>
                ) : null}
                {isLoggedIn ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <button onClick={toggleLoginModal}>Sign in</button>
                )}
            </nav>
            {isLoginModalOpen && <LoginModal onClose={toggleLoginModal} onLoginSuccess={handleLoginSuccess} />}
            {/* <div>
                Counter: {count}
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div> */}
        </>
    );
};

export default NavigationBar;
/* Note
There was common typescript pitfall when I did not define link and index.
Just make another interface, NavigationItem that it is an array of strings.
That is what fixed the issue.
*/