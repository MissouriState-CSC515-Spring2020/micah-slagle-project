import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return(
        <nav id="navBar" class="navbar navbar-default">
            <Link to="/" className="navKey">Recent Videos</Link>
            <Link to="/Mlb" className="navKey">Four Levels Playlist</Link>
            <Link to="/Cmp" className="navKey">Individual Video</Link>
        </nav>
    )
}

export default Navbar