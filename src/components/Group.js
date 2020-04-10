import React, {Component} from 'react';
import '../App.css';



const APIkey = 'AIzaSyA2XD5vkwEV1lWC_sn_j4mF3iHXhG9fgGA';
const playlistId = 'PLz3-p2q6vFYUDvVUu_aPhGUV-3ROIa6d2';
const resultCount = 7;

//'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2Cid&maxResults=10&playlistId=PLz3-p2q6vFYUDvVUu_aPhGUV-3ROIa6d2&key=AIzaSyA2XD5vkwEV1lWC_sn_j4mF3iHXhG9fgGA'

var finalUrl = `https://www.googleapis.com/youtube/v3/playlistItems?key=${APIkey}&playlistId=${playlistId}&part=snippet,id&maxResults=${resultCount}`

console.log(finalUrl);

class Playlist extends Component {

    constructor(props){
        super(props);

        this.state = {
            resultYtPlaylist: []
        }
    }

    async componentDidMount() {
        const response = await fetch(finalUrl);
        const data = await response.json();
        const resultYtPlaylist = data.items.map(obj => "https://www.youtube.com/embed/"+obj.snippet.resourceId.videoId)
        this.setState({resultYtPlaylist});
        
    }

    render(){
        //console.log(finalUrl);
        console.log(this.state.resultYtPlaylist)
        return(
            <div>
                <h1>Four Levels Playlist</h1>
                {
                        this.state.resultYtPlaylist.map((link, i) =>{
                            console.log(link);
                            var frame = <div className="youtube" key={i}><iframe title="Four Levels Playlist Videos" width="560" height="315" src={link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                            return frame;
                        })
                    }
            </div>
        )
    }
}

export default Playlist;