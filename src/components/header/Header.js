import React from 'react';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <a href="https://www.ladeiraarmarinhos.com.br">
                <img src="logo.webp" alt="Logo" className={styles.logo} />
            </a>
        </header>
    )
}