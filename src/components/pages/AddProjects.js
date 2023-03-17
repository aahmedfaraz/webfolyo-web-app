import React from "react";
import styles from "./css/AddProjects.module.css";
import delete_icon from "../../assets/svgs/delete_icon.svg";
import edit_icon from "../../assets/svgs/edit_icon.svg";
import uplaod_image from "../../assets/svgs/uplaod_image.svg";

const AddProjects = () => {
  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.image_container}>
          <div className={styles.edit_options}>
            <img src={delete_icon}></img>
            <img src={edit_icon}></img>
          </div>
          <div className={styles.file_uplaod}>
            <img id={styles.uplaodimage} src={uplaod_image}></img>
          </div>
        </div>

        <div className={styles.content_container}>
          <div className={styles.project_info}>
            <h2>Project Name</h2>
            <span>
              <label className={styles.label} for='domain'>
                Domain:
              </label>
              <input className={styles.user_input}></input>
            </span>

            <span>
              <label className={styles.label} for='technology'>
                Technology:
              </label>
              <input className={styles.user_input} type='text'></input>
            </span>

            <span>
              <label className={styles.label} for='category'>
                Category:
              </label>
              <select className={styles.user_input} id={styles.list}>
                <option value='select'>select</option>
              </select>
            </span>

            <span>
              <label className={styles.label}>Role:</label>
              <input className={styles.user_input} type='text'></input>
            </span>
          </div>

          <div className={styles.project_details}>
            <h2>Project Overview</h2>
            <textarea rows='3' cols='6' className={styles.text}></textarea>
          </div>
          <div className={styles.project_links}>
            <span>
              <label className={styles.labels} for='livelink'>
                Live Link:
              </label>
              <input className={styles.user_input}></input>
            </span>

            <span>
              <label className={styles.labels} for='github'>
                Github Link:
              </label>
              <input className={styles.user_input}></input>
            </span>

            <span>
              <label className={styles.labels} for='organization'>
                Company:
              </label>
              <input className={styles.user_input}></input>
            </span>

            <div className='form-check' id={styles.checkid}>
              <input
                className='form-check-input'
                type='checkbox'
                value=''
                id='flexCheckbutton'
              ></input>
              <label
                className='form-check-label'
                id={styles.checklabel}
                for='flexCheckIndeterminate'
              >
                Add Custom Button
              </label>
            </div>

            <div className={styles.customize_btn}>
              <span>
                <label className={styles.label} for='livelink'>
                  Button Text:
                </label>
                <input className={styles.btn_input}></input>
              </span>

              <span>
                <label className={styles.label} for='livelink'>
                  Button Link:
                </label>
                <input className={styles.btn_input}></input>
              </span>
            </div>

            <div className={styles.btn_container}>
              <button className={styles.crudbutton}>Add Project</button>
              <button className={styles.crudbutton}>Delete Project</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProjects;
