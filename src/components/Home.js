import React from 'react';
import '../App.css';
import cmp from '../photos/sportingPark.jpg';
import kauf from '../photos/kauffmanstadium.jpg';
import tmob from '../photos/seattle-mariners.jpg';
import arrowH from '../photos/Arrowhead.jpg';
import lambeau from '../photos/greenbaypack.jpg';
import busch from '../photos/buschstadium_0.jpg';
import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <div className="Recent">
        <h1 id="pageTitle">Professional Stadiums I've Visited - Recent Photos</h1>

        <div id="row1">
            <Link to="/Cmp"><img src={cmp} alt="Childrens Mercy Park" title="Childrens Mercy Park" width="37%" /></Link>
            <Link to="/Cmp"><img src={kauf} alt="Kauffman Stadium" title="Kauffman Stadium" width="60%" /></Link>
        </div>
    
        <div id="row2">
            <Link to="/Cmp"><img src={tmob} alt="T-Mobile Park" title="T-Mobile Park" width="55%" /></Link>
            <Link to="/Cmp"><img src={arrowH} alt="Arrowhead Stadium" title="Arrowhead Stadium" width="43%" /></Link>
        </div>
    
        <div id="row3">
            <Link to="/Cmp"><img src={lambeau} alt="Lambeau Field" title="Lambeau Field" width="53%" /></Link>
            <Link to="/Cmp"><img src={busch} alt="Busch Stadium" title="Busch Stadium" width="45%" /></Link>
        </div>
    </div>
    )
}

export default Home