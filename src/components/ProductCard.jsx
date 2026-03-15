function ProductCard({ title, description }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "8px",
        width: "250px"
      }}
    >
      <h3>{title}</h3>

      <p>{description}</p>

      <button style={{marginTop: "10px"}}>
        Learn More
      </button>
    </div>
  );
}

export default ProductCard;
