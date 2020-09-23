import React, {Component} from 'react';
import dayDreaming from "../../src/media/gifs/judas_daydreaming.gif"
import Photography from "../../src/media/gifs/judas_photography.png"

class Home extends Component {
    render() {

        const iconSize ={
            fontSize: 30
        }
        return (
            <div>
                <div className="container">
                    <div className="row">
                    <div className= "col-lg-6 col-sm-12">
                        <img style={{marginTop:20, width:'100%'}}src={dayDreaming} alt="dayDreaming" />
                    </div>
                    <div className= "col-lg-6 col-sm-12">
                        <img style={{marginTop:20, marginLeft: 10, width: '100%'}}src={Photography} alt="dayDreaming" />
                    </div>
                    </div>
                </div>
            </div>
                
   
        );
    }
}

export default Home;
