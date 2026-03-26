import React from "react";
import SectionTitle from "../../components/SectionTitle";
import "./products.css";

function Products() {
  return (
    <>
      <div className="about-hero">
        <h1>Our Products</h1>
        <p>Quality poultry products from Nico Farms</p>
      </div>
      <main>
        <div className="container">
          {/* FRESH EGGS */}
          <section className="product-section">
            <div className="product-grid">
              <div className="product-image">
                <img src="/api/placeholder/500/400" alt="Fresh Eggs" />
              </div>

              <div className="product-text">
                <p className="label">Product</p>
                <h2>Fresh Eggs</h2>

                <p className="main-text">
                  Farm fresh eggs produced from properly fed and healthy birds.
                  Our eggs are nutritious and ideal for households, bakeries,
                  restaurants, and food vendors.
                </p>

                <p className="sub-text">
                  We take conscious action in feeding our birds with the right
                  nutrients to deliver high-quality and nutritious eggs. Our
                  commitment ensures superior quality and consistency.
                </p>
              </div>
            </div>
          </section>

          {/* BROILER CHICKENS */}
          <section className="product-section reverse">
            <div className="product-grid">
              <div className="product-image">
                <img src="/api/placeholder/500/400" alt="Broiler Chickens" />
              </div>

              <div className="product-text">
                <p className="label">Product</p>
                <h2>Broiler Chickens</h2>

                <p className="main-text">
                  Healthy broiler chickens raised with best farming practices,
                  ensuring high-quality poultry meat production.
                </p>

                <p className="sub-text">
                  Our broiler birds are raised in optimal conditions with proper
                  nutrition and care, resulting in premium poultry meat that
                  meets high standards.
                </p>
              </div>
            </div>
          </section>

          {/* FUTURE PRODUCTS */}
          <section className="product-section">
            <div className="product-grid">
              <div className="product-image">
                <img src="/api/placeholder/500/400" alt="Future Products" />
              </div>

              <div className="product-text">
                <p className="label">Product</p>
                <h2>Future Products</h2>

                <p className="main-text">
                  We are expanding into processed and packaged poultry products
                  to serve a wider market across Nigeria.
                </p>

                <p className="sub-text">
                  Our expansion plans include producing finished and
                  semi-finished poultry products, making quality food more
                  accessible nationwide.
                </p>
              </div>
            </div>
          </section>

          {/* CUSTOMERS */}
          <section className="customers">
            <h2>Our Customers</h2>

            <div className="customer-grid">
              <div className="customer-card">
                <h3>Bakeries & Confectioneries</h3>
                <p>Fresh eggs for baking and food production</p>
              </div>

              <div className="customer-card">
                <h3>Restaurants & Food Vendors</h3>
                <p>Quality poultry products for food service</p>
              </div>

              <div className="customer-card">
                <h3>Households & Retailers</h3>
                <p>Fresh, nutritious products for everyday use</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Products;
