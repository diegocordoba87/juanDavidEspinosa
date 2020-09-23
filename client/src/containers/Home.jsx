import React, { Component } from "react";
import "../style/style.css";
import dayDreaming from "../../src/media/gifs/judas_daydreaming.gif";
import Photography from "../../src/media/gifs/judas_photography.png";

class Home extends Component {
  render() {
    const iconSize = {
      fontSize: 30,
    };
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="hovereffect">
                <img
                  className="img-responsive"
                  style={{ marginTop: 20, width: "100%" }}
                  src={dayDreaming}
                  alt="Videos"
                />
                <div className="overlay">
                  <h2>Videos</h2>
                  <p>
                    <a href="#">Check out my videos</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <img
              className="img-responsive"
                style={{ marginTop: 20, width: "100%" }}
                src={Photography}
                alt="Photography"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
