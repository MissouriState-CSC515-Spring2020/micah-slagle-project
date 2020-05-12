import React, { Component } from 'react';
import '../App.css';

const APIkey = 'AIzaSyA2XD5vkwEV1lWC_sn_j4mF3iHXhG9fgGA';
const videoId = 'x3MZjf0FziE';

//'https://www.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&id=x3MZjf0FziE&key=AIzaSyA2XD5vkwEV1lWC_sn_j4mF3iHXhG9fgGA'

var finalUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&id=${videoId}&key=${APIkey}`



class IndividualVideo extends Component {

    constructor(props){
        super(props);

        this.state = {
            videoJSON: [],
            loading: true
        }
    }

    async componentDidMount() {
        const response = await fetch(finalUrl);
        const data = await response.json();
        this.setState({videoJSON: data.items[0], loading: false });
        
    }

    render(){
        console.log("this.state.videoJSON");
        console.log(this.state.videoJSON);
        return(
            <div>
                {this.state.loading || !this.state.videoJSON  ?  <div>loading..</div> 
                : <div><div><h1>{this.state.videoJSON.snippet.title}</h1></div> <div><iframe title = "epicurious video" width="560" height="315" src={"https://www.youtube.com/embed/"+this.state.videoJSON.id} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div></div>}                    
                    
            </div>
        )
    }
}

export default IndividualVideo;