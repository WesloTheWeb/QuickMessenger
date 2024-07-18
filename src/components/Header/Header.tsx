import Link from "next/link";
import classes from "./Header.module.scss";

const { headerContainer, logoContainer, title1, title2 } = classes;

const Header = () => {

  const navigationLinks = [
    {
      text: "Home",
      path: "/"
    },
    {
      text: "Register",
      path: "/register"
    },
    // {
    //   text: "Sign in",
    //   path: "/sign-in"
    // }
  ];

  return (
    <section className={headerContainer}>
      <div className={logoContainer}>
        <h1>
          <span className={title1}>Quick</span>
          <span className={title2}>Messenger</span>
        </h1>
      </div>
      <nav>
        {navigationLinks.map((link) => {
          return (
            <Link href={link.path}>{link.text}</Link>
          )
        })}
      </nav>
    </section>

  )

};

export default Header;