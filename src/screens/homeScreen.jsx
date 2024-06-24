import React from 'react';
import profile from '../img/doc3.jpeg';
import CardThumbnail from '../components/cardThumbnail';
import { cardData } from '../components/projectcardData';
import styles from '../css/homeSceeen.module.css';



export default function HomeScreen() {

  return (
    <div className={styles.mainContainer}>
      <div className={styles.intro}>
        <section className={styles.introText}>
          <h1>
            <strong>KENNETH ADJETEY ADJEI-MENSAH</strong>
            <br />
            Software Developer
          </h1>
          <p>
            I'm a passionate frontend developer with a strong focus on building clean,
            responsive, and user-friendly web applications.
          </p>
        </section>
        <section className={styles.profileContainer}>
          <img src={profile} alt="profile" className={styles.profileImg} />
        </section>
      </div>

      <div className={styles.body}>
        <section className={styles.mainBody}>
          <h1>Featured Projects</h1>
          <div className={styles.cardContainer}>
            {cardData.map((item, index) => (
              <div key={index} className={styles.card}>
                <CardThumbnail
                  imgSrc={item.imgSrc}
                  imgAlt={item.imgAlt}
                  link={item.link}
                  title={item.title}
                >
                  {item.children}
                </CardThumbnail>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
