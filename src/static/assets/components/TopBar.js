import React, {Component} from 'react';

import {Link} from "react-router-dom";

class TopBar extends Component {
  constructor(props) {
    super(props);

    this.state = {}

  }


  render() {

  return(
          <div id="topbar">
            <Link to="/" 
              className="ico-container">
               <p>{"<BRTSML />"}</p>
            </Link>
          </div>
      );
  }

}

export default TopBar;