import React, {Component} from 'react';

import Particles from 'react-particles-js';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './static/assets/scss/styles.scss';

import TopBar from './static/assets/components/TopBar';
import BottomBar from './static/assets/components/BottomBar';
import Landing from './static/assets/components/Landing';
import Service from './static/assets/components/Service';
import Project from './static/assets/components/Project';
import Contact from './static/assets/components/Contact';

class App extends Component {

    constructor(props) {

        super(props);
        this.state = {
            config: {
              name: "Samuele Bertocco",
              info: {
                "desc": "Jr. Full Stack Developer",
                "email": "samuele.bertocco@gmail.com",
                "tg": "brtsml"
              }
            }
          }
        }




  render() {
    return(
      <Router>
        <Particles
          style={{ position: "absolute" }}
          height="100%"
          width="100%"
          className="d-none d-md-block"
          params={{
            particles: {
              color: {
                value: "#a1ecfb"
              },
              line_linked: {
                color: {
                  value: "#26dafd"
                }
              },
              number: {
                value: 50
              },
              size: {
                value: 3
              }
            }
          }}
        />
        

        <Switch>
          <Route path="/project">
            <TopBar />
            <Project  parentDataConfig={this.state.config}/>
            <BottomBar />
          </Route>
          <Route path="/service">
            <TopBar />
            <Service  parentDataConfig={this.state.config}/>
            <BottomBar />
          </Route>
          <Route path="/contact">
            <TopBar />
            <Contact  parentDataConfig={this.state.config}/>
            <BottomBar />
          </Route>
           <Route path="/">
            <Landing  parentDataConfig={this.state.config}/>
          </Route>
        </Switch>
      </Router>)


    }
  }

export default App;

