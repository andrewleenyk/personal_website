import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
    <div>
        <section>
            <h1>Andrew Lee</h1>
            <h2>Software Engineer</h2>
            <p>
                Hi, I'm Andrew. I'm a software engineer based in the Boston. 
                I am currently looking for New Grad roles for the 2024 year.
                I graduate December 2023.
            </p>
            <Link to="/blog">Go to Blog</Link>

        </section>
    </div>
    );
};

export default Home;