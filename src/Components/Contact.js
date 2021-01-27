import React from 'react'




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
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-instagram"></i>
                    </div>
                </nav>
            </footer>
        </div>

    )
}

export default Contact; 