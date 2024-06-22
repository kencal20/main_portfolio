import React from 'react'
import logo from '../logo.svg'

import { Button } from 'react-bootstrap'
export default function HomeScreen() {
    return (
        <>

            <div style={styles.container}>
                <div style={styles.info}>
                    <img src={logo} style={styles.logo} alt="logo" />
                    <h3>KENNETH ADJETEY ADJEI-MENSAH</h3>
                </div>
                <div style={styles.content}>
                    <h1 style={styles.h1}>About Me</h1>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sit similique quaerat aperiam? Esse, incidunt.
                    </p>
                    <Button>Read more</Button>
                </div>
            </div>
        </>
    )
}

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        minWidth: '100vw',
        minHeight: '100vh',
    },
    info: {
        textAlign: 'center',
    },
    logo: {
        height: '10em',
        width: '10em',
        margin: '3em',
        padding: '1em',
        borderRadius: '50%',
        border: '1px solid #000',
    },
    content: {
        margin: '3em',
    }
}