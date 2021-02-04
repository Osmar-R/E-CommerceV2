import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";




function Contact() {
    return (



        <div>
             
            <form className="contact-form">
                <div className="contact-form-inputs">
                    <h1>Contact Us</h1>
                    <label for="fname">Full name</label>
                    <input type="text" id="fname" name="fname" placeholder="Full name" required />
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email" placeholder="Your.email.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-+]+/.[a-z]{2-4}" required />
                    <label for="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="000-000-0000" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required />
                    <label for="text">Message</label>
                    <textarea id="text" name="comment" placeholder="Your Comment" required></textarea>
                    <input type="submit" class="btn-for-submit" />
                </div>
            </form>
            <footer>
        <div className="copyright">
          <p>All Rights Reserved © Quinteros Concrete</p>
        </div>
        <nav>
          <div className="social">
          <a href="https://www.facebook.com/Quintersos-Concrete-109518420455428"
              className="facebook social">
              <FontAwesomeIcon icon={faFacebook} size="3x" />
          </a>
          <a href="https://twitter.com/?logout=1612444467504" className="twitter social">
               <FontAwesomeIcon icon={faTwitter} size="3x" />
          </a>
          <a href="https://www.instagram.com/"
              className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="3x"  />
          </a>
          </div>
        </nav>
      </footer>
        </div>

    )
}

export default Contact; 