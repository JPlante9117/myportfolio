import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
        <Link to="/" className="header-brand">Jacques Plante</Link>
        <nav>
          <ul>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/aboutme">About Me</Link></li>
            <li><Link to="/contact">Contact Me</Link></li>
          </ul>
          <Link to="#" className="header-cases">Cases</Link>
        </nav>
      </header>
    )
}

export default Header