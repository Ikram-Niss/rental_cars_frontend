// src/Components/Contact.jsx
import { useState } from "react";
import { Envelope, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Message envoyé avec succès !");
    // TODO: Envoi au backend ici
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <div
      className="min-vh-100 text-white py-5 px-3"
      style={{
        background: "linear-gradient(135deg, #000000, #3b0a67)",
        fontFamily: "sans-serif",
      }}
    >
      <div className="container">
        <h1 className="text-center mb-4 display-5 fw-bold">📩 Contactez-nous</h1>

        <div className="row g-4 mt-4">
          {/* Infos de Contact */}
          <div className="col-md-5">
            <div className="bg-dark p-4 rounded shadow">
              <h4 className="mb-4">Nos Coordonnées</h4>
              <p><MapPin className="me-2 text-warning" /> Casablanca, Maroc</p>
              <p><Phone className="me-2 text-warning" /> +212 6 12 34 56 78</p>
              <p><Envelope className="me-2 text-warning" /> contact@locationvoitures.ma</p>
            </div>
          </div>

          {/* Formulaire */}
          <div className="col-md-7">
            <div className="bg-light text-dark p-4 rounded shadow">
              <h4 className="mb-4">Envoyez-nous un message</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Nom</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom complet"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    className="form-control"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Écrivez votre message ici..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-dark w-100">
                  Envoyer ✉️
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
