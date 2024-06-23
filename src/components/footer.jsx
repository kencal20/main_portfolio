import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/footer.module.css';

export default function FooterComponent() {
    const year = new Date().getFullYear()
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p className={styles.footerText}>&copy; {year} Kenneth Adjei-Mensah. All rights reserved.</p>
                <nav className={styles.footerNav}>
                    <Link to="#" className={styles.footerLink}>Terms of Service</Link>
                    <Link to="#" className={styles.footerLink}>Privacy</Link>
                </nav>
            </div>
        </footer>
    );
}


