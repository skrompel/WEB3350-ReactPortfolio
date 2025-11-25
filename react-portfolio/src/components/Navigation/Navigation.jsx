import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        <Link to="/" className={styles.logoLink}>
          <img
            src="/public/DxxmTxch_Logo.PNG"
            alt="DxxmTxch Logo"
            className={styles.logo}
          />
        </Link>
        <ul className={styles.navLinks}>
          <li>
            <Link
              to="/"
              className={`${styles.navLink} ${
                isActive("/") ? styles.active : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`${styles.navLink} ${
                isActive("/about") ? styles.active : ""
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className={`${styles.navLink} ${
                isActive("/portfolio") ? styles.active : ""
              }`}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`${styles.navLink} ${
                isActive("/contact") ? styles.active : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
