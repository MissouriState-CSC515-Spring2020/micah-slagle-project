import React, {Component} from 'react';
import '../App.css';

const APIkey = 'AIzaSyA2XD5vkwEV1lWC_sn_j4mF3iHXhG9fgGA';
const channelId = 'UCcjhYlL1WRBjKaJsMH_h7Lg';
const resultCount = 5;

//https://www.googleapis.com/youtube/v3/search?key=AIzaSyA2XD5vkwEV1lWC_sn_j4mF3iHXhG9fgGA&channelId=UCcjhYlL1WRBjKaJsMH_h7Lg&part=snippet,id&order=date&maxResults=5

var finalUrl = `https://www.googleapis.com/youtube/v3/search?key=${APIkey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${resultCount}`



class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            resultYt: []
        }
    }

    async componentDidMount() {
        const response = await fetch(finalUrl);
        const data = await response.json();
        const resultYt = data.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId)
        this.setState({resultYt});
        
    }

    render(){
        console.log(this.state.resultYt)
        return(
            <div>
                <h1>Recent Cooking Videos - Epicurious</h1>
                {
                        this.state.resultYt.map((link, i) =>{
                            console.log(link);
                            var frame = <div className="youtube" key={i}><iframe title="Epicurious Video" width="560" height="315" src={link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                            return frame;
                        })
                    }
            </div>
        )
    }
}

// const Home = () => {
//     return(
//         <div className="Recent" width="100%">
//         <h1 id="pageTitle">Kansas City Royals Channel</h1>
//         <div class="row">
//             <div id="row1" class="col-sm-5 p-2">
//                 <Link to="/Cmp"><img src={cmp} alt="Childrens Mercy Park" title="Childrens Mercy Park" width="98%" height="98%" /></Link>
//             </div>
//             <div class="col-sm-7 p-2">
//                 <Link to="/Cmp"><img src={kauf} alt="Kauffman Stadium" title="Kauffman Stadium" width="98%" height="98%" /></Link>
//             </div>
//         </div>
    
//         <div id="row2" class="row">
//             <div class="col-sm-7 p-2">
//                 <Link to="/Cmp"><img src={tmob} alt="T-Mobile Park" title="T-Mobile Park" width="98%" height="98%" /></Link>
//             </div>
//             <div class="col-sm-5 p-2">
//                 <Link to="/Cmp"><img src={arrowH} alt="Arrowhead Stadium" title="Arrowhead Stadium" width="98%" height="98%" /></Link>
//             </div>
//         </div>
    
//         <div id="row3" class="row">
//             <div class="col-sm-6 p-2">
//                 <Link to="/Cmp"><img src={lambeau} alt="Lambeau Field" title="Lambeau Field" width="98%" height="98%" /></Link>
//             </div>
//             <div class="col-sm-6 p-2">
//                 <Link to="/Cmp"><img src={busch} alt="Busch Stadium" title="Busch Stadium" width="98%" height="98%" /></Link>
//             </div>
//         </div>
//     </div>
//     )
// }

export default Home