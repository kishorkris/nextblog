import headerStyles from "../styles/Header.module.css";
const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Next</span>
        Blog
      </h1>
      <p className={headerStyles.description}>
        Keep up to date with latest web dev and tech news
      </p>
    </div>
  );
};

export default Header;
