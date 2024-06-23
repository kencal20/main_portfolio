import React from 'react';

export default function ContactScreen() {
    return (
        <div style={styles.container}>
            <form style={styles.form}>
                <h1>Contact Us</h1>
                <input style={styles.input} placeholder='Name' />
                <br /><br />
                <input style={styles.input} placeholder='Email' />
                <br /><br />
                <textarea style={styles.textarea} placeholder='Write your message here...'/>
                <br /><br />
                <button type="submit" style={styles.button}>Submit</button>
            </form>
        </div>
    );
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
    textarea: {
        width: '100%',
        height: '150px', // Set a fixed height
        border: '1px solid black',
        borderRadius: '5px',
        padding: '10px',
        resize: 'none',
        overflow: 'auto',
    },
    button: {
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#000',
        color: '#fff',
        cursor: 'pointer',
    },
};
