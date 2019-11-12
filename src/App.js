// --- Import des packages ---
import React from "react";
import axios from "axios";
// --- Import du CSS ---
import "./App.css";
// --- Import des components ---
import Header from "./components/Header";
import Top from "./components/Top";
import Section from "./components/Section";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Header />
      <Top />
      <Section />
      <Card />
    </>
  );
}

export default App;
