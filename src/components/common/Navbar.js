import React, { useState } from "react";
import styles from "./css/Navbar.module.css";
import logo from "../../assets/images/logo.jpeg";
import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";

const Navbar = () => {
  // const [showLinks, setShowLinks] = useState(false);

  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>
        <h2
          style={{
            display: "flex",
          }}
        >
          <span>WE</span>BFOLYO
        </h2>
      </div>

      <div className={styles.navlinks}>
        <ul>
          <li>
            <Link to={"/"} className={styles.linkclass}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about_us"} className={styles.linkclass}>
              AboutUs
            </Link>
          </li>
          <li>
            <Link to={"/hiring_window"} className={styles.linkclass}>
              Hiring
            </Link>
          </li>
          {/* <li>
            <Link to={"/login"} className={styles.linkclass}>
              Login
            </Link>
          </li> */}
          <Link to={"/user_cms"} className={styles.linkclasssignup}>
            <button className={styles.btn}>SignUp</button>
          </Link>
        </ul>
      </div>

      {/* <CgMenu
        className={styles.hamburger}
        onClick={() => setShowLinks(!showLinks)}
      ></CgMenu> */}
    </nav>
  );
};

export default Navbar;
