import React, {Component} from 'react';
import {Link} from "react-router-dom";


import Hero from '../img/hero.svg';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.parentDataConfig

  }
  


  render() {

    return(
          <div id="landing">
            <img src={Hero} alt="ico" />
            <div className="text">
              <h1>{this.state.name}</h1>
              
             <p>{this.state.info.desc}</p>
            </div>
            <div className="btn-container">
              <Link to="/service" className="btn corner">Services</Link>
              <Link to="/project" className="btn corner">Project</Link>
              <Link to="/contact" className="btn corner">Contact</Link>
            </div>
          </div>
      );
  }

}

export default Landing;