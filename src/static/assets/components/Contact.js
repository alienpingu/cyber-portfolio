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
                <form method="POST" action="https://mailthis.to/samuele.bertocco@gmail.com" encType="multipart/form-data">
                  
                  <label htmlFor="email">Name</label>
                  <input type="text" name="name" required/>
                  <label htmlFor="_replyto">E-mail</label>
                  <input type="email" name="_replyto" required/>
                  <label htmlFor="message">Message</label>
                  <input className="message" type="text" name="message" required/>
                  <button className="btn corner" type="submit" value="submit">Send!</button>
                </form>
              </div>
            </div>
          </div>
      );
}

export default Contact;