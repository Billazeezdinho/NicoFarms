import "./values.css"

const Values = () => {
  const values = [
    {
      title: "Quality",
      description:
        "We are committed to delivering the highest quality poultry products through meticulous attention to every aspect of our farming process.",
      icon: "⭐",
    },
    {
      title: "Animal Welfare",
      description:
        "The welfare of our animals comes first. We ensure proper care, nutrition, and living conditions for all our birds.",
      icon: "🐔",
    },
    {
      title: "Sustainability",
      description:
        "Our farming practices are designed to be environmentally responsible and economically viable for long-term success.",
      icon: "🌱",
    },
    {
      title: "Integrity",
      description:
        "We conduct our business with honesty, transparency, and ethical practices in all our operations.",
      icon: "🤝",
    },
    {
      title: "Community Impact",
      description:
        "We strive to make a positive difference in the communities we serve through employment, food security, and economic development.",
      icon: "🏘️",
    },
  ];

  return (
    <main className="values">
      {/* HEADER */}
      <section className="values-header">
        <h1>Our Values</h1>
        <p>The principles that guide everything we do at Nico Farms</p>
      </section>

      {/* VALUES GRID */}
      <section className="values-container">
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="values-commitment">
        <h2>Our Commitment</h2>
        <p>
          At Nico Farms, our values are not just words – they are the foundation
          of our daily operations. We believe that by upholding these
          principles, we create not only quality products but also contribute
          positively to our community and the environment.
        </p>
      </section>
    </main>
  );
};

export default Values;
