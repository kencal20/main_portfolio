import React from 'react'
import logo from '../logo.svg'
import { Button } from 'react-bootstrap'
import styles from '../css/homeSceeen.module.css'

export default function HomeScreen() {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <img src={logo} className={styles.logo} alt="logo" />
                <h3>KENNETH ADJETEY ADJEI-MENSAH</h3>
                <section>
                    <a href='https://www.facebook.com/ken.cal.547/'>
                        <ion-icon name="logo-facebook" size='large'></ion-icon>
                    </a>
                    <ion-icon name="logo-instagram" size='large' />

                    <a href='https://github.com/kencal20' style={{ color: 'black' }}>
                        <ion-icon name="logo-github" size='large' />
                    </a>
                </section>

            </div>
            <div className={styles.content}>
                <h1>About Me</h1>
                <hr />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sit similique quaerat aperiam? Esse, incidunt.
                </p>
                <Button>Read more</Button>
            </div>
        </div>
    )
}
