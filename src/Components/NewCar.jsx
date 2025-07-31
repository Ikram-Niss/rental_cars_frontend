import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewCar() {
  const [matricule, setMatricule] = useState("");
  const [marque, setMarque] = useState("");
  const [model, setModel] = useState("");
  const [prix, setPrix] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("matricule", matricule);
    formData.append("marque", marque);
    formData.append("model", model);
    formData.append("prix", prix);
    formData.append("image", image);
    console.log(formData);


    axios.post("http://localhost:3000/cars", formData)
      .then(res => {
        alert('Car added !')
        console.log(res);
        
      })
      .catch(err => console.log(err))

  };



  return (
<div
  style={{
    minHeight: "100vh",
    background: "linear-gradient(135deg, #1f005c, #5b00b3, #007bff)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  }}
>
  <form
    onSubmit={handleSubmit}
    style={{
      background: "rgba(255, 255, 255, 0.1)",
      padding: 40,
      borderRadius: 20,
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(255, 255, 255, 0.18)",
      width: "100%",
      maxWidth: 450,
      color: "white",
    }}
  >
    <h2 style={{ marginBottom: 30, textAlign: "center", fontWeight: "900" }}>
      🚘 Ajouter une Voiture
    </h2>

    {/* Inputs */}
    {[
      { label: "Matricule", value: matricule, setter: setMatricule, type: "text", placeholder: "Ex: 1234-ABC" },
      { label: "Marque", value: marque, setter: setMarque, type: "text", placeholder: "Ex: Mercedes" },
      { label: "Modèle", value: model, setter: setModel, type: "text", placeholder: "Ex: C-Class" },
      { label: "Prix (DH)", value: prix, setter: setPrix, type: "number", placeholder: "Ex: 400" },
    ].map(({ label, value, setter, type, placeholder }) => (
      <div key={label} style={{ marginBottom: 20 }}>
        <label style={{ display: "block", marginBottom: 6, fontWeight: "bold", fontSize: 14 }}>
          {label} :
        </label>
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => setter(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "12px 15px",
            borderRadius: 12,
            border: "none",
            outline: "none",
            fontSize: 16,
            fontWeight: "600",
            background: "rgba(0, 123, 255, 0.2)",
            color: "white",
            boxShadow: "inset 0 0 8px rgba(0, 123, 255, 0.3)",
            transition: "0.3s",
          }}
          onFocus={(e) => (e.target.style.background = "rgba(0, 123, 255, 0.35)")}
          onBlur={(e) => (e.target.style.background = "rgba(0, 123, 255, 0.2)")}
        />
      </div>
    ))}

    {/* Image input */}
    <div style={{ marginBottom: 30 }}>
      <label style={{ display: "block", marginBottom: 6, fontWeight: "bold", fontSize: 14 }}>
        📷 Ajouter une image :
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: 12,
          border: "none",
          background: "rgba(106, 17, 203, 0.25)",
          color: "white",
          cursor: "pointer",
          fontWeight: "600",
        }}
        required
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      style={{
        width: "100%",
        padding: "14px 0",
        borderRadius: 30,
        border: "none",
        background: "linear-gradient(90deg, #6a11cb, #2575fc)",
        color: "white",
        fontSize: 18,
        fontWeight: "900",
        cursor: "pointer",
        boxShadow: "0 6px 20px rgba(106, 17, 203, 0.6)",
        transition: "0.3s",
      }}
      onMouseEnter={(e) => {
        e.target.style.background = "linear-gradient(90deg, #2575fc, #6a11cb)";
        e.target.style.boxShadow = "0 6px 30px rgba(37, 117, 252, 0.6)";
      }}
      onMouseLeave={(e) => {
        e.target.style.background = "linear-gradient(90deg, #6a11cb, #2575fc)";
        e.target.style.boxShadow = "0 6px 20px rgba(106, 17, 203, 0.6)";
      }}
    >
      Ajouter
    </button>
  </form>
</div>

  );
}
