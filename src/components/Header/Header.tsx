import Link from "next/link";
import classes from "./Header.module.scss";

const { headerContainer } = classes;

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
    {
      text: "Sign in",
      path: "/sign-in"
    }
  ];

  return (
    <section className={headerContainer}>
      <div>
        <h1>QuickMessenger</h1>
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