import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <section style={{ padding: "40px", textAlign: "center" }}>
        <SectionTitle
          title="Our Products"
          subtitle="Quality poultry products from Nico Farms"
        />

        <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
          
          <ProductCard
            title="Fresh Eggs"
            description="Nutritious farm fresh eggs produced from healthy birds."
          />

          <ProductCard
            title="Broiler Chickens"
            description="Healthy broiler birds raised using responsible farming practices."
          />

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
