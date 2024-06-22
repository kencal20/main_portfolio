import React from 'react'
import { Button } from 'react-bootstrap'
export default function NotFound() {
    return (
        <div style={styles.container}>
            <h1>404</h1>
            <p >Oops! The page you're looking for doesn't exist.</p>
            <Button variant="primary" href="/">Go Home</Button>

        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        minWidth: '100vw',
        minHeight: '100vh',
        color:'white'
    }
}
