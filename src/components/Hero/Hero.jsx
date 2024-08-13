import React from 'react'
import {getImageUrl} from "../../utils"
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Pranjal</h1>
            <p className={styles.description}>I’m a software developer with hands-on experience from my internship, specializing in Java, Spring Boot, and Docker. I've developed efficient APIs, optimized system performance, and streamlined deployments. Reach out if you’d like to learn more!</p>
            <a href="mailto:pranjal22var@gmail.com" className={styles.contactBtn}> Contact me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Her" />

        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />




    </section>
  )
}

export default Hero