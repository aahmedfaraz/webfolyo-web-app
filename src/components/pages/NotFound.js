import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import styles from "../pages/css/Morale.module.css";
import stylee from "../pages/css/notfound.module.css";
import error404 from "../../assets/svgs/404.svg";

const NotFound = () => {
  return (
    <div className={stylee.errorsection}>
      <div className={stylee.error}>
        <img src={error404} alt='Error 404 | Page not found'></img>
        <button className={stylee.homebtn}>Back to Home page</button>
      </div>
    </div>
  );
};

export default NotFound;
