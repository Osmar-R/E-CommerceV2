import React from 'react'
import ImageSlider from './ImageSlider'
import { SliderData } from './SliderDarta';


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
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-instagram"></i>
                    </div>
                </nav>
            </footer>
            
            


        </div>

    )
}




export default Home;




