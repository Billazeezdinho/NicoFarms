function Footer() {
  return (
    <footer style={{padding: "30px", background: "#1f6b3a", color: "white"}}>
      
      <h3>Nico Farms</h3>

      <p>
        Providing fresh eggs and quality poultry through
        sustainable farming practices.
      </p>

      <p>
        Location: Igbessa, Ogun State
      </p>

      <p>
        © {new Date().getFullYear()} Nico Farms. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;
