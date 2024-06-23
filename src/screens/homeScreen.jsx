import React from 'react'
import profile from '../img/doc3.jpeg' 
export default function HomeScreen() {
    return (
        <div style={styles.mainContainer}>
            <div style={styles.intro}>
                <section>
                    <h1><strong>KENNETH ADJETEY ADJEI-MENSAH</strong>
                        <br />
                        Frontend Developer</h1>
                    <p>
                        I'm a passionate frontend developer with a strong focus on building clean,
                        responsive, and user-friendly web applications.
                    </p>
                </section>
                <section style={styles.profile.Container}>
                    <img src={profile} alt="profile" srcset="" />
                </section>
            </div>
        </div>
    )
}

const styles = {
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        padding:50
    },
    intro: {
        display:'flex',
        flexDirection:'row',    
    },
    profile:{
        Container:{
            marginLeft: 'auto',
        },
        img:{
            borderRadius:100,
            
        }
    }
}