
import { Link } from 'react-router-dom';
import styles from '../css/Navbar.module.css';
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
      <ul className={styles.navbarNav}>
        <li className={styles.navItem}>
          <Link to="/profile" className={styles.navLink} style={{color:(pathname === '/profile'?"#FF8C00":"")}}>about me</Link>
        </li>
        {/* <li className={styles.navItem}>
          <Link to="/blog" className={styles.navLink}>my blog</Link>
        </li> */}
        <li className={styles.navItem}>
          <Link to="/timetracker" className={styles.navLink} style={{color:(pathname === '/timetracker'?"#FF8C00":"")}}>time tracker</Link>
        </li>
        <li className={styles.navItem}>
          {/* 页面导航到footer */}
          <a href="#footer" className={styles.navLink}>contact me</a>
        </li>
      </ul>
  );
};

export default Navbar;