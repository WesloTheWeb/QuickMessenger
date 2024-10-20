import Image from 'next/image';
import Link from 'next/link';
import NavigationBar from "./NavigationBar/NavigationBar";
import classes from "./Header.module.scss";
import MobileNavigationWrapper from './NavigationBar/Mobile/MobileNavigationWrapper';
import StoreProvider from '../StoreProvider';

const { headerContainer, logoLink } = classes;

const Header = () => {

  const navigationLinks = [
    {
      text: "Home",
      path: "/"
    },
    {
      text: "Register",
      path: "/register"
    }
  ];

  return (
    <section className={headerContainer}>
      <Link href="/" className={logoLink}>
        <Image
          src="/logo-quick-messenger.svg"
          alt="Quick Messenger Logo"
          width={200}
          height={51}
          style={{ width: '100%', height: 'auto' }}
        />
      </Link>
      <StoreProvider>
        <NavigationBar navigation={navigationLinks} />
      </StoreProvider>
      <MobileNavigationWrapper navigation={navigationLinks} />
      {/* <MobileNavigationBar navigation={navigationLinks} /> */}
    </section>
  );
};

export default Header;