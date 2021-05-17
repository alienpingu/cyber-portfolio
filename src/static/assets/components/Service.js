import React, {Component} from 'react';

import { Icon } from '@iconify/react';

import alphaFBoxOutline from '@iconify-icons/mdi/alpha-f-box-outline';
import languageHtml5 from '@iconify-icons/mdi/language-html5';
import languagePhp from '@iconify-icons/mdi/language-php';
import dogIcon from '@iconify-icons/mdi/dog';
import languageCss3 from '@iconify-icons/mdi/language-css3';
import sassIcon from '@iconify-icons/mdi/sass';
import languageJavascript from '@iconify-icons/mdi/language-javascript';
import reactIcon from '@iconify-icons/mdi/react';
import nodejsIcon from '@iconify-icons/mdi/nodejs';
import cupIcon from '@iconify-icons/mdi/cup';
import languagePython from '@iconify-icons/mdi/language-python';
import elephantIcon from '@iconify-icons/mdi/elephant';

class Service extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }

  }
  
  changeView = (route) => this.props.parentClickHandler(route)


  render() {

    return(
          <div id="service">
            <h1>Service</h1>
              <div className="card-container">
                <div className="card corner"> 
                  <h2>Website development</h2>
                  <p>Using the latest technologies, i can turn your scratch or idea in a real website.</p>
                </div>
                <div className="card corner"> 
                  <h2>WebApp development</h2>
                  <p>ReactJS is a powerfull tool for build webapp, the future is now!</p>
                </div>
                <div className="card corner"> 
                  <h2>API development</h2>
                  <p>An API for all service, custom request and response for your app, bot or website</p>
                </div>
                <div className="card corner"> 
                  <h2>Jr. Full Stack Developer</h2>
                  <p>I can work on your project to add functionality or fix a problem.</p>
                </div>
              </div>
            <h1>Skills</h1>
            <div className="skill-container corner">
              <p><Icon icon={alphaFBoxOutline} />Figma</p>
              <p><Icon icon={languageHtml5} />HTML5</p>
              <p><Icon icon={languagePhp} />PHP</p>
              <p><Icon icon={dogIcon} />PugJS (Jade)</p>
              <p><Icon icon={languageCss3} />CSS3</p>
              <p><Icon icon={sassIcon} />Sass</p>
              <p><Icon icon={languageJavascript} />Javascript</p>
              <p><Icon icon={reactIcon} />ReactJS</p>
              <p><Icon icon={nodejsIcon} />NodeJS</p>
              <p><Icon icon={cupIcon} />GulpJS</p>
              <p><Icon icon={languagePython} />Python</p>
              <p><Icon icon={elephantIcon} />Postgres</p>
            </div>
          </div>
      );
  }

}

export default Service;
