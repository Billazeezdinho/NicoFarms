import { useNavigate } from "react-router-dom";
import "./investor.css"

const Investors = () => {

  const navigate = useNavigate()
  return (
    <main className="investors">

      {/* HEADER */}
      <section className="investors-header">
        <h1>Investment Opportunities</h1>
        <p>
          Partner with Nico Farms for sustainable agricultural growth
        </p>
      </section>

      {/* WHY INVEST */}
      <section className="invest-section">
        <h2 className="section-title">Why Invest in Nico Farms</h2>

        <div className="invest-grid">
          <div className="invest-card">
            <h3>Growing Poultry Market</h3>
            <p>
              Nigeria's poultry industry is expanding rapidly with increasing demand.
            </p>
          </div>

          <div className="invest-card">
            <h3>Expanding Customer Base</h3>
            <p>
              Growing demand across bakeries, restaurants, retailers, and households.
            </p>
          </div>

          <div className="invest-card">
            <h3>Scalable Operations</h3>
            <p>
              Designed for expansion while maintaining quality and efficiency.
            </p>
          </div>

          <div className="invest-card">
            <h3>Established Foundation</h3>
            <p>
              Proven model with strong reputation since 2020.
            </p>
          </div>
        </div>
      </section>

      {/* GROWTH PLAN */}
      <section className="invest-section">
        <div className="invest-flex">
          <div className="invest-image">
            <img src="/api/placeholder/500/400" alt="Growth Plan" />
          </div>

          <div className="invest-text">
            <h2>Our Growth Plan</h2>
            <ul>
              <li><strong>Feed Production:</strong> In-house feed production.</li>
              <li><strong>Business Expansion:</strong> Scale production capacity.</li>
              <li><strong>Regional Distribution:</strong> Expand nationwide.</li>
              <li><strong>Product Diversification:</strong> Processed products.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PARTNERSHIPS */}
      <section className="invest-section">
        <h2 className="section-title">Partnership Opportunities</h2>

        <div className="invest-grid-3">
          <div className="invest-card center">
            <h3>Distributors</h3>
            <p>Distribute our poultry products in your region.</p>
            <button>Learn More</button>
          </div>

          <div className="invest-card center">
            <h3>Restaurants & Bakeries</h3>
            <p>Reliable supply partnerships.</p>
            <button onClick={() => navigate("/contact")}>Contact Us</button>
          </div>

          <div className="invest-card center">
            <h3>Investors</h3>
            <p>Join our growth journey.</p>
            <button onClick={() => navigate("/contact")}>Partner With Us</button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="invest-cta">
        <h2>Ready to Partner with Nico Farms?</h2>
        <p>Contact us today to explore opportunities.</p>
        <button onClick={() => navigate("/contact")}>Get in Touch</button>
      </section>

    </main>
  );
};

export default Investors;