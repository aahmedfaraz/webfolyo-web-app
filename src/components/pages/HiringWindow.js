import React from "react";
import styles from "./css/HiringWindow.module.css";
import search from "../../assets/svgs/search.svg";
import image from "../../assets/svgs/hiringwindow.svg";
import { Hidden } from "react-grid-system";
const HiringWindow = () => {
  return (
    <div className={styles.window_container}>
      <div className={styles.heading_container}>
        <div className={styles.heading}>
          <h1 className={styles.main_heading}>Explore Top-rated</h1>
          <h1 className={styles.main_heading}>Projects</h1>
          <p className={styles.tagline}>Make the right Hires</p>
        </div>
        <Hidden xs sm>
          <div class={styles.image}>
            <img src={image}></img>
          </div>
        </Hidden>
      </div>

      <div className={styles.search_container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <label for="job">Job-Type</label>
            <div className={styles.icon_container}>
              <img src={search}></img>
              <select id={styles.job} name="jobs">
                <option value="" disbaled hidden selected>
                  Eg Full-Time
                </option>
                <option value="select"> select </option>
              </select>
            </div>
          </div>

          <div className={styles.column}>
          <label for="job">Technology</label>
            <div className={styles.icon_container}>
              <img src={search}></img>
              <select id={styles.job} name="jobs">
                <option value="" disbaled hidden selected>
                  Eg Javascript
                </option>
                <option value="select"> select </option>
              </select>
            </div>
 
          </div>

          <div className={styles.column}>
          <label for="job">Expertise Level</label>
            <div className={styles.icon_container}>
              <img src={search}></img>
              <select id={styles.job} name="jobs">
                <option value="" disbaled hidden selected>
                  Eg Beginner Level
                </option>
                <option value="select"> select </option>
              </select>
            </div>
          </div>
        </div>

        <div className={styles.row}>

          <div className={styles.column}>
          <label for="job">City</label>
            <div className={styles.icon_container}>
              <img src={search}></img>
              <select id={styles.job} name="jobs">
                <option value="" disbaled hidden selected>
                  Eg Karachi
                </option>
                <option value="select"> select </option>
              </select>
            </div>
 
          </div>
          <div className={styles.column}>
          <label for="job">Country</label>
            <div className={styles.icon_container}>
              <img src={search}></img>
              <select id={styles.job} name="jobs">
                <option value="" disbaled hidden selected>
                  Eg Pakistan
                </option>
                <option value="select"> select </option>
              </select>
            </div>
 
          </div>

          <div className={styles.column} id={styles.submit}>
          <button type="submit" className={styles.btn}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringWindow;
