import React from "react";
import styles from "../pages/css/Features.module.css";
import creatingportfolio from "../../assets/svgs/creatingportfolio.svg";
import hiring from "../../assets/svgs/hiring.svg";

const Features = () => {
  return (
    <section className={styles.featuressection}>
        <div>
            <h1>Our Features</h1>
        </div>
        <div className={styles.featurescontent}>
        <div className={styles.createportfolio}>
            <div className={styles.featuresimage}>
                <img src={creatingportfolio} alt="portfolio"/>
              </div>
              <div className={styles.content}>
          <h3>Creating Portfolio</h3>
          <p>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. 
            At nam minimum ponderum. Est audiam animal molestiae te.
            Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum.
            Est audiam animal molestiae te. Ex duo eripuit mentitum. Ex duo eripuit mentitum.</p>
        </div>
    </div>

        <div className={styles.hiring}>
            <div className={styles.featuresimage}>
                <img src={hiring} alt="portfolio"/>
              </div>
              <div className={styles.content}>
                <h3>Hiring/ Recruitement</h3>
                <p>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. 
                  At nam minimum ponderum. Est audiam animal molestiae te.
                  Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum.
                  Est audiam animal molestiae te. Ex duo eripuit mentitum. Ex duo eripuit mentitum.</p>
              </div>
        </div>
    </div>
      </section>
  );
};

export default Features;