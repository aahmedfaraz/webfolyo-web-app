import React, { useState } from 'react';
import { Link } from "react-router-dom";
import style from "./css/Footer.module.css";
import styles from "./css/Navbar.module.css";

const Footer = () =>{
return(
<div className={style.footersection}>
    <div className={style.footercontainer}>
        <h2>Ready to get Started?</h2>
            <button className={styles.btn}>
                <Link to={"/signup"} className={styles.linkclasssignup}>Get Started</Link>
            </button>
    </div>
    <div className={style.contactus}>
        <p>Contact Us</p>
    </div>
        <div className={style.footerbottom}>
            <p>Copyright &copy; 2022 WEBFOLYO | All Rights Reserved.</p>
        </div>
    </div>

);
};
export default Footer;