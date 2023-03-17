import React from 'react';
import styles from "../pages/css/about.module.css";
import about from "../../assets/svgs/about.svg";



function HeroSection() {
  return (
    <section className={styles.aboutsection}>
      <div className={styles.aboutcontent}>
        <h1>About</h1>
        <p>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. 
          At nam minimum ponderum. Est audiam animal molestiae te.
          Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum.
             Est audiam animal molestiae te. Ex duo eripuit mentitum. Ex duo eripuit mentitum.</p>
          <p>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum.
             Est audiam animal molestiae te. Ex duo eripuit mentitum.
             Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum.
             Est audiam animal molestiae te. Ex duo eripuit mentitum.</p>
        <button className={styles.ctabutton}>Learn More</button>
      </div>
      <div className={styles.aboutimage}>
        <img src={about} alt="portfolio"/>
      </div>
    </section>
  );
}

export default HeroSection;


