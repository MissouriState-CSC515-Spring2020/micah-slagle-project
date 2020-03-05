import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return(
        <nav id="navBar">
            <Link to="/" className="navKey">Recent Photos</Link>
            <Link to="/Mlb" className="navKey">MLB</Link>
            <Link to="/Mlb" className="navKey">NFL</Link>
            <Link to="/Mlb" className="navKey">NBA</Link>
            <Link to="/Mlb" className="navKey">MLS</Link>
            <Link to="/Mlb" className="navKey">NHL</Link>
        </nav>
    )
}

export default Navbar