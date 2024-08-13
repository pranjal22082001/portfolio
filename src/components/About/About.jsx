
import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              Frontend developer skilled in crafting responsive, user-friendly interfaces using HTML, CSS, and JavaScript.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Engineer</h3>
              <p>
              Frontend developer skilled in crafting responsive, user-friendly interfaces using HTML, CSS, and JavaScript.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/devops.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Devops Engineer</h3>
              <p>
              DevOps engineer experienced in Docker, containerization, and seamless deployment processes, ensuring efficient CI/CD pipelines.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;