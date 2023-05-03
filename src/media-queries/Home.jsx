/* eslint-disable no-unused-vars */
import React from 'react';
import testImg from '../assets/house.jpg';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.home}>
            <div className="flex-auto"></div>
                <ul className={styles.nav_bar}>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>About</a>
                    </li>
                    <li>
                        <a href='#'>Contact</a>
                    </li>
                </ul>
            <img className="cover_img" src={testImg} alt="test" />
        </div>
    )
}

export default Home;