import React, {Component} from 'react';
import dayDreaming from "../../src/media/gifs/judas_daydreaming.gif"
import Photography from "../../src/media/gifs/judas_photography.gif"

class Home extends Component {
    render() {

        const iconSize ={
            fontSize: 30
        }
        return (
            <div>
                <div className="container">
                    <div className="row">
                    <div className= "col">
                        <img style={{marginTop:20}}src={dayDreaming} alt="dayDreaming" />
                    </div>
                    <div className= "col">
                        <img style={{marginTop:20}}src={Photography} alt="dayDreaming" />
                    </div>
                    </div>
                </div>
            </div>
                
   
        );
    }
}

export default Home;
