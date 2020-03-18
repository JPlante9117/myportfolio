import React from 'react'
import { Link } from 'react-router-dom'

const LinkSection = () => {
    return(
        <section className="index-links">
            <Link to="/cases">
                <div className="index-boxlink-square">
                    <h3>Cases</h3>
                </div>
            </Link>
            <Link to="/portfolio">
                <div className="index-boxlink-rectangle">
                    <h3>Portfolio</h3>
                </div>
            </Link>
            <Link to="/">
                <div className="index-boxlink-square">
                    <h3>jacques</h3>
                </div>
            </Link>
            <Link to="/resume">
                <div className="index-boxlink-rectangle">
                    <h3>Resume</h3>
                </div>
            </Link>
            <Link to="/about">
                <div className="index-boxlink-square">
                    <h3>About</h3>
                </div>
            </Link>
            <Link to="/contact">
                <div className="index-boxlink-square">
                    <h3>Contact</h3>
                </div>
            </Link>
        </section>
    )
}

export default LinkSection