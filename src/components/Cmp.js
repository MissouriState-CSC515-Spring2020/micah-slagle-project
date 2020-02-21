import React from 'react';
import '../App.css';
import cmp from '../photos/sportingPark.jpg';

const Cmp = () => {
    return(
        <div className="SportingKC">
            <h1 id="pageTitle">Children's Mercy Park - Sporting KC</h1>
            <div id="row1">
                <img src={cmp} alt="Childrens Mercy Park" title="Childrens Mercy Park" width="50%"/>
            </div>
            <p>
                So far, Childrens Mercy Park is the only MLS stadium I have visited. It is home to Sporting KC,
                Kansas City's Professional Soccer Team. As I am from Kansas City, and Soccer is my favorite sport
                Sporting KC became my favorite team, out of any sport.
            </p>
            <p>
                I really enjoy this Stadium, partially because of how relatively small it is. There is no bad
                seat in the house, and it always feels as though an individual is very close to the action. Front
                row seats are relatively cheap too, much cheaper than front row seats at other sporting venues. The
                small atmosphere for the stadium really gives this the environment a unified feel. 
            </p>
            <p>
                Childrens Mercy Park holds 18,467 for soccer matches and 25,000 for concerts. It opened in 2011.
            </p>
        </div>
    )
}

export default Cmp