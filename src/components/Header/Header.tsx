import Image from 'next/image';
import NavigationBar from "./NavigationBar/NavigationBar";
import classes from "./Header.module.scss";
import Link from 'next/link';

const { headerContainer, logoContainer, logoLink } = classes;

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

      <NavigationBar navigation={navigationLinks} />
    </section>
  );
};

export default Header;