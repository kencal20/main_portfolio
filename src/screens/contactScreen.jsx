import React from 'react'

export default function ContactScreen() {
    return (
        <div style={styles.container}>
            <h1>Contact us</h1>
            <form style={styles.form}>
                <input style={styles.input} placeholder='Name' />
                <br /><br />
                <input style={styles.input} placeholder='Email' />
                <br /><br />
                <textarea style={styles.textarea} placeholder='Write Your Message here..........'/>
            </form>
        </div>
    )
}

const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        paddingTop: '5em',
        alignItems: 'center',
        flexDirection: 'column',
    },
    form: {
        width: '70%',
        height: '70%',
        border: '1px solid black',
        borderRadius: '5px',
        padding: '10px',
        margin: '10px',

    },
    input: {
        width: '100%',
        border: '1px solid black',
        borderRadius: '5px',
        padding: '10px',
  
    },
    textarea:{
        width: '100%',
        height: '60%',
        border: '1px solid black',
        borderRadius: '5px',
        padding: '10px',
        resize: 'none',
        overflow: 'auto',
    
    }
}