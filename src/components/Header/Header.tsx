import NavigationBar from "./NavigationBar/NavigationBar";
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
    }
  ];

  return (
    <section className={headerContainer}>
      <div className={logoContainer}>
        <h1>
          <span className={title1}>Quick</span>
          <span className={title2}>Messenger</span>
        </h1>
      </div>
      <NavigationBar navigation={navigationLinks} />
    </section>
  );
};

export default Header;