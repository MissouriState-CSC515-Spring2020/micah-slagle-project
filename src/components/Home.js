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
        <div className="Recent" width="100%">
        <h1 id="pageTitle">Professional Stadiums I've Visited - Recent Photos</h1>
        <div class="row">
            <div id="row1" class="col-sm-5 p-2">
                <Link to="/Cmp"><img src={cmp} alt="Childrens Mercy Park" title="Childrens Mercy Park" width="98%" height="98%" /></Link>
            </div>
            <div class="col-sm-7 p-2">
                <Link to="/Cmp"><img src={kauf} alt="Kauffman Stadium" title="Kauffman Stadium" width="98%" height="98%" /></Link>
            </div>
        </div>
    
        <div id="row2" class="row">
            <div class="col-sm-7 p-2">
                <Link to="/Cmp"><img src={tmob} alt="T-Mobile Park" title="T-Mobile Park" width="98%" height="98%" /></Link>
            </div>
            <div class="col-sm-5 p-2">
                <Link to="/Cmp"><img src={arrowH} alt="Arrowhead Stadium" title="Arrowhead Stadium" width="98%" height="98%" /></Link>
            </div>
        </div>
    
        <div id="row3" class="row">
            <div class="col-sm-6 p-2">
                <Link to="/Cmp"><img src={lambeau} alt="Lambeau Field" title="Lambeau Field" width="98%" height="98%" /></Link>
            </div>
            <div class="col-sm-6 p-2">
                <Link to="/Cmp"><img src={busch} alt="Busch Stadium" title="Busch Stadium" width="98%" height="98%" /></Link>
            </div>
        </div>
    </div>
    )
}

export default Home