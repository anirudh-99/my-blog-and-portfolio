import { Link } from 'gatsby';
import React from 'react';
import * as styles from './Header.module.scss';

export default function Header(){
    return (
        <div className={styles.wrapper}>
            <Link className={styles.link} to="/about-me">About Me</Link>
            <Link className={styles.link} to="/">Blogs</Link>
        </div>
    );
}