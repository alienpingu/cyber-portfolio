import React, {Component} from 'react';

import Particles from 'react-particles-js';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Sound from 'react-sound';
import Info from './static/assets/sounds/typing.mp3';

import './static/assets/scss/styles.scss';

import TopBar from './static/assets/components/TopBar';
import Landing from './static/assets/components/Landing';
import Service from './static/assets/components/Service';
import Project from './static/assets/components/Project';
import Contact from './static/assets/components/Contact';

class App extends Component {

    constructor(props) {

        super(props);
        this.state = {
            route: "landing",
            config: {
              name: "Samuele Bertocco",
              info: {
                "desc": "Jr. Full Stack Developer",
                "email": "samuele.bertocco@gmail.com",
                "tg": "brtsml"
              },
              color: {
                primary: "",
                secondary: "",
                theme: ""
              }
            }
          }
        }




  render() {
    return(
      <Router>
        <Particles
          style={{ position: "absolute" }}
          height="95%"
          width="95%"
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
        

        <TopBar />
        <Switch>
          <Route path="/project">
            <Project  parentDataConfig={this.state.config}/>
            <Sound
              url={Info}
              playStatus={Sound.status.PLAYING}
              playFromPosition={0}
              onLoading={this.handleSongLoading}
              onPlaying={this.handleSongPlaying}
              onFinishedPlaying={this.handleSongFinishedPlaying}
            />
          </Route>
          <Route path="/service">
            <Service  parentDataConfig={this.state.config}/>
            <Sound
              url={Info}
              playStatus={Sound.status.PLAYING}
              playFromPosition={0}
              onLoading={this.handleSongLoading}
              onPlaying={this.handleSongPlaying}
              onFinishedPlaying={this.handleSongFinishedPlaying}
            />
          </Route>
          <Route path="/contact">
            <Contact  parentDataConfig={this.state.config}/>
            <Sound
              url={Info}
              playStatus={Sound.status.PLAYING}
              playFromPosition={0}
              onLoading={this.handleSongLoading}
              onPlaying={this.handleSongPlaying}
              onFinishedPlaying={this.handleSongFinishedPlaying}
            />
          </Route>
           <Route path="/">
            <Landing  parentDataConfig={this.state.config}/>
            <Sound
              url={Info}
              playStatus={Sound.status.PLAYING}
              playFromPosition={0}
              onLoading={this.handleSongLoading}
              onPlaying={this.handleSongPlaying}
              onFinishedPlaying={this.handleSongFinishedPlaying}
            />
          </Route>
        </Switch>


        
      </Router>)


    }
  }

export default App;

