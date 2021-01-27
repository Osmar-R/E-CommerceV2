import React, { useState } from "react";
import products from "../data/products.json";

const renderProduct = (numberOfProducts) => ({title, description , price , imageClass } , index) => { 

    
    const isEven = index % 2 === 0 ? true : false;
    if(isEven){
    return (
  <div key={index} className="home-details" style={{ margin : numberOfProducts === 1 ? 40 : 0}}>
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

      return products.filter(({title , price }) => title.includes(searchValue) || price === searchValue)
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
            <i className="fa fa-facebook"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-instagram"></i>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default Products;
