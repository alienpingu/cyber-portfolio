import React from 'react';

import {Link, useLocation} from "react-router-dom";

import { Icon } from '@iconify/react';
import keyboardBackspace from '@iconify-icons/mdi/keyboard-backspace';

import Typing from 'react-typing-animation';

let usePageViews = () => {
  let location = useLocation();
  return location.pathname;
}

function BottomBar () {
  let path = usePageViews()
  return(

        <div id="bottombar">
            <Link to="/" className="ico">
              <Icon icon={keyboardBackspace} />
            </Link>
          	<Typing className="route" speed={1}>
			    Route: 
			    <Typing.Speed ms={10} />
			    {path}
		  	</Typing>
        </div>
  );
}


export default BottomBar;