/* eslint-disable no-unused-vars */
import React from 'react';
import testImg from '../assets/house.jpg';

const Home = () => {
    return (
        <div className="flex justify-between">
            <div className="flex-auto"></div>
                <ul className="flex flex-1 flex-col md:flex-row justify-between">
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
            {/* <img className="cover_img" src={testImg} alt="test" /> */}
        </div>
    )
}

export default Home;