import "./values.css"

const Values = () => {
  const values = [
    {
      title: "Quality",
      description:
        "We are committed to delivering high-quality poultry products through proper nutrition, professional farm management, and consistent operational standards.",
      icon: "⭐",
    },
    {
      title: "Animal Welfare",
      description:
        "We believe healthy animals produce better outcomes. We prioritize the welfare, health, safety, and humane treatment of our birds at every stage of production.",
      icon: "🐔",
    },
    {
      title: "Sustainability",
      description:
        "We are dedicated to sustainable farming practices that support environmental responsibility, efficient resource management, and long-term agricultural growth.",
      icon: "🌱",
    },
    {
      title: "Integrity",
      description:
        "We conduct our business with honesty, accountability, professionalism, and transparency in all our relationships with customers, staff, suppliers, and stakeholders.",
      icon: "🤝",
    },
    {
      title: "Community Impact",
      description:
        "We are committed to contributing positively to the communities we serve by supporting food accessibility, economic growth, and responsible business practices.",
      icon: "🏘️",
    },
    {
      title: "People & Staff Welfare",
      description:
        "We value the people behind our operations and are committed to creating a safe, respectful, and supportive working environment that promotes staff well-being, growth, and productivity.",
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
