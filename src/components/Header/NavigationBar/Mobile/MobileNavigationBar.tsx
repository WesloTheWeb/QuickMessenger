'use client';

import { useState } from 'react';
import Link from 'next/link';
import Overlay from "@/components/Modals/Overlay";
import { NavigationItem } from '@/interfaces/NavigationInterface';
import classes from '../../Header.module.scss';

const { hamburgerButton, mobileNav } = classes;

interface MobileNavigationBarProps {
    navigation: NavigationItem[];
    isLoggedIn: boolean;
    onLogout: () => void;
    onLoginClick: () => void;
    isMobileView: boolean;
}

const MobileNavigationBar = ({
    navigation,
    isLoggedIn,
    onLogout,
    onLoginClick,
    isMobileView
}: MobileNavigationBarProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    if (!isMobileView) return null;

    return (
        <>
            <div>
                <button onClick={toggleMenu} className={hamburgerButton}>
                    ☰
                </button>
            </div>
            {isOpen && (
                <>
                    <Overlay onClose={toggleMenu} />
                    <nav className={mobileNav}>
                        {navigation.map((link, index) => (
                            <Link key={index} href={link.path} onClick={toggleMenu}>
                                {link.text}
                            </Link>
                        ))}
                        {isLoggedIn ? (
                            <>
                                <Link href="/dashboard" onClick={toggleMenu}>Dashboard</Link>
                                <button onClick={() => { onLogout(); toggleMenu(); }}>Logout</button>
                            </>
                        ) : (
                            <button onClick={() => { onLoginClick(); toggleMenu(); }}>Sign in</button>
                        )}
                    </nav>
                </>
            )}
        </>
    );
};

export default MobileNavigationBar;