import React from 'react';
import { Icon } from '@iconify/react';
import emailOutline from '@iconify-icons/mdi/email';
import telegramIcon from '@iconify-icons/mdi/telegram';

function Contact () {
   return(
          <div id="contact">
            <h1>Contact</h1>
            <p>For an almost immediate response, I recommend communicating via Telegram.</p>
            <div className="contact-container">
              <div className="contact-list"> 
                <a href="mailto:samuele.bertocco@gmail.com"><Icon icon={emailOutline} />samuele.bertocco@gmail.com</a>
                <a href="https://www.t.me/brtsml"><Icon icon={telegramIcon} />brtsml</a>
              </div>
              <div className="contact-form">
                <form method="post" action="#">
                  
                  <label htmlFor="email">Name</label>
                  <input type="text" name="name" />
                  <label htmlFor="email">E-mail</label>
                  <input type="text" name="email" />
                  <label htmlFor="message">Message</label>
                  <input className="message" type="text" name="message" />
                  <button className="btn corner" type="submit" value="submit">Send!</button>
                </form>
              </div>
            </div>
          </div>
      );
}

export default Contact;