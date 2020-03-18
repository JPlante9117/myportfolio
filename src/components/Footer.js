import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return(
        <footer>
            <ul className="footer-links-main">
                <li><Link to="#">Home</Link></li>
                <li><Link to="#">Projects</Link></li>
                <li><Link to="#">Portfolio</Link></li>
                <li><Link to="#">About Me</Link></li>
                <li><Link to="#">Contact</Link></li>
            </ul>
            <ul className="footer-links-projects">
                <li style={{color: 'white', textTransform: 'uppercase'}}>Latest Projects</li>
                <li><Link to="#">App A Day</Link></li>
                <li><Link to="#">Game Organizer</Link></li>
                <li><Link to="#">Forum Maker</Link></li>
                <li><Link to="#">Pokemon Research Logger</Link></li>
            </ul>
            <div className="footer-sm">
                <Link to="#"><i className="fa fa-linkedin-square" /></Link>
                <Link to="#"><i className="fa fa-github-square" /></Link>
                <Link to="#"><i className="fa fa-envelope" /></Link>
            </div>
            <div className="footer-sm">
                <Link to="#"><i className="fa fa-twitter-square" /></Link>
                <Link to="#"><i className="fa fa-instagram" /></Link>
            </div>
        </footer>
    )
}

export default Footer