import styles from "../styles/Layout.module.css";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <>
      <Nav></Nav>
      <div>
        <main className={styles.main}>
            <Header></Header>
            {children}
            </main>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Layout;
