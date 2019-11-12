// --- Import des packages ---
import React, { useState, useEffect } from "react";
import axios from "axios";
// --- Import du CSS ---
import "./App.css";
// --- Import des components ---
import Header from "./components/Header";
import Top from "./components/Top";
import Section from "./components/Section";

function App() {
  const [top, setTop] = useState([]);
  const [section, setSection] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://deliveroo-api.now.sh/menu");
      setTop(response.data.restaurant);
      setSection(response.data.menu);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Top name={top.name} description={top.description} photo={top.picture} />
      <div className="menu">
        <Section section={section} />
      </div>
    </>
  );
}

export default App;
