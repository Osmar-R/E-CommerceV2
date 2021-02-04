import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import products from "../data/products.json";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

// ternary if : => condition ? when the cond is true : when its false;
const renderProduct = (numberOfProducts) => ({title, description , price , imageClass } , index) => { 

    
    const isEven = index % 2 === 0 ? true : false;
    if(isEven){
    return (
  <div key={index} className={numberOfProducts === 1 ? "home-details first-detail" : "home-details"} > 
    <div className={imageClass}>
      <h2>{title}</h2>
    </div>

    <div className="detail-container">
      <p>
        {description} <br />{" "}
        <em>Price:  ${price}</em> <br />
       per square foot
      </p>
    </div>
  </div>
);
    }else{
        return (<div className="home-details-2">
        <div className="detail-container">
          <p>
            {description} <br /><em>Price: ${price} per square foot</em>
          </p>
        </div>

        <div className={imageClass}>
          <h2>{title}</h2>
        </div>
      </div>
)
    }
}

function Products() {

  const [searchValue , setSearchValue ] = useState(null);
  
  const filterProducts = () => {
      if(searchValue === null || searchValue === "") return products

      return products.filter(({title , price }) => title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) || price === searchValue)
  }
  const handleSearch = (e) => {
    const value = e.target.value;
    console.log(value);
    setSearchValue(value);
  }

  return (
    <div>
      <section>
        <div className="service-container">
          <h1>Our Services</h1>
          <input type="text" onChange={handleSearch} value={searchValue} placeholder="Search" />
        </div>
      </section>
      <main>
        <section className="services">
        {filterProducts() && 
            filterProducts().map(renderProduct(filterProducts().length))
        }
          {}
        </section>
      </main>
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
  );
}

export default Products;
