import React, {Component} from 'react';

import { Icon } from '@iconify/react';

import languageHtml5 from '@iconify-icons/mdi/language-html5';
import languageCss3 from '@iconify-icons/mdi/language-css3';
import languageJavascript from '@iconify-icons/mdi/language-javascript';
import sassIcon from '@iconify-icons/mdi/sass';
import cupIcon from '@iconify-icons/mdi/cup';
import languagePhp from '@iconify-icons/mdi/language-php';


class Service extends Component {
	constructor(props) {
		super(props);

		this.state = {}

	}


	render() {

		return(
					<div id="project">
						<div className="project-container">
							<div className="project">
								<h2>SeasonCycles</h2>
								<p className="ico-container">
									<Icon icon={languageHtml5} />
									<Icon icon={languagePhp} />
									<Icon icon={cupIcon} />
									<Icon icon={sassIcon} />
									<Icon icon={languageJavascript} />
								</p>
								<p className="text-container">Front End development in the first ticker research and analysis platform tailored for professional traders and novice investors.</p>
							</div>
							<div className="project">
								<h2>Timelosophy</h2>
								<p className="ico-container">
									<Icon icon={languageHtml5} />
									<Icon icon={languagePhp} />
									<Icon icon={sassIcon} />
									<Icon icon={languageJavascript} />
								</p>
								<p className="text-container">Front End development in project menajer modern webapp prototype, future updates to ReactJS</p>
							</div>
							<div className="project">
								<h2>Rivi Consulting</h2>
								<p className="ico-container">
									<Icon icon={languageHtml5} />
									<Icon icon={languageCss3} />
									<Icon icon={languageJavascript} />
								</p>
								<p className="text-container">Branding for a real estate consultancy agencies, modern and fast website with seo optimized for targeted advertising campaign.</p>
							</div>
							<div className="project">
								<h2>HomeButNotAlone</h2>
								<p className="ico-container">
									<Icon icon={languageHtml5} />
									<Icon icon={languageCss3} />
									<Icon icon={languageJavascript} />
								</p>
								<p className="text-container">Landing page for associative project, modern and extreme speedy website.</p>
							</div>
						</div>
					</div>
			);
	}

}

export default Service;
