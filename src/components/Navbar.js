import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return(
        <nav id="navBar">
            <Link to="/" class="navKey">Recent Photos</Link>
            <Link to="/Mlb" class="navKey">MLB</Link>
            <Link to="/Mlb" class="navKey">NFL</Link>
            <Link to="/Mlb" class="navKey">NBA</Link>
            <Link to="/Mlb" class="navKey">MLS</Link>
            <Link to="/Mlb" class="navKey">NHL</Link>
        </nav>
    )
}

export default Navbar