import React from "react";
import styles from "../pages/css/Morale.module.css";
import heroimg from "../../assets/svgs/heroimg.svg";


const Hero = () => {
return(
  <section className={styles.herosection}>
    <div className={styles.main}>
      <div className={styles.herocontent}>
        <h1>Webfolyo</h1>
        <h4>Achieve your Milestones</h4>
        <p>Discover the best products and services for your needs.
          Eos tota dicunt democritum no. Has natum gubergren ne.
           Est viris soleat sadipscing cu. Legere epicuri insolens eu nec, 
           dicit virtute urbanitas id nam, qui in habeo semper eligendi.
        </p>
        <button className={styles.portfoliobutton}>Create My Portfolio</button>
      </div>

      <div className={styles.heroimage}>
        <img src={heroimg} alt="portfolio"/>
      </div>
    </div>
  </section>
);
};

export default Hero;
