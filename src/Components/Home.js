import React from 'react'
import ImageSlider from './ImageSlider'
import { SliderData } from './SliderDarta';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Home() {



    return (

        <div >

            <main>
                <section>
                    <div class="Background-Image-1st-section">
                        <div class="hero-sec-container">
                            <h1>
                                Paving The Way
                    </h1>
                        </div>
                        <div class="Homepage-description">
                            <h2>Quinteros concret, LLC is a local family
                            based business that specializes in detailed stamped concrete any many form of concrete pouring.
                            With 20+ years of experience we guarantee that we will not let you down!
                    </h2>
                        </div>
                    </div>
                </section>
            </main>
            <ImageSlider slides={SliderData} />

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


export default Home;




