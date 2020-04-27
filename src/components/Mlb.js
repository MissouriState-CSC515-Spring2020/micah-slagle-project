import React from 'react';
import '../App.css';
import kauf from '../photos/kauffmanstadium.jpg';
import tmob from '../photos/seattle-mariners.jpg';
import busch from '../photos/buschstadium_0.jpg';
import { Link } from 'react-router-dom';

const Mlbstadiums = () => {
    return(
        <div className="Mlbstadiums">
        <h1 id="pageTitle">MLB Stadiums</h1>
        <h4>Kauffman Stadium</h4>
        <div id="row1">
            <p>Kauffman Stadium is home to the Kansas City Royals. I've spent many days there during Kansas City Summers.</p>
            <Link to="/Cmp"><img src={kauf} alt="Kauffman Stadium" title="Kauffman Stadium" width="40%" /></Link>
        </div>

        <h4>T-Mobile Park</h4> 
        <div id="row2">
            <p>
                T-Mobile Park is home to the Seattle Mariners. I went to Seattle on vacation once, and they happened to
                be playing the Royals during the vacation so my family and I went to a game. The stadium was quite nice.
            </p>
            <Link to="/Cmp"><img src={tmob} alt="T-Mobile Park" title="T-Mobile Park" width="40%" /></Link>
        </div>

        <h4>Busch Stadium</h4>
        <div id="row3">
            <p>
                Busch Stadium is Home to the Saint Louis Cardinals. I've gone to a couple of games there while visiting
                friends and family. I really enjoy how the skyline of the city is visible out above center field.
            </p>
            <Link to="/Cmp"><img src={busch} alt="Busch Stadium" title="Busch Stadium" width="40%" /></Link>
        </div>
    </div>
    )
}

export default Mlbstadiums