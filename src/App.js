import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./styles.css";

export default function App() {
  const language = "en"; // Set the language you want to use (e.g., 'en', 'es', 'fr', etc.)

  return (
    <div className="App">
      <Header language={language} />
      <Footer language={language}  />
    </div>
  );
}
