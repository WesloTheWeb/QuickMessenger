'use client'
import { useState } from "react";
import Link from "next/link";
import LoginModal from "@/components/Modals/LoginModal";
import classes from '../Header.module.scss';

interface NavigationItem {
    text: string;
    path: string;
}

interface NavigationBarProps {
    navigation: NavigationItem[];
}

const { navigationContainer } = classes;

const NavigationBar = ({ navigation }: NavigationBarProps) => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const toggleLoginModal = () => {
        setIsLoginModalOpen(!isLoginModalOpen);
    };

    return (
        <>
            <nav className={navigationContainer}>
                {navigation.map((link, index) => (
                    <Link key={index} href={link.path}>{link.text}</Link>
                ))}
                <button onClick={toggleLoginModal}>Sign in</button>
            </nav>
            {isLoginModalOpen && <LoginModal onClose={toggleLoginModal} />}
        </>
    );
};

export default NavigationBar;

/* Note
There common typescript pitfall when I did not define link and index.
Just make another interface, NavigationItem that it is an array of strings.
That is what fixed the issue.
*/