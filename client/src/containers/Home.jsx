import React, {Component} from 'react';
import dayDreaming from "../../src/media/gifs/judas_daydreaming.gif"


class Home extends Component {
    render() {

        const iconSize ={
            fontSize: 30
        }
        return (
            <div>
                
                    <div className= "col-3">
                        <div className= "text-center col">
                        <img style={{marginTop:20}}src={dayDreaming} alt="dayDreaming" />
                        </div>
                    </div>
                
            </div>
                
   
        );
    }
}

export default Home;
