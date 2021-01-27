import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        
            <div className="Navbar">
                <div className="Logo">
                    <h2> Quniteros Concrete</h2>
                </div>
                <div className="number">
                    <h3>Contact US
                        <br/>704-707-7517
                    </h3>
                </div>
                <nav className="Nav-links">
                    <ul>
                       <Link to='/'><li><a >Home</a></li></Link>
                       <Link to='/products'><li><a >Services</a></li></Link>
                       <Link to='/contact'><li><a >Contact</a></li></Link>
                    </ul>                   
               </nav>
            </div>

    )
}




export default Navbar;
