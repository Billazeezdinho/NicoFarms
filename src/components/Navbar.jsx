import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav style={{display: "flex", justifyContent: "space-between", padding: "20px"}}>
        
        <h2>Nico Farms</h2>

        <ul style={{display: "flex", gap: "20px", listStyle: "none"}}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/sustainability">Sustainability</Link></li>
          <li><Link to="/values">Values</Link></li>
          <li><Link to="/investors">Investors</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

      </nav>
    </header>
  );
}

export default Navbar;
