function Hero() {
  return (
    <section
      style={{
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
        textAlign: "center"
      }}
    >
      <h1>Fresh Eggs & Quality Poultry</h1>

      <p>
        Responsibly farmed poultry products serving
        communities across Ogun and Lagos State.
      </p>

      <button style={{marginTop: "20px", padding: "10px 20px"}}>
        View Products
      </button>

    </section>
  );
}

export default Hero;
