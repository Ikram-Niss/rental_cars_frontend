import React from "react";
import HeroSection from "../Components/HeroSection";

const HomePage = () => {
  return (
    <div style={{
      background: "linear-gradient(to bottom, #f0f4ff, #ffffff)",
      minHeight: "100vh",
      paddingTop: "100px", // باش تبعد على navbar
      
    }}>
      
      
      {/* Hero Section */}
      <HeroSection />

      {/* Formulaire de recherche */}
      <section className="container mt-5 bg-white p-4 rounded shadow-sm border" style={{ marginTop: "60px" }}>
        <h4 className="text-center fw-bold mb-4 text-primary">🚙 Trouvez votre voiture idéale</h4>
        <form className="row g-3 align-items-end">
          <div className="col-md-4">
            <label htmlFor="location" className="form-label fw-semibold">📍 Lieu de prise en charge</label>
            <input
              type="text"
              className="form-control"
              id="location"
              placeholder="Ex : Casablanca"
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="pickupDate" className="form-label fw-semibold">📅 Date de prise</label>
            <input type="date" className="form-control" id="pickupDate" />
          </div>

          <div className="col-md-3">
            <label htmlFor="returnDate" className="form-label fw-semibold">📅 Date de retour</label>
            <input type="date" className="form-control" id="returnDate" />
          </div>

          <div className="col-md-2 d-grid">
            <button type="submit" className="btn btn-primary fw-bold">
              🔍 Rechercher
            </button>
          </div>
        </form>
      </section>

      {/* Features section */}
      <section className="container my-5">
        <div className="row text-center g-4">
          <div className="col-md-4">
            <div className="p-4 bg-white rounded shadow border-start border-4 border-success">
              <h5 className="fw-bold text-success">🚘 Large choix</h5>
              <p className="text-muted">Des voitures économiques aux SUV de luxe.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 bg-white rounded shadow border-start border-4 border-warning">
              <h5 className="fw-bold text-warning">💰 Tarifs compétitifs</h5>
              <p className="text-muted">Des prix transparents sans frais cachés.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 bg-white rounded shadow border-start border-4 border-danger">
              <h5 className="fw-bold text-danger">📞 Support 24/7</h5>
              <p className="text-muted">Une assistance disponible à tout moment.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
    
  );
};

export default HomePage;
